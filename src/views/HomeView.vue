<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="notice-page">
    <!-- 活動主視覺 -->
    <section class="hero-section">
      <!-- 天空雲朵裝飾 -->
      <div class="cloud cloud-top" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div class="cloud cloud-bottom" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <!-- 長耳朵造型裝飾 -->
      <div class="long-ear-decoration ear-left" aria-hidden="true" />
      <div class="long-ear-decoration ear-right" aria-hidden="true" />

      <div class="hero-content">
        <span class="event-tag">
          ☁️ 鄭桓大人的天空穿搭大賞
        </span>

        <h1>
          幫鄭桓大人
          <span>挑一套衣服吧</span>
        </h1>

        <p>
          發揮你的穿搭眼光，替鄭桓大人挑選一套完整造型，
          上傳作品並和大家一起參與人氣投票。
        </p>

        <div class="hero-actions">
          <RouterLink
            class="primary-button"
            to="/participate"
          >
            開始參加
            <span aria-hidden="true">→</span>
          </RouterLink>

          <a class="secondary-button" href="#rules">
            查看活動規則
          </a>
        </div>
      </div>

      <!-- 布丁獎品卡 -->
      <aside class="prize-card">
        <div class="pudding-character" aria-hidden="true">
          <span class="pudding-hat" />

          <span class="pudding-face">
            <span class="pudding-eye eye-left" />
            <span class="pudding-eye eye-right" />
            <span class="pudding-mouth" />
          </span>

          <span class="pudding-base" />
        </div>

        <span class="prize-label">
          最高票獎品
        </span>

        <strong>蛋糕乙份</strong>

        <p>
          由最終得票數最高的投稿者獲得。
        </p>
      </aside>
    </section>

    <!-- 活動方式 -->
    <section class="process-section">
      <header class="section-heading">
        <span>HOW TO PLAY</span>

        <h2>活動進行方式</h2>
      </header>

      <div class="process-grid">
        <article class="process-card sky-card">
          <span class="process-number">01</span>

          <div class="process-icon">✦</div>

          <h3>挑選穿搭</h3>

          <p>
            幫鄭桓大人挑選一套你認為最適合他的衣服與造型。
          </p>
        </article>

        <article class="process-card white-card">
          <span class="process-number">02</span>

          <div class="process-icon">↑</div>

          <h3>上傳投稿</h3>

          <p>
            填寫投稿者與作品名稱，並上傳完整的穿搭圖片。
          </p>
        </article>

        <article class="process-card pudding-card">
          <span class="process-number">03</span>

          <div class="process-icon pudding-icon">♡</div>

          <h3>互相投票</h3>

          <p>
            欣賞其他人的作品，選出你最喜歡的一套穿搭。
          </p>
        </article>

        <article class="process-card white-card">
          <span class="process-number">04</span>

          <div class="process-icon">♛</div>

          <h3>人氣冠軍</h3>

          <p>
            活動結束後，由得票最高的作品獲得蛋糕乙份。
          </p>
        </article>
      </div>
    </section>

    <!-- 活動規則 -->
    <section id="rules" class="rules-section">
      <div class="rules-introduction">
        <span class="section-label">
          EVENT RULES
        </span>

        <h2>活動須知</h2>

        <p>
          投稿與投票前，請先閱讀以下規則，
          讓這場穿搭大賽可以公平又愉快地進行。
        </p>

        <!-- 長耳朵吉祥物元素 -->
        <div class="rules-mascot" aria-hidden="true">
          <span class="mascot-ear mascot-ear-left" />

          <span class="mascot-face">
            <span class="mascot-eye mascot-eye-left" />
            <span class="mascot-eye mascot-eye-right" />
            <span class="mascot-mouth" />
          </span>

          <span class="mascot-ear mascot-ear-right" />
        </div>

        <RouterLink
          class="rules-button"
          to="/participate"
        >
          我已了解，前往參加
        </RouterLink>
      </div>

      <div class="rules-list">
        <article class="rule-item">
          <span class="rule-number">01</span>

          <div>
            <h3>每人準備一套穿搭作品</h3>

            <p>
              請替鄭桓大人挑選一套完整造型，
              並在投稿頁填寫作品名稱及上傳圖片。
            </p>
          </div>
        </article>

        <article class="rule-item">
          <span class="rule-number">02</span>

          <div>
            <h3>投稿後大家互相投票</h3>

            <p>
              投稿完成後，可以欣賞其他參賽者的作品，
              並選出你最喜歡的一套穿搭。
            </p>
          </div>
        </article>

        <article class="rule-item warning-rule">
          <span class="rule-number">03</span>

          <div>
            <h3>不能投給自己的作品</h3>

            <p>
              一般參賽者不可以替自己的作品投票，
              請將票投給其他參賽者。
            </p>
          </div>
        </article>

        <article class="rule-item special-rule">
          <span class="rule-number">04</span>

          <div>
            <h3>鄭桓大人可以投給所有人</h3>

            <p>
              鄭桓大人擁有特別投票權，
              可以投給任一參賽作品，不受一般限制。
            </p>
          </div>
        </article>

        <article class="rule-item prize-rule">
          <span class="rule-number">05</span>

          <div>
            <h3>最高票獲得蛋糕乙份</h3>

            <p>
              活動結束後，以網站顯示的最終票數為準，
              得票最高的投稿者可以獲得蛋糕一份。
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- 底部參加區 -->
    <section class="final-section">
      <div class="final-cloud" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div class="final-content">
        <span>READY TO JOIN?</span>

        <h2>你的穿搭眼光，可能就是冠軍</h2>

        <p>
          現在就幫鄭桓大人準備一套令人驚豔的造型。
        </p>
      </div>

      <RouterLink
        class="final-button"
        to="/participate"
      >
        投稿＆投票
        <span aria-hidden="true">→</span>
      </RouterLink>
    </section>
  </main>
