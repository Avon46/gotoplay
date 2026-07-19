<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import { getParticipants } from '../services/participantService'
import { submitVote } from '../services/voteService'
import { getOrCreateVoterKey } from '../utils/voterKey'

import type { Participant } from '../types/participant'

const router = useRouter()

const participants = ref<Participant[]>([])
const isLoading = ref(true)
const votingParticipantId = ref<number | null>(null)
const errorMessage = ref('')

async function loadParticipants() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    participants.value = await getParticipants()
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : '發生未知錯誤'
  } finally {
    isLoading.value = false
  }
}

async function handleVote(
  participant: Participant,
) {
  const confirmed = window.confirm(
  `確定要投給作品「${participant.work_title}」嗎？投票送出後不能修改。`,
  )

  if (!confirmed) {
    return
  }

  votingParticipantId.value = participant.id
  errorMessage.value = ''

  try {
    const voterKey = getOrCreateVoterKey()

    const result = await submitVote(
      participant.id,
      voterKey,
    )

    if (!result.success) {
      errorMessage.value = result.message
      return
    }

    await router.push({
      name: 'vote-success',
      query: {
        participant: participant.work_title,
      },
    })
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : '投票時發生未知錯誤'
  } finally {
    votingParticipantId.value = null
  }
}

onMounted(() => {
  loadParticipants()
})
</script>

<template>
  <main class="page">
    <header class="page-header">
      <p class="subtitle">人氣投票</p>
      <h1>選擇你支持的參賽者</h1>
      <p>每位投票者只能選擇一位參賽者。</p>
    </header>

    <p v-if="isLoading" class="message">
      參賽者載入中……
    </p>

    <section v-else-if="errorMessage" class="error-box">
      <p>{{ errorMessage }}</p>

      <button type="button" @click="loadParticipants">
        重新載入
      </button>
    </section>

    <p v-else-if="participants.length === 0" class="message">
      目前沒有參賽者。
    </p>

    <section v-else class="participant-grid">
      <article
        v-for="participant in participants"
        :key="participant.id"
        class="participant-card"
      >
        <img
          v-if="participant.image_url"
          :src="participant.image_url"
          :alt="participant.name"
          class="participant-image"
        />

        <div v-else class="image-placeholder">
          暫無圖片
        </div>

        <div class="card-content">
          <h2>{{ participant.work_title }}</h2>

            <p class="author">
            作者：{{ participant.name }}
            </p>

            <p>
            {{ participant.description || '尚無作品介紹' }}
            </p>


          <button
            type="button"
            :disabled="votingParticipantId !== null"
            @click="handleVote(participant)"
            >
            {{
                votingParticipantId === participant.id
                ? '投票送出中……'
                : `投給 ${participant.work_title}`
            }}
            </button>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>
.page {
  width: min(100% - 32px, 1000px);
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
.author {
  font-weight: 700;
  color: #555;
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

.participant-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(240px, 1fr)
  );
  gap: 24px;
}

.participant-card {
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
}

.participant-image,
.image-placeholder {
  width: 100%;
  height: 220px;
}

.participant-image {
  display: block;
  object-fit: cover;
}

.image-placeholder {
  display: grid;
  place-items: center;
  background: #eee;
  color: #777;
}

.card-content {
  padding: 20px;
}

.card-content h2 {
  margin-top: 0;
}

.card-content button {
  width: 100%;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  font: inherit;
}

.card-content button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.card-content button {
  width: 100%;
  padding: 12px 18px;
  border: 0;
  border-radius: 999px;
  color: white;
  background: #222;
  font: inherit;
  cursor: pointer;
}

.card-content button:hover:not(:disabled) {
  opacity: 0.85;
}

.card-content button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
