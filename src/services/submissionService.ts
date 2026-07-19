import { supabase } from '../lib/supabase'
import type { WorkSubmission } from '../types/submission'

const FILE_EXTENSION_BY_MIME_TYPE: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
}

export async function submitWork(
  submission: WorkSubmission,
): Promise<void> {
  const extension =
    FILE_EXTENSION_BY_MIME_TYPE[submission.imageFile.type]

  if (!extension) {
    throw new Error('圖片格式只支援 JPG、PNG 或 WebP')
  }

  const filePath =
    `submissions/${crypto.randomUUID()}.${extension}`

  const { error: uploadError } = await supabase.storage
    .from('works')
    .upload(filePath, submission.imageFile, {
      cacheControl: '3600',
      contentType: submission.imageFile.type,
      upsert: false,
    })

  if (uploadError) {
    throw new Error(`圖片上傳失敗：${uploadError.message}`)
  }

  const { data: publicUrlData } = supabase.storage
    .from('works')
    .getPublicUrl(filePath)

  const imageUrl = publicUrlData.publicUrl

  const { error: insertError } = await supabase
    .from('participants')
    .insert({
      name: submission.participantName.trim(),
      work_title: submission.workTitle.trim(),
      description:
        submission.description.trim() || null,
      image_url: imageUrl,
      status: 'approved',
    })

  if (insertError) {
    throw new Error(`投稿資料建立失敗：${insertError.message}`)
  }
}