<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="participate-page">
    <!-- 頁面背景裝飾 -->
    <div class="background-cloud cloud-left" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>

    <div class="background-cloud cloud-right" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>

    <section class="page-heading">
      <span class="eyebrow">JOIN THE EVENT</span>

      <h1>投稿＆投票</h1>

      <p>
        幫鄭桓大人挑選一套衣服，投稿你的穿搭提案，
        再替其他參賽作品投下支持的一票。
      </p>

      <div class="heading-decoration" aria-hidden="true">
        <span class="small-star">✦</span>
        <span class="small-cloud">☁</span>
        <span class="small-star">✦</span>
      </div>
    </section>

    <section class="action-grid">
      <!-- 投稿卡 -->
      <RouterLink class="action-card submit-card" to="/submit">
        <div class="card-background-decoration" aria-hidden="true">
          <div class="card-cloud cloud-one">
            <span />
            <span />
            <span />
          </div>

          <div class="card-cloud cloud-two">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div class="cloud-mascot" aria-hidden="true">
          <span class="mascot-ear mascot-ear-left" />
          <span class="mascot-face">
            <span class="eye left-eye" />
            <span class="eye right-eye" />
            <span class="mouth" />
          </span>
          <span class="mascot-ear mascot-ear-right" />
        </div>

        <div class="card-content">
          <span class="step">STEP 01</span>

          <h2>投稿穿搭</h2>

          <p>
            填寫投稿者名稱、作品名稱，
            並上傳你為鄭桓大人準備的穿搭圖片。
          </p>

          <span class="card-link">
            前往投稿
            <span class="arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </RouterLink>

      <!-- 投票卡 -->
      <RouterLink class="action-card vote-card" to="/vote">
        <div class="pudding-decoration pudding-small" aria-hidden="true">
          <span class="pudding-cap" />
          <span class="pudding-body" />
          <span class="pudding-shadow" />
        </div>

        <div class="pudding-mascot" aria-hidden="true">
          <span class="beret" />
          <span class="pudding-head">
            <span class="eye left-eye" />
            <span class="eye right-eye" />
            <span class="mouth" />
          </span>
          <span class="pudding-base" />
        </div>

        <div class="card-content">
          <span class="step">STEP 02</span>

          <h2>開始投票</h2>

          <p>
            欣賞大家投稿的穿搭作品，
            選出你認為最適合鄭桓大人的一套。
          </p>

          <span class="card-link">
            前往投票
            <span class="arrow" aria-hidden="true">→</span>
          </span>
        </div>
      </RouterLink>
    </section>

    <section class="result-panel">
      <div class="result-decoration" aria-hidden="true">
        <span class="result-star">✦</span>
      </div>

      <div class="result-content">
        <span class="result-label">LIVE RESULT</span>

        <h2>想知道目前誰領先嗎？</h2>

        <p>前往查看目前票數與作品排名。</p>
      </div>

      <RouterLink class="result-button" to="/results">
        查看投票結果
        <span aria-hidden="true">→</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.participate-page {
  position: relative;
  width: min(100% - 32px, 1080px);
  margin: 0 auto;
  padding: 72px 0 96px;
}

/* 標題 */

.page-heading {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto 48px;
  text-align: center;
}

