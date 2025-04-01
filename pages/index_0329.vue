<template>
    <NuxtLayout>
        <template #header>

            <QNavBar>
                <!-- 自定義 Logo -->
                <template #logo>
                    <div class="text-white text-lg font-bold flex items-center">
                        <img src="/img/Logo.png" alt="Logo" class="h-8 w-8 mr-2" />
                        <span>我的網站</span>
                    </div>
                </template>

                <!-- 自定義選單按鈕 -->
                <template #toggle-button>
                    <button @click="handleToggleMenu" class="md:hidden text-white focus:outline-none cursor-pointer">
                        <span v-if="isMenuOpen">✕</span>
                        <span v-else>☰</span>
                    </button>
                </template>

                <!-- 自定義選單項目 -->
                <template #menu-items>
                    <NavItem href="/">首頁</NavItem>
                    <NavItem href="/about">關於我們</NavItem>
                    <NavItem href="/services">服務</NavItem>
                    <NavItem href="/contact">聯絡我們</NavItem>
                </template>
            </QNavBar>


        </template>

        <template #default>

            <XSectionHero></XSectionHero>
            <XMapGoogle></XMapGoogle>
            <section class="h-[20rem] bg-indigo-200">
                <h2>Header 01</h2>
            </section>
            <section class="h-[20rem] bg-blue-900">
                <h2>Header 01</h2>
            </section>
            <section class="h-[20rem] bg-blue-900">
                <h2>Header 02</h2>
            </section>

        </template>

        <template #footer>
            <XGotoTop></XGotoTop>
            <section class="h-[20rem]">
                <h2>Footer</h2>
            </section>
        </template>




    </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import NavItem from '../components/Q/NavItem.vue'; // 導入 NavItem 組件
import type { QNavBarInstance } from '../components/Q/NavBar.vue'; // 路徑可能需要調整

// 正確指定 ref 類型
const navbarRef = ref<QNavBarInstance | null>(null);
const isMenuOpen = ref(false);

// 處理選單切換
function handleToggleMenu() {
    if (navbarRef.value) {
        navbarRef.value.toggleMenu();
        isMenuOpen.value = navbarRef.value.isMenuOpen.value;
    }
}

// 初始化時同步狀態
onMounted(() => {
    if (navbarRef.value) {
        isMenuOpen.value = navbarRef.value.isMenuOpen.value;
    }
});
</script>
