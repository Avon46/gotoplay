import { supabase } from '../lib/supabase'
import type { Participant } from '../types/participant'

export async function getParticipants(): Promise<Participant[]> {
  const { data, error } = await supabase
    .from('participants')
    .select(
      'id, name, work_title, description, image_url, created_at',
    )
    .order('id', { ascending: true })

  if (error) {
    throw new Error(`取得參賽作品失敗：${error.message}`)
  }

  return (data ?? []) as Participant[]
}