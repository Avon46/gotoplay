<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const participantName = computed(() => {
  const value = route.query.participant

  return typeof value === 'string'
    ? value
    : ''
})
</script>

<template>
  <main class="page">
    <div class="success-card">
      <div class="success-icon">✓</div>

      <h1>投票成功</h1>

      <p v-if="participantName">
        你已經成功投給
        <strong>{{ participantName }}</strong>。
      </p>

      <p v-else>
        你的投票已經成功送出。
      </p>

      <p class="notice">
        每個瀏覽器只能投票一次。
      </p>

      <RouterLink class="home-link" to="/">
        回到活動首頁
      </RouterLink>
      <RouterLink class="result-link" to="/results">
        查看投票結果
        </RouterLink>
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}
.result-link {
  display: inline-block;
  margin: 12px 6px 0;
  padding: 12px 24px;
  border: 1px solid #ccc;
  border-radius: 999px;
  color: #222;
  background: white;
  text-decoration: none;
}
.success-card {
  width: min(100%, 480px);
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
  background: #222;
  color: white;
  font-size: 36px;
}

.notice {
  color: #666;
}

.home-link {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  border-radius: 999px;
  background: #222;
  color: white;
  text-decoration: none;
}
</style>