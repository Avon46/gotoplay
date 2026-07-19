<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  ref,
} from 'vue'
import { useRouter } from 'vue-router'

import { submitWork } from '../services/submissionService'

const router = useRouter()

const participantName = ref('')
const workTitle = ref('')
const description = ref('')
const imageFile = ref<File | null>(null)
const imagePreviewUrl = ref('')

const isSubmitting = ref(false)
const errorMessage = ref('')

const MAX_FILE_SIZE = 5 * 1024 * 1024

const allowedImageTypes = [
  'image/jpeg',
  'image/png',
  'image/webp',
]

const canSubmit = computed(() => {
  return (
    participantName.value.trim().length > 0 &&
    workTitle.value.trim().length > 0 &&
    imageFile.value !== null &&
    !isSubmitting.value
  )
})

function clearImagePreview() {
  if (imagePreviewUrl.value) {
    URL.revokeObjectURL(imagePreviewUrl.value)
    imagePreviewUrl.value = ''
  }
}

function handleImageChange(event: Event) {
  errorMessage.value = ''

  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  clearImagePreview()
  imageFile.value = null

  if (!file) {
    return
  }

  if (!allowedImageTypes.includes(file.type)) {
    errorMessage.value =
      '圖片格式只支援 JPG、PNG 或 WebP。'
    input.value = ''
    return
  }

  if (file.size > MAX_FILE_SIZE) {
    errorMessage.value =
      '圖片不能超過 5 MB。'
    input.value = ''
    return
  }

  imageFile.value = file
  imagePreviewUrl.value = URL.createObjectURL(file)
}

async function handleSubmit() {
  errorMessage.value = ''

  if (!participantName.value.trim()) {
    errorMessage.value = '請輸入參賽者名稱。'
    return
  }

  if (!workTitle.value.trim()) {
    errorMessage.value = '請輸入作品名稱。'
    return
  }

  if (!imageFile.value) {
    errorMessage.value = '請選擇作品圖片。'
    return
  }

  isSubmitting.value = true

  try {
    await submitWork({
      participantName: participantName.value,
      workTitle: workTitle.value,
      description: description.value,
      imageFile: imageFile.value,
    })

    await router.push({
      name: 'submission-success',
      query: {
        title: workTitle.value.trim(),
      },
    })
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : '投稿時發生未知錯誤。'
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  clearImagePreview()
})
</script>

<template>
  <main class="page">
    <header class="page-header">
      <p class="subtitle">作品投稿</p>
      <h1>加入本次活動</h1>
      <p>
        投稿完成後會先進入審核，通過後才會出現在投票頁。
      </p>
    </header>

    <form class="submission-form" @submit.prevent="handleSubmit">
      <div class="form-field">
        <label for="participant-name">
          參賽者名稱
          <span aria-hidden="true">*</span>
        </label>

        <input
          id="participant-name"
          v-model="participantName"
          type="text"
          maxlength="100"
          autocomplete="name"
          placeholder="例如：阿桓"
          required
        />

        <small>
          {{ participantName.length }}/100
        </small>
      </div>

      <div class="form-field">
        <label for="work-title">
          作品名稱
          <span aria-hidden="true">*</span>
        </label>

        <input
          id="work-title"
          v-model="workTitle"
          type="text"
          maxlength="150"
          placeholder="例如：夏日星空"
          required
        />

        <small>
          {{ workTitle.length }}/150
        </small>
      </div>

      <div class="form-field">
        <label for="description">
          作品介紹
        </label>

        <textarea
          id="description"
          v-model="description"
          maxlength="500"
          rows="5"
          placeholder="簡單介紹作品的內容或創作想法"
        />

        <small>
          {{ description.length }}/500
        </small>
      </div>

      <div class="form-field">
        <label for="work-image">
          作品圖片
          <span aria-hidden="true">*</span>
        </label>

        <input
          id="work-image"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          required
          @change="handleImageChange"
        />

        <small>
          支援 JPG、PNG、WebP，檔案上限 5 MB。
        </small>
      </div>

      <section
        v-if="imagePreviewUrl"
        class="preview-section"
      >
        <h2>圖片預覽</h2>

        <img
          :src="imagePreviewUrl"
          :alt="workTitle || '作品預覽'"
          class="image-preview"
        />
      </section>

      <div
        v-if="errorMessage"
        class="error-box"
        role="alert"
      >
        {{ errorMessage }}
      </div>

      <button
        class="submit-button"
        type="submit"
        :disabled="!canSubmit"
      >
        {{
          isSubmitting
            ? '圖片上傳與投稿中……'
            : '送出作品'
        }}
      </button>
    </form>
  </main>
</template>

<style scoped>
.page {
  width: min(100% - 32px, 720px);
  margin: 0 auto;
  padding: 48px 0 80px;
}

.page-header {
  margin-bottom: 32px;
  text-align: center;
}

.subtitle {
  margin-bottom: 8px;
  font-weight: 700;
}

h1 {
  margin: 0 0 12px;
}

.submission-form {
  display: grid;
  gap: 24px;
  padding: 28px;
  border: 1px solid #ddd;
  border-radius: 24px;
  background: white;
}

.form-field {
  display: grid;
  gap: 8px;
}

.form-field label {
  font-weight: 700;
}

.form-field label span {
  color: #c62828;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #bbb;
  border-radius: 12px;
  background: white;
  font: inherit;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: #222;
  outline: 2px solid rgba(0, 0, 0, 0.12);
}

.form-field textarea {
  resize: vertical;
}

.form-field small {
  color: #666;
  text-align: right;
}

.preview-section h2 {
  font-size: 16px;
}

.image-preview {
  display: block;
  width: 100%;
  max-height: 480px;
  border-radius: 16px;
  object-fit: contain;
  background: #eee;
}

.error-box {
  padding: 14px 16px;
  border: 1px solid #d33;
  border-radius: 12px;
  color: #a11;
  background: #fff5f5;
}

.submit-button {
  width: 100%;
  padding: 14px 20px;
  border: 0;
  border-radius: 999px;
  color: white;
  background: #222;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
}

.submit-button:hover:not(:disabled) {
  opacity: 0.85;
}

.submit-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

@media (max-width: 600px) {
  .submission-form {
    padding: 20px;
  }
}
</style>