import { supabase } from '../lib/supabase'
import type { VoteResult } from '../types/voteResult'
export interface SubmitVoteResult {
  success: boolean
  message: string
}

export async function submitVote(
  participantId: number,
  voterKey: string,
): Promise<SubmitVoteResult> {
  const { error } = await supabase
    .from('votes')
    .insert({
      participant_id: participantId,
      voter_key: voterKey,
    })

  if (!error) {
    return {
      success: true,
      message: '投票成功',
    }
  }

  // PostgreSQL unique constraint violation
  if (error.code === '23505') {
    return {
      success: false,
      message: '這個瀏覽器已經投過票了。',
    }
  }

  throw new Error(`投票失敗：${error.message}`)
}
export async function getVoteResults(): Promise<VoteResult[]> {
  const { data, error } = await supabase.rpc(
    'get_vote_results',
  )

  if (error) {
    throw new Error(`取得投票結果失敗：${error.message}`)
  }

  return (data ?? []).map((item) => ({
    ...item,
    vote_count: Number(item.vote_count),
  })) as VoteResult[]
}