</template>

<style scoped>
.notice-page {
  width: min(100% - 32px, 1180px);
  margin: 0 auto;
  padding: 40px 0 96px;
}

/* =========================
   主視覺
========================= */

.hero-section {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  align-items: center;
  min-height: 580px;
  overflow: hidden;
  padding: 72px;
  border: 1px solid rgba(76, 173, 217, 0.2);
  border-radius: 40px;
  background:
    radial-gradient(
      circle at 14% 14%,
      rgba(255, 255, 255, 0.98),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      #e9f7ff,
      #ffffff 56%,
      #fff9de
    );
  box-shadow:
    0 30px 90px rgba(76, 173, 217, 0.14),
    inset 0 1px 0 white;
}

.hero-content,
.prize-card {
  position: relative;
  z-index: 3;
}

.event-tag {
  display: inline-flex;
  padding: 9px 16px;
  border: 1px solid #cfeeff;
  border-radius: 999px;
  color: #318db9;
  background: rgba(255, 255, 255, 0.82);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.hero-content h1 {
  max-width: 700px;
  margin: 26px 0 22px;
  color: #385266;
  font-size: clamp(48px, 7vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.hero-content h1 span {
  display: block;
  color: #4cadd9;
}

.hero-content > p {
  max-width: 630px;
  margin: 0;
  color: #718998;
  font-size: 18px;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.primary-button,
.final-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 27px;
  border-radius: 999px;
  color: white;
  background: linear-gradient(
    135deg,
    #75c7ec,
    #318db9
  );
  box-shadow: 0 12px 28px rgba(49, 141, 185, 0.24);
  text-decoration: none;
  font-weight: 900;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.primary-button:hover,
.final-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(49, 141, 185, 0.3);
}

.secondary-button {
  padding: 13px 23px;
  border: 1px solid #cfeeff;
  border-radius: 999px;
  color: #318db9;
  background: rgba(255, 255, 255, 0.78);
  text-decoration: none;
  font-weight: 900;
}

/* =========================
   雲朵元素
========================= */

.cloud,
.final-cloud {
  position: absolute;
  z-index: 1;
  width: 170px;
  height: 70px;
  opacity: 0.7;
  pointer-events: none;
}

.cloud span,
.final-cloud span {
  position: absolute;
  bottom: 0;
  display: block;
  border: 1px solid rgba(168, 221, 247, 0.56);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.9);
}

.cloud span:nth-child(1),
.final-cloud span:nth-child(1) {
  left: 0;
  width: 90px;
  height: 43px;
}

.cloud span:nth-child(2),
.final-cloud span:nth-child(2) {
  left: 50px;
  width: 78px;
  height: 68px;
}

.cloud span:nth-child(3),
.final-cloud span:nth-child(3) {
  right: 0;
  width: 83px;
  height: 39px;
}

.cloud-top {
  top: 34px;
  right: 26%;
}

.cloud-bottom {
  bottom: 34px;
  left: 4%;
  transform: scale(0.68);
}

/* =========================
   長耳朵元素
========================= */

.long-ear-decoration {
  position: absolute;
  z-index: 1;
  width: 160px;
  height: 48px;
  border: 2px solid #cfeeff;
  background: rgba(255, 255, 255, 0.65);
  pointer-events: none;
}

.ear-left {
  top: 145px;
  left: -85px;
  border-radius: 999px 40px 40px 999px;
  transform: rotate(-16deg);
}

.ear-right {
  right: -86px;
  bottom: 105px;
  border-radius: 40px 999px 999px 40px;
  transform: rotate(17deg);
}

/* =========================
   布丁獎品卡
========================= */

.prize-card {
  display: grid;
  justify-items: center;
  padding: 34px 24px;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 30px;
  background: linear-gradient(
    155deg,
    rgba(255, 255, 255, 0.96),
    #fff9de
  );
  box-shadow: 0 20px 55px rgba(76, 173, 217, 0.13);
  text-align: center;
  transform: rotate(2deg);
}

.prize-label,
.section-heading span,
.section-label,
.final-content > span {
  color: #318db9;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.16em;
}

.prize-card strong {
  margin-top: 14px;
  color: #385266;
  font-size: 29px;
}

.prize-card p {
  margin: 10px 0 0;
  color: #718998;
  line-height: 1.6;
}

.pudding-character {
  position: relative;
  width: 130px;
  height: 120px;
  margin-bottom: 18px;
}

.pudding-hat {
  position: absolute;
  z-index: 4;
  top: 4px;
  left: 38px;
  width: 61px;
  height: 19px;
  border-radius: 999px;
  background: #9c704e;
  transform: rotate(-7deg);
}

.pudding-hat::after {
  position: absolute;
  top: -7px;
  left: 30px;
  width: 6px;
  height: 10px;
  border-radius: 999px;
  background: #9c704e;
  content: '';
}

.pudding-face {
  position: absolute;
  z-index: 3;
  top: 22px;
  left: 18px;
  width: 94px;
  height: 80px;
  border: 3px solid rgba(156, 112, 78, 0.14);
  border-radius: 46% 46% 37% 37%;
  background: linear-gradient(
    to bottom,
    #fff0ad,
    #f7d879
  );
  box-shadow:
    inset 0 10px 0 rgba(255, 255, 255, 0.3),
    0 12px 25px rgba(156, 112, 78, 0.12);
}

.pudding-base {
  position: absolute;
  z-index: 2;
  bottom: 5px;
  left: 10px;
  width: 112px;
  height: 30px;
  border-radius: 50%;
  background: #c89468;
}

.pudding-eye {
  position: absolute;
  top: 34px;
  width: 6px;
  height: 9px;
  border-radius: 999px;
  background: #75553f;
}

.eye-left {
  left: 29px;
}

.eye-right {
  right: 29px;
}

.pudding-mouth {
  position: absolute;
  top: 49px;
  left: 50%;
  width: 12px;
  height: 7px;
  border-bottom: 2px solid #75553f;
  border-radius: 0 0 999px 999px;
  transform: translateX(-50%);
}

/* =========================
   活動流程
========================= */

.process-section {
  padding: 100px 0 82px;
}

.section-heading {
  margin-bottom: 40px;
  text-align: center;
}

.section-heading h2,
.rules-introduction h2 {
  margin: 10px 0 0;
  color: #385266;
  font-size: clamp(36px, 5vw, 52px);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.process-card {
  position: relative;
  min-height: 280px;
  padding: 26px;
  border: 1px solid rgba(76, 173, 217, 0.2);
  border-radius: 25px;
  box-shadow: 0 15px 42px rgba(76, 173, 217, 0.08);
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease;
}

.process-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 50px rgba(76, 173, 217, 0.14);
}

.sky-card {
  background: linear-gradient(
    145deg,
    #e9f7ff,
    white
  );
}

.white-card {
  background: rgba(255, 255, 255, 0.94);
}

.pudding-card {
  background: linear-gradient(
    145deg,
    #fff9de,
    white
  );
}

.process-number {
  position: absolute;
  top: 24px;
  right: 24px;
  color: #a8ddf7;
  font-size: 13px;
  font-weight: 900;
}

.process-icon {
  display: grid;
  width: 54px;
  height: 54px;
  place-items: center;
  border-radius: 18px;
  color: #318db9;
  background: white;
  box-shadow: 0 8px 20px rgba(76, 173, 217, 0.12);
  font-size: 24px;
}

.pudding-icon {
  color: #9c704e;
  background: #fff4bd;
}

.process-card h3 {
  margin: 28px 0 12px;
  color: #385266;
  font-size: 21px;
}

.process-card p {
  margin: 0;
  color: #718998;
  line-height: 1.75;
}

/* =========================
   活動規則
========================= */

.rules-section {
  display: grid;
  grid-template-columns: 0.72fr 1.28fr;
  gap: 48px;
  overflow: hidden;
  padding: 56px;
  border-radius: 36px;
  background:
    radial-gradient(
      circle at top right,
      rgba(255, 255, 255, 0.16),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      #75c7ec,
      #318db9
    );
  box-shadow: 0 25px 65px rgba(49, 141, 185, 0.22);
}

.rules-introduction {
  position: relative;
  color: white;
}

.rules-introduction h2 {
  color: white;
}

.rules-introduction > p {
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.8;
}

.rules-button {
  display: inline-flex;
  margin-top: 28px;
  padding: 13px 21px;
  border-radius: 999px;
  color: #318db9;
  background: white;
  text-decoration: none;
  font-weight: 900;
}

.rules-list {
  display: grid;
  gap: 12px;
}

.rule-item {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 16px;
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 21px;
  background: rgba(255, 255, 255, 0.1);
}

.warning-rule {
  background: rgba(255, 255, 255, 0.14);
}

.special-rule {
  background: rgba(218, 242, 255, 0.2);
}

.prize-rule {
  background: rgba(255, 239, 173, 0.23);
}

.rule-number {
  display: grid;
  width: 46px;
  height: 46px;
  place-items: center;
  border-radius: 50%;
  color: #318db9;
  background: white;
  font-size: 13px;
  font-weight: 900;
}

.rule-item h3 {
  margin: 2px 0 7px;
  color: white;
  font-size: 18px;
}

.rule-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1.7;
}

/* 規則區長耳朵元素 */

.rules-mascot {
  position: relative;
  display: flex;
  align-items: center;
  width: 190px;
  height: 110px;
  margin: 34px 0 0;
}

.mascot-face {
  position: absolute;
  z-index: 2;
  left: 55px;
  width: 82px;
  height: 82px;
  border: 3px solid rgba(255, 255, 255, 0.78);
  border-radius: 48% 48% 43% 43%;
  background: white;
  box-shadow: 0 12px 30px rgba(37, 101, 133, 0.18);
}

.mascot-ear {
  position: absolute;
  z-index: 1;
  top: 43px;
  width: 75px;
  height: 27px;
  border: 3px solid rgba(255, 255, 255, 0.78);
  background: white;
}

.mascot-ear-left {
  left: 0;
  border-radius: 999px 30px 30px 999px;
  transform: rotate(-13deg);
}

.mascot-ear-right {
  right: 0;
  border-radius: 30px 999px 999px 30px;
  transform: rotate(13deg);
}

.mascot-eye {
  position: absolute;
  top: 34px;
  width: 5px;
  height: 9px;
  border-radius: 999px;
  background: #587286;
}

.mascot-eye-left {
  left: 27px;
}

.mascot-eye-right {
  right: 27px;
}

.mascot-mouth {
  position: absolute;
  top: 49px;
  left: 50%;
  width: 12px;
  height: 7px;
  border-bottom: 2px solid #587286;
  border-radius: 0 0 999px 999px;
  transform: translateX(-50%);
}

/* =========================
   底部參加區
========================= */

.final-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
  overflow: hidden;
  margin-top: 32px;
  padding: 44px 48px;
  border: 1px solid rgba(76, 173, 217, 0.2);
  border-radius: 30px;
  background: linear-gradient(
    135deg,
    #e9f7ff,
    white 56%,
    #fff9de
  );
}

