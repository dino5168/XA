<template>
    <nav class="bg-indigo-800 p-4 h-full flex items-center justify-center">
        <div class="mx-auto flex justify-between items-center w-full ">
            <!-- Logo 插槽 -->
            <slot name="logo">

            </slot>

            <!-- 手機版選單按鈕 -->
            <slot name="toggle-button">

            </slot>

            <!-- 選單項目容器 -->
            <div :class="[
                'md:flex',
                isMenuOpen ? 'flex' : 'hidden', // 這裡控制手機版選單的顯示/隱藏
                'flex-col md:flex-row',
                'absolute md:static',
                'bg-blue-500 md:bg-transparent',
                'w-full md:w-auto',
                'left-0 top-16 md:top-0',
                'p-4 md:p-0',
                'z-9999', // 確保選單在其他元素之上
                'space-y-2 md:space-y-0 md:space-x-6'
            ]">
                <!-- 選單項目插槽 -->
                <slot name="menu-items">

                </slot>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


// 在組件內部處理選單開關狀態
const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// 將狀態和方法暴露給父組件
defineExpose({
    isMenuOpen,
    toggleMenu
});
</script>

<!-- 為了讓 TypeScript 能夠識別這個組件的類型，增加以下導出 -->
<script lang="ts">
export interface QNavBarInstance {
    isMenuOpen: {
        value: boolean
    };
    toggleMenu: () => void;
}
</script>