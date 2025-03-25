<template>
  <Transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
    <div v-if="open" ref="menuContentRef"
      class="absolute left-0 top-0 z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-900 shadow-md data-[side=bottom]:top-[calc(100%+4px)] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
      :class="alignClass" @keydown.esc="onClose">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, nextTick, onMounted, watch } from 'vue';

const props = defineProps<{
  open: boolean;
  onClose: () => void;
  align?: 'start' | 'center' | 'end';
}>();

const menuContentRef = ref<HTMLElement | null>(null);

const alignClass = computed(() => {
  switch (props.align) {
    case 'center':
      return 'left-1/2 -translate-x-1/2';
    case 'end':
      return 'right-0';
    default:
      return 'left-0';
  }
});

// 處理自動定位，避免溢出視窗
onMounted(() => {
  watch(() => props.open, async (isOpen) => {
    if (isOpen) {
      await nextTick();
      const menuEl = menuContentRef.value;
      if (!menuEl) return;

      const menuRect = menuEl.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (menuRect.right > viewportWidth) {
        menuEl.style.left = 'auto';
        menuEl.style.right = '0';
      }
    }
  }, { immediate: true });
});
</script>