<script setup lang="ts">
import {
  onBeforeUnmount,
  onMounted,
  watch,
} from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    imageUrl: string | null
    altText?: string
  }>(),
  {
    altText: '作品完整圖片',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

let previousBodyOverflow = ''

function closePreview() {
  emit('update:modelValue', false)
}

function handleKeydown(event: KeyboardEvent) {
  if (
    event.key === 'Escape' &&
    props.modelValue
  ) {
    closePreview()
  }
}

watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      previousBodyOverflow =
        document.body.style.overflow

      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow =
      previousBodyOverflow
  },
)

onMounted(() => {
  window.addEventListener(
    'keydown',
    handleKeydown,
  )
})

onBeforeUnmount(() => {
  window.removeEventListener(
    'keydown',
    handleKeydown,
  )

  document.body.style.overflow =
    previousBodyOverflow
})
</script>

<template>
  <Teleport to="body">
    <Transition name="preview-fade">
      <div
        v-if="modelValue && imageUrl"
        class="preview-backdrop"
        role="dialog"
        aria-modal="true"
        :aria-label="altText"
        @click.self="closePreview"
      >
        <button
          type="button"
          class="close-button"
          aria-label="關閉圖片預覽"
          @click="closePreview"
        >
          ×
        </button>

        <div class="preview-content">
          <img
            :src="imageUrl"
            :alt="altText"
            class="preview-image"
          />

          <p class="preview-description">
            {{ altText }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.preview-backdrop {
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 72px 24px 28px;
  background: rgba(20, 38, 50, 0.86);
  backdrop-filter: blur(12px);
}

.preview-content {
  display: grid;
  justify-items: center;
  width: min(100%, 1200px);
  max-height: 100%;
}

.preview-image {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 140px);
  border-radius: 20px;
  background: white;
  box-shadow: 0 28px 90px
    rgba(0, 0, 0, 0.38);
  object-fit: contain;
}

.preview-description {
  margin: 16px 0 0;
  color: white;
  text-align: center;
  font-weight: 700;
}

.close-button {
  position: fixed;
  top: 20px;
  right: 24px;
  display: grid;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 1px solid
    rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  color: white;
  background: rgba(255, 255, 255, 0.14);
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.25);
}

.preview-fade-enter-active,
.preview-fade-leave-active {
  transition: opacity 0.2s ease;
}

.preview-fade-enter-from,
.preview-fade-leave-to {
  opacity: 0;
}

@media (max-width: 600px) {
  .preview-backdrop {
    padding: 72px 12px 20px;
  }

  .preview-image {
    max-height: calc(100vh - 125px);
    border-radius: 14px;
  }

  .close-button {
    top: 14px;
    right: 14px;
  }
}
</style>