.final-content {
  position: relative;
  z-index: 2;
}

.final-content h2 {
  margin: 8px 0;
  color: #385266;
}

.final-content p {
  margin: 0;
  color: #718998;
}

.final-button {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
}

.final-cloud {
  right: 210px;
  bottom: -16px;
}

/* =========================
   響應式
========================= */

@media (max-width: 920px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 45px;
    padding: 50px;
  }

  .prize-card {
    max-width: 360px;
    transform: none;
  }

  .process-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .rules-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .notice-page {
    padding-top: 24px;
  }

  .hero-section {
    min-height: auto;
    padding: 38px 24px;
    border-radius: 28px;
  }

  .hero-content h1 {
    font-size: 47px;
  }

  .hero-content > p {
    font-size: 16px;
  }

  .hero-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
    text-align: center;
  }

  .cloud,
  .long-ear-decoration {
    display: none;
  }

  .process-section {
    padding: 72px 0;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .rules-section {
    padding: 35px 22px;
    border-radius: 27px;
  }

  .rule-item {
    grid-template-columns: 44px 1fr;
    padding: 18px;
  }

  .rule-number {
    width: 40px;
    height: 40px;
  }

  .rules-mascot {
    transform: scale(0.88);
    transform-origin: left center;
  }

  .final-section {
    align-items: flex-start;
    flex-direction: column;
    padding: 34px 24px;
  }

  .final-button {
    width: 100%;
  }

  .final-cloud {
    display: none;
  }
}
</style>