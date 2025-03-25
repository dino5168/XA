<template>
    <div ref="menubarRef"
        class="flex h-10 items-center space-x-1 rounded-md border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800"
        role="menubar" :aria-label="label" @keydown="onKeyDown">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';

defineProps({
    label: {
        type: String,
        default: 'Menu Bar'
    }
});

const menubarRef = ref<HTMLElement | null>(null);
const activeIndex = ref(-1);

provide('menubar', {
    activeIndex,
    setActiveIndex: (index: number) => {
        activeIndex.value = index;
    }
});

// 處理鍵盤導航
const onKeyDown = (e: KeyboardEvent) => {
    // 這裡可以實現鍵盤導航邏輯
    // 如左右鍵切換菜單項、Enter/Space 開啟菜單等
};
</script>