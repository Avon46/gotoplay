<script setup lang="ts">
import { computed } from 'vue'
import {
  RouterLink,
  RouterView,
  useRoute,
} from 'vue-router'

const route = useRoute()

const activeSection = computed(() => {
  const routeName = String(route.name ?? '')

  if (routeName === 'home') {
    return 'notice'
  }

  if (
    [
      'participate',
      'submit',
      'submission-success',
      'vote',
      'vote-success',
    ].includes(routeName)
  ) {
    return 'participate'
  }

  if (routeName === 'results') {
    return 'results'
  }

  return ''
})
</script>

<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="navigation-shell">
        <RouterLink class="brand" to="/">
          <span class="brand-mascot" aria-hidden="true">
            <span class="mascot-ear left-ear" />
            <span class="mascot-face">桓</span>
            <span class="mascot-ear right-ear" />
          </span>

          <span class="brand-text">
            <strong>鄭桓大人的穿搭大賞</strong>
            <small>SKY OUTFIT AWARDS</small>
          </span>
        </RouterLink>

        <nav class="main-navigation" aria-label="主要選單">
          <RouterLink
            class="navigation-item"
            :class="{ active: activeSection === 'notice' }"
            to="/"
          >
            活動須知
          </RouterLink>

          <RouterLink
            class="navigation-item"
            :class="{ active: activeSection === 'participate' }"
            to="/participate"
          >
            投稿＆投票
          </RouterLink>
        </nav>

        <RouterLink
          class="result-navigation"
          :class="{ active: activeSection === 'results' }"
          to="/results"
        >
          查看結果
        </RouterLink>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style>
:root {
  --sky-50: #f5fbff;
  --sky-100: #e9f7ff;
  --sky-200: #cfeeff;
  --sky-300: #a8ddf7;
  --sky-400: #75c7ec;
  --sky-500: #4cadd9;
  --sky-600: #318db9;

  --cream-100: #fff9de;
  --cream-200: #ffefad;
  --pudding: #f7d879;
  --caramel: #9c704e;

  --ink: #385266;
  --muted: #718998;
  --border: rgba(76, 173, 217, 0.2);
  --surface: rgba(255, 255, 255, 0.9);

  color: var(--ink);
  background: var(--sky-50);
  font-family:
    Inter,
    'Noto Sans TC',
    'Microsoft JhengHei',
    Arial,
    sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

html {
  min-width: 320px;
  scroll-behavior: smooth;
  background: var(--sky-50);
}

body {
  min-width: 320px;
  min-height: 100vh;
  margin: 0;
  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(168, 221, 247, 0.28),
      transparent 28%
    ),
    radial-gradient(
      circle at 90% 50%,
      rgba(255, 239, 173, 0.2),
      transparent 25%
    ),
    var(--sky-50);
}

button,
input,
textarea {
  font: inherit;
}

button,
a {
  -webkit-tap-highlight-color: transparent;
}

.site-header {
  position: sticky;
  z-index: 100;
  top: 0;
  padding: 14px 16px 0;
  background:
    linear-gradient(
      to bottom,
      rgba(245, 251, 255, 0.98),
      rgba(245, 251, 255, 0.76),
      transparent
    );
  backdrop-filter: blur(18px);
}

.navigation-shell {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow:
    0 12px 38px rgba(76, 173, 217, 0.12),
    inset 0 1px 0 white;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  color: var(--ink);
  text-decoration: none;
}

.brand-mascot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 44px;
}

.mascot-face {
  position: relative;
  z-index: 2;
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border: 2px solid var(--sky-200);
  border-radius: 50%;
  color: var(--sky-600);
  background: white;
  box-shadow: 0 6px 16px rgba(76, 173, 217, 0.16);
  font-weight: 900;
}

.mascot-ear {
  position: absolute;
  z-index: 1;
  width: 29px;
  height: 14px;
  border: 2px solid var(--sky-200);
  background: white;
}

.left-ear {
  left: 0;
  border-radius: 999px 20px 20px 999px;
  transform: rotate(-12deg);
}

.right-ear {
  right: 0;
  border-radius: 20px 999px 999px 20px;
  transform: rotate(12deg);
}

.brand-text {
  display: grid;
  gap: 1px;
}

.brand-text strong {
  font-size: 14px;
}

.brand-text small {
  color: var(--sky-600);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.main-navigation {
  display: flex;
  gap: 4px;
  padding: 4px;
  border: 1px solid rgba(76, 173, 217, 0.08);
  border-radius: 999px;
  background: var(--sky-100);
}

.navigation-item {
  min-width: 110px;
  padding: 10px 18px;
  border-radius: 999px;
  color: var(--muted);
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.navigation-item:hover {
  color: var(--sky-600);
}

.navigation-item.active {
  color: white;
  background:
    linear-gradient(
      135deg,
      var(--sky-400),
      var(--sky-600)
    );
  box-shadow: 0 8px 20px rgba(49, 141, 185, 0.24);
}

.result-navigation {
  justify-self: end;
  padding: 10px 18px;
  border: 1px solid var(--sky-200);
  border-radius: 999px;
  color: var(--sky-600);
  background: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 800;
  transition:
    color 0.2s ease,
    background 0.2s ease;
}

.result-navigation:hover,
.result-navigation.active {
  color: white;
  border-color: var(--sky-500);
  background: var(--sky-500);
}

@media (max-width: 800px) {
  .site-header {
    padding: 10px 10px 0;
  }

  .navigation-shell {
    grid-template-columns: 1fr auto;
    gap: 10px;
    border-radius: 24px;
  }

  .brand-text {
    display: none;
  }

  .main-navigation {
    grid-column: 1 / -1;
    grid-row: 2;
    width: 100%;
  }

  .navigation-item {
    flex: 1;
    min-width: 0;
  }

  .result-navigation {
    grid-column: 2;
    grid-row: 1;
  }
}
</style>