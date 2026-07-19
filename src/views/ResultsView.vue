<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import { getVoteResults } from '../services/voteService'
import type { VoteResult } from '../types/voteResult'
import ImagePreviewModal
  from '../components/ImagePreviewModal.vue'


const isImagePreviewOpen = ref(false)
const previewImageUrl = ref<string | null>(null)
const previewImageAlt = ref('')

function openImagePreview(
  result: VoteResult,
) {
  if (!result.image_url) {
    return
  }

  previewImageUrl.value = result.image_url
  previewImageAlt.value =
    `${result.participant_name} 的完整作品圖片`

  isImagePreviewOpen.value = true
}
const results = ref<VoteResult[]>([])
const isLoading = ref(true)
const errorMessage = ref('')

const totalVotes = computed(() => {
  return results.value.reduce(
    (total, result) => total + result.vote_count,
    0,
  )
})

async function loadResults() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    results.value = await getVoteResults()
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : '發生未知錯誤'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadResults()
})
</script>

<template>
  <main class="page">
    <header class="page-header">
      <p class="subtitle">即時統計</p>
      <h1>投票結果</h1>
      <p>目前總票數：{{ totalVotes }}</p>
    </header>

    <p v-if="isLoading" class="message">
      結果載入中……
    </p>

    <section v-else-if="errorMessage" class="error-box">
      <p>{{ errorMessage }}</p>

      <button type="button" @click="loadResults">
        重新載入
      </button>
    </section>

    <p v-else-if="results.length === 0" class="message">
      目前沒有投票結果。
    </p>

    <section v-else class="ranking-list">
      <article
        v-for="(result, index) in results"
        :key="result.participant_id"
        class="ranking-card"
      >
        <div class="rank">
          {{ index + 1 }}
        </div>

        <button
        v-if="result.image_url"
        type="button"
        class="result-image-button"
        :aria-label="`查看 ${result.participant_name} 的完整圖片`"
        @click="openImagePreview(result)"
        >
        <img
            :src="result.image_url"
            :alt="result.participant_name"
            class="participant-image"
        />
        </button>

        <div v-else class="image-placeholder">
          無圖片
        </div>

        <div class="participant-info">
          <h2>{{ result.participant_name }}</h2>

          <div class="vote-bar-background">
            <div
              class="vote-bar"
              :style="{
                width:
                  totalVotes === 0
                    ? '0%'
                    : `${(result.vote_count / totalVotes) * 100}%`,
              }"
            />
          </div>
        </div>

        <div class="vote-count">
          <strong>{{ result.vote_count }}</strong>
          <span>票</span>
        </div>
      </article>
    </section>

    <nav class="actions">
      <RouterLink class="secondary-button" to="/">
        回到首頁
      </RouterLink>

      <RouterLink class="primary-button" to="/vote">
        前往投票
      </RouterLink>
    </nav>
    <ImagePreviewModal
        v-model="isImagePreviewOpen"
        :image-url="previewImageUrl"
        :alt-text="previewImageAlt"
        />
  </main>
</template>

<style scoped>
.page {
  width: min(100% - 32px, 900px);
  margin: 0 auto;
  padding: 48px 0;
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

.message {
  padding: 48px;
  text-align: center;
}

.error-box {
  padding: 24px;
  border: 1px solid #d33;
  border-radius: 16px;
  text-align: center;
}

.error-box button {
  padding: 10px 20px;
  border: 0;
  border-radius: 999px;
  cursor: pointer;
}

.ranking-list {
  display: grid;
  gap: 16px;
}

.ranking-card {
  display: grid;
  grid-template-columns: 52px 72px 1fr 72px;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 18px;
  background: white;
}

.rank {
  font-size: 24px;
  font-weight: 800;
  text-align: center;
}

.participant-image,
.image-placeholder {
  width: 72px;
  height: 72px;
  border-radius: 14px;
}

.participant-image {
  object-fit: cover;
}

.image-placeholder {
  display: grid;
  place-items: center;
  background: #eee;
  color: #777;
  font-size: 12px;
}

.participant-info h2 {
  margin: 0 0 12px;
  font-size: 18px;
}

.vote-bar-background {
  height: 10px;
  overflow: hidden;
  border-radius: 999px;
  background: #eee;
}

.vote-bar {
  height: 100%;
  min-width: 0;
  border-radius: inherit;
  background: #222;
  transition: width 0.3s ease;
}

.vote-count {
  text-align: center;
}

.vote-count strong {
  display: block;
  font-size: 24px;
}

.vote-count span {
  font-size: 13px;
  color: #666;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}

.primary-button,
.secondary-button {
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
}

.primary-button {
  color: white;
  background: #222;
}

.secondary-button {
  color: #222;
  border: 1px solid #ccc;
  background: white;
}

@media (max-width: 600px) {
  .ranking-card {
    grid-template-columns: 40px 56px 1fr;
  }

  .participant-image,
  .image-placeholder {
    width: 56px;
    height: 56px;
  }

  .vote-count {
    grid-column: 3;
    text-align: left;
  }

  .vote-count strong,
  .vote-count span {
    display: inline;
  }
}
.result-image-button {
  display: block;
  width: 72px;
  height: 72px;
  padding: 0;
  overflow: hidden;
  border: 0;
  border-radius: 14px;
  background: none;
  cursor: zoom-in;
}

.result-image-button .participant-image {
  transition: transform 0.22s ease;
}

.result-image-button:hover .participant-image {
  transform: scale(1.08);
}

.result-image-button:focus-visible {
  outline: 3px solid
    var(--sky-500, #4cadd9);
  outline-offset: 3px;
}

@media (max-width: 600px) {
  .result-image-button {
    width: 56px;
    height: 56px;
  }
}
</style>