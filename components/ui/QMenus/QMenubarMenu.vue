<template>
    <div class="relative" :data-state="open ? 'open' : 'closed'">
        <slot name="trigger" :open="open" :onTriggerClick="toggleMenu"></slot>
        <slot name="content" :open="open" :onClose="closeMenu"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, inject, watch, onMounted } from 'vue';

const props = defineProps({
    index: {
        type: Number,
        default: 0
    }
});

const open = ref(false);

const menubar = inject('menubar', {
    activeIndex: ref(-1),
    setActiveIndex: (index: number) => {
        menubar.activeIndex.value = index;
    }
});
const toggleMenu = () => {
    open.value = !open.value;
    if (open.value) {
        menubar.setActiveIndex(props.index);
    } else {
        menubar.setActiveIndex(-1);
    }
};

const closeMenu = () => {
    open.value = false;
};

// 當別的菜單項被選中時關閉當前菜單
watch(() => menubar.activeIndex.value, (newVal) => {
    if (newVal !== props.index) {
        open.value = false;
    }
});

onMounted(() => {
    const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest(`[data-state="open"]`)) {
            closeMenu();
        }
    };

    document.addEventListener('click', handleOutsideClick);

    // 使用類型斷言忽略返回值檢查
    return (() => {
        document.removeEventListener('click', handleOutsideClick);
    }) as unknown as void;
});
</script>