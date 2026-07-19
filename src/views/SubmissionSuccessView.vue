<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const workTitle = computed(() => {
  const value = route.query.title

  return typeof value === 'string'
    ? value
    : ''
})
</script>

<template>
  <main class="page">
    <section class="success-card">
      <div class="success-icon">✓</div>

      <h1>投稿已送出</h1>

      <p v-if="workTitle">
        作品
        <strong>「{{ workTitle }}」</strong>
        已經送出。
      </p>

      <p v-else>
        你的作品已經成功送出。
      </p>

      <p class="notice">
        投稿目前正在等待主辦人審核，審核通過後才會出現在投票頁。
      </p>

      <div class="actions">
        <RouterLink class="secondary-button" to="/">
          回到首頁
        </RouterLink>

        <RouterLink class="primary-button" to="/submit">
          再投稿一件
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.success-card {
  width: min(100%, 520px);
  padding: 48px 32px;
  border: 1px solid #ddd;
  border-radius: 24px;
  background: white;
  text-align: center;
}

.success-icon {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  margin: 0 auto 24px;
  border-radius: 50%;
  color: white;
  background: #222;
  font-size: 36px;
}

.notice {
  color: #666;
  line-height: 1.7;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
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
}
</style>