.eyebrow,
.step,
.result-label {
  color: var(--sky-600, #318db9);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.page-heading h1 {
  margin: 12px 0 16px;
  color: var(--ink, #385266);
  font-size: clamp(42px, 8vw, 72px);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.page-heading p {
  margin: 0;
  color: var(--muted, #718998);
  font-size: 17px;
  line-height: 1.8;
}

.heading-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
  color: var(--sky-400, #75c7ec);
}

.small-cloud {
  font-size: 26px;
}

.small-star {
  font-size: 14px;
}

/* 背景雲朵 */

.background-cloud {
  position: absolute;
  z-index: 0;
  width: 180px;
  height: 72px;
  opacity: 0.55;
  pointer-events: none;
}

.background-cloud span {
  position: absolute;
  bottom: 0;
  display: block;
  border: 1px solid rgba(168, 221, 247, 0.5);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.85);
}

.background-cloud span:nth-child(1) {
  left: 0;
  width: 95px;
  height: 46px;
}

.background-cloud span:nth-child(2) {
  left: 54px;
  width: 82px;
  height: 70px;
}

.background-cloud span:nth-child(3) {
  right: 0;
  width: 90px;
  height: 42px;
}

.cloud-left {
  top: 20px;
  left: -100px;
  transform: scale(0.85);
}

.cloud-right {
  top: 160px;
  right: -110px;
  transform: scale(0.65);
}

/* 卡片版型 */

.action-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.action-card {
  position: relative;
  display: flex;
  min-height: 360px;
  overflow: hidden;
  padding: 36px;
  border: 1px solid var(--border, rgba(76, 173, 217, 0.2));
  border-radius: 30px;
  color: var(--ink, #385266);
  text-decoration: none;
  box-shadow:
    0 20px 60px rgba(76, 173, 217, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.action-card:hover {
  border-color: var(--sky-300, #a8ddf7);
  transform: translateY(-7px);
  box-shadow:
    0 30px 75px rgba(76, 173, 217, 0.17),
    inset 0 1px 0 white;
}

.submit-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.96),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      var(--sky-100, #e9f7ff),
      white 72%
    );
}

.vote-card {
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.96),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      var(--cream-100, #fff9de),
      white 72%
    );
}

.card-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 68%;
}

.card-content h2 {
  margin: 18px 0 14px;
  color: var(--ink, #385266);
  font-size: 34px;
}

.card-content p {
  max-width: 360px;
  margin: 0;
  color: var(--muted, #718998);
  line-height: 1.8;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 32px;
  color: var(--sky-600, #318db9);
  font-weight: 900;
}

.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.action-card:hover .arrow {
  transform: translateX(5px);
}

/* 雲朵長耳吉祥物 */

.cloud-mascot {
  position: absolute;
  z-index: 2;
  top: 36px;
  right: 26px;
  display: flex;
  align-items: center;
  width: 150px;
  height: 100px;
  transition: transform 0.25s ease;
}

.action-card:hover .cloud-mascot {
  transform: translateY(-5px) rotate(2deg);
}

.mascot-face {
  position: absolute;
  z-index: 2;
  right: 39px;
  display: block;
  width: 76px;
  height: 76px;
  border: 3px solid var(--sky-200, #cfeeff);
  border-radius: 48% 48% 44% 44%;
  background: white;
  box-shadow: 0 12px 28px rgba(76, 173, 217, 0.14);
}

.mascot-ear {
  position: absolute;
  z-index: 1;
  top: 37px;
  width: 65px;
  height: 25px;
  border: 3px solid var(--sky-200, #cfeeff);
  background: white;
}

.mascot-ear-left {
  left: 0;
  border-radius: 999px 30px 30px 999px;
  transform: rotate(-14deg);
}

.mascot-ear-right {
  right: -4px;
  border-radius: 30px 999px 999px 30px;
  transform: rotate(14deg);
}

.eye {
  position: absolute;
  top: 31px;
  width: 5px;
  height: 8px;
  border-radius: 999px;
  background: #587286;
}

.left-eye {
  left: 25px;
}

.right-eye {
  right: 25px;
}

.mouth {
  position: absolute;
  top: 43px;
  left: 50%;
  width: 11px;
  height: 6px;
  border-bottom: 2px solid #587286;
  border-radius: 0 0 999px 999px;
  transform: translateX(-50%);
}

/* 投稿卡內雲朵 */

.card-background-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.card-cloud {
  position: absolute;
  width: 100px;
  height: 42px;
  opacity: 0.55;
}

.card-cloud span {
  position: absolute;
  bottom: 0;
  border-radius: 999px;
  background: white;
}

.card-cloud span:nth-child(1) {
  left: 0;
  width: 52px;
  height: 29px;
}

.card-cloud span:nth-child(2) {
  left: 29px;
  width: 45px;
  height: 42px;
}

.card-cloud span:nth-child(3) {
  right: 0;
  width: 48px;
  height: 26px;
}

.cloud-one {
  right: 38px;
  bottom: 36px;
}

.cloud-two {
  right: 160px;
  bottom: 12px;
  transform: scale(0.62);
}

/* 布丁吉祥物 */

.pudding-mascot {
  position: absolute;
  z-index: 2;
  top: 28px;
  right: 32px;
  width: 120px;
  height: 120px;
  transition: transform 0.25s ease;
}

.action-card:hover .pudding-mascot {
  transform: translateY(-5px) rotate(-2deg);
}

.beret {
  position: absolute;
  z-index: 4;
  top: 6px;
  left: 34px;
  width: 57px;
  height: 18px;
  border-radius: 999px;
  background: var(--caramel, #9c704e);
  transform: rotate(-8deg);
}

.beret::after {
  position: absolute;
  top: -6px;
  left: 28px;
  width: 5px;
  height: 9px;
  border-radius: 999px;
  background: var(--caramel, #9c704e);
  content: '';
}

.pudding-head {
  position: absolute;
  z-index: 3;
  top: 22px;
  left: 17px;
  width: 88px;
  height: 76px;
  border: 3px solid rgba(156, 112, 78, 0.14);
  border-radius: 46% 46% 38% 38%;
  background:
    linear-gradient(
      to bottom,
      #fff0ad,
      var(--pudding, #f7d879)
    );
  box-shadow:
    inset 0 10px 0 rgba(255, 255, 255, 0.32),
    0 12px 26px rgba(156, 112, 78, 0.12);
}

.pudding-base {
  position: absolute;
  z-index: 2;
  bottom: 10px;
  left: 8px;
  width: 105px;
  height: 29px;
  border-radius: 50%;
  background: #c89468;
}

.pudding-decoration {
  position: absolute;
  pointer-events: none;
}

.pudding-small {
  right: 150px;
  bottom: 24px;
  width: 60px;
  height: 55px;
  opacity: 0.42;
  transform: rotate(10deg);
}

.pudding-cap {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 17px;
  width: 29px;
  height: 9px;
  border-radius: 999px;
  background: var(--caramel, #9c704e);
}

.pudding-body {
  position: absolute;
  z-index: 2;
  top: 8px;
  left: 8px;
  width: 46px;
  height: 37px;
  border-radius: 45% 45% 36% 36%;
  background: var(--pudding, #f7d879);
}

.pudding-shadow {
  position: absolute;
  z-index: 1;
  bottom: 3px;
  left: 3px;
  width: 56px;
  height: 15px;
  border-radius: 50%;
  background: #c89468;
}

/* 結果區 */

.result-panel {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  overflow: hidden;
  margin-top: 28px;
  padding: 30px 34px;
  border: 1px solid var(--border, rgba(76, 173, 217, 0.2));
  border-radius: 24px;
  background:
    radial-gradient(
      circle at right center,
      rgba(168, 221, 247, 0.35),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      white,
      var(--sky-100, #e9f7ff)
    );
  box-shadow: 0 18px 50px rgba(76, 173, 217, 0.08);
}

.result-content {
  position: relative;
  z-index: 2;
}

.result-panel h2 {
  margin: 8px 0;
  color: var(--ink, #385266);
}

.result-panel p {
  margin: 0;
  color: var(--muted, #718998);
}

.result-button {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 13px 22px;
  border-radius: 999px;
  color: white;
  background:
    linear-gradient(
      135deg,
      var(--sky-400, #75c7ec),
      var(--sky-600, #318db9)
    );
  box-shadow: 0 10px 24px rgba(49, 141, 185, 0.22);
  text-decoration: none;
  font-weight: 900;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.result-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(49, 141, 185, 0.28);
}

.result-decoration {
  position: absolute;
  top: -42px;
  right: 190px;
  width: 130px;
  height: 130px;
  border: 26px solid rgba(255, 255, 255, 0.45);
  border-radius: 50%;
}

.result-star {
  position: absolute;
  right: -25px;
  bottom: 4px;
  color: var(--sky-400, #75c7ec);
  font-size: 24px;
}

/* 手機版 */

@media (max-width: 720px) {
  .participate-page {
    padding-top: 48px;
  }

  .action-grid {
    grid-template-columns: 1fr;
  }

  .action-card {
    min-height: 350px;
    padding: 28px;
  }

  .card-content {
    max-width: 66%;
  }

  .cloud-mascot {
    right: 10px;
    transform: scale(0.82);
    transform-origin: top right;
  }

  .pudding-mascot {
    right: 14px;
    transform: scale(0.85);
    transform-origin: top right;
  }

  .action-card:hover .cloud-mascot,
  .action-card:hover .pudding-mascot {
    transform: scale(0.85);
  }

  .result-panel {
    align-items: flex-start;
    flex-direction: column;
  }

  .result-button {
    width: 100%;
    justify-content: center;
  }

  .cloud-left,
  .cloud-right {
    display: none;
  }
}

@media (max-width: 480px) {
  .page-heading h1 {
    font-size: 46px;
  }

  .action-card {
    min-height: 390px;
  }

  .card-content {
    max-width: 100%;
    padding-top: 112px;
  }

  .cloud-mascot,
  .pudding-mascot {
    top: 20px;
    right: 50%;
    transform: translateX(50%) scale(0.82);
  }

  .action-card:hover .cloud-mascot,
  .action-card:hover .pudding-mascot {
    transform: translateX(50%) scale(0.82);
  }

  .card-content h2 {
    font-size: 30px;
  }
}
</style>