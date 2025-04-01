<template>
    <NuxtLayout>
        <template #header>
            <nav class="bg-white shadow-lg p-4 flex justify-between items-center">
                <div class="text-2xl font-bold">恐龍科技股份有限公司</div>
                <!--md:block 會在螢幕尺寸達到 sm 或更大時顯示該元素。-->
                <div class="hidden  lg:block">
                    <QNavMenu :items="menuItems" />
                </div>

                <!-- Navigation Menu -->
                <div>
                    <!-- Mobile menu button (visible only on small screens) -->
                    <div class=" flex items-center justify-center lg:hidden">
                        <span @click="onShowSliderBar">
                            <i class="fa-solid fa-bars text-2xl text-blue-500 hover:text-blue-300 cursor-pointer"></i>
                        </span>
                    </div>
                </div>
                <!--Leaf Panel-->
                <!--:class="{ 'hidden': !panelOpen }-->

                <div :class="{ 'hidden': !panelOpen }"
                    class="bg-blue-300 w-[12rem] fixed top-[4rem] left-0 h-full z-10">
                    <div class="relative w-full h-full">
                        <div class="absolute top-0 right-0">
                            <button @click="onCloseMe" class="cursor-pointer bg-blue-500 text-white px-4 py-2">
                                CloseMe
                            </button>
                        </div>
                        <div class="pt-14 px-2">
                            <NavigationMenuRoot class="w-full">
                                <NavigationMenuList class="flex flex-col space-y-4">
                                    <NavigationMenuItem v-for="item in menuItems" :key="item.name"
                                        class="relative w-full">
                                        <template v-if="item.children">
                                            <NavigationMenuTrigger
                                                class="text-blue-500 hover:underline cursor-pointer py-2 block w-full text-left">
                                                {{ item.name }}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent
                                                class="absolute left-full top-0 bg-white shadow-lg rounded-md p-2 w-48">
                                                <ul>
                                                    <li v-for="subItem in item.children" :key="subItem.name">
                                                        <NavigationMenuLink :href="subItem.href"
                                                            class="block p-2 text-gray-700 hover:bg-gray-200">
                                                            {{ subItem.name }}
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </NavigationMenuContent>
                                        </template>
                                        <template v-else>
                                            <NavigationMenuLink :href="item.href"
                                                class="text-blue-500 hover:underline cursor-pointer py-2 block w-full text-left">
                                                {{ item.name }}
                                            </NavigationMenuLink>
                                        </template>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenuRoot>
                        </div>
                    </div>
                </div>




            </nav>
        </template>

        <template #default>
            <section>
                <button @click="onTest">Test</button>
            </section>
            <section>
                <XSectionHero></XSectionHero>
            </section>

            <section id="position">
                <XMapGoogle></XMapGoogle>
            </section>

            <section id="about-us" class="h-[20rem] bg-indigo-200">
                <div class="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div class="bg-indigo-300">
                        <h2>Header 01</h2>
                    </div>
                    <div>
                        <UiQaTyping></UiQaTyping>
                    </div>
                </div>
            </section>

            <section class="h-[20rem] bg-blue-900">
                <h2>Header 01</h2>
            </section>

            <section class="h-[20rem] bg-blue-900">
                <h2>Header 02</h2>
            </section>

            <section id="service" class="h-[24rem] bg-green-500">
                <h2>Services</h2>
            </section>
        </template>

        <template #footer>
            <XGotoTop></XGotoTop>
            <section id="web-map" class="h-[20rem]">
                <h2>網站地圖</h2>
            </section>
        </template>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { CMenuItem } from "../utils/qmenu"

const onTest = () => {
}
const Test = () => {
    // 測試使用 CMenuItem
    const menu = new CMenuItem();
    menu.addItem('首頁', '/');
    menu.addItem('關於我們', '/about');
    menu.addItem('聯絡我們', '/contact');
    menu.addItem('產品介紹');
    menu.addChild('產品介紹', '設備');
    menu.addChild('設備', '關鍵字分析', '/services/seo/keyword-analysis');
    menu.addChild('設備', '網站優化', '#web-map');
    menu.addChild('設備', '內容行銷', '#position');
    menu.addChild('產品介紹', '治具');
    menu.addChild('治具', '關鍵字分析', '/services/seo/keyword-analysis');
    menu.addChild('治具', '網站優化', '/services/seo/website-optimization');
    menu.addChild('治具', '內容行銷', '/services/seo/content-marketing');
    menu.addChild('產品介紹', '載具');
    menu.addChild('載具', '關鍵字分析', '/services/seo/keyword-analysis');
    menu.addChild('載具', '網站優化', '/services/seo/website-optimization');
    menu.addChild('載具', '內容行銷', '/services/seo/content-marketing');
    menu.addChild('產品介紹', 'Web Development', '/custom');
    menu.addChild('產品介紹', 'Graphic Design', '/services/design');

    return menu.getStructuredMenu();

}

// 初始時菜單為關閉狀態
const menuOpen = ref(false);
const panelOpen = ref(false);




// 監聽視窗大小變化
onMounted(() => {


    const handleResize = () => {
        // 只在大螢幕(>=1024px)時自動設置為true
        // 在小螢幕時保持用戶當前的選擇
        if (window.innerWidth >= 1024) {
            menuOpen.value = true;
        }
    };

    // 初始設置
    handleResize();

    // 添加視窗大小變化事件監聽
    window.addEventListener('resize', handleResize);

    // 清理函數
    return () => {
        window.removeEventListener('resize', handleResize);
    };
});
const onShowSliderBar = () => {

    panelOpen.value = !panelOpen.value;
}
const onCloseMe = () => {
    panelOpen.value = !panelOpen.value;
}
const menuItems = ref([
    {
        name: '產品介紹',
        children: [
            {
                name: '設備',
                children: [
                    { name: '關鍵字分析', href: '/services/seo/keyword-analysis' },
                    { name: '網站優化', href: '#web-map' },
                    { name: '內容行銷', href: '#position' },
                ]
            },
            {
                name: '治具',
                children: [
                    { name: '關鍵字分析', href: '/services/seo/keyword-analysis' },
                    { name: '網站優化', href: '/services/seo/website-optimization' },
                    { name: '內容行銷', href: '/services/seo/content-marketing' }
                ]
            },
            {
                name: '載具',
                children: [
                    { name: '關鍵字分析', href: '/services/seo/keyword-analysis' },
                    { name: '網站優化', href: '/services/seo/website-optimization' },
                    { name: '內容行銷', href: '/services/seo/content-marketing' }
                ]
            },
            { name: 'Web Development', href: '/custom' },

            { name: 'Graphic Design', href: '/services/design' }
        ]
    },
    { name: '首頁', href: '/' },
    { name: '關於我們', href: '/about' },

    { name: '聯絡我們', href: '/contact' }
]);
</script>

<style scoped>
.NavigationMenuRoot {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: 1;
}
</style>