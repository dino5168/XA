<template>
    <XGotoTop>
    </XGotoTop>
    <XSection height="30rem" bgcolor="bg-blue-900">
        <div class="flex">
            <div class="w-1/4 bg-indigo-100">
                <XAccordion :items="items"></XAccordion>

            </div>
            <div class="w-3/4 bg-indigo-100">
                <nav class="text-sm" aria-label="breadcrumb">
                    <ol class="flex space-x-2 text-gray-500">
                        <li class="font-medium text-gray-700">Home</li>
                    </ol>
                </nav>

                <nav class="text-sm" aria-label="breadcrumb">
                    <ol class="flex space-x-2 text-gray-500">
                        <li><a href="#" class="text-blue-600 hover:underline">Home</a></li>
                        <li class="text-gray-400">/&nbsp;Library</li>
                    </ol>
                </nav>

                <nav class="text-sm" aria-label="breadcrumb">
                    <ol class="flex space-x-2 text-gray-500">
                        <li><a href="#" class="text-blue-600 hover:underline">Home</a></li>
                        <li><a href="#" class="text-blue-600 hover:underline">Library</a></li>
                        <li class="text-gray-400">/&nbsp;Data</li>
                    </ol>
                </nav>




            </div>
        </div>

    </XSection>
    <XSection height="30rem" bgcolor="bg-blue-200">
        <h1 class="text-gray-900 text-4xl">關於我們</h1>
    </XSection>
    <XSection height="30rem" bgcolor="bg-blue-900">
        <h1 class="text-gray-100 text-4xl">產品介紹</h1>
    </XSection>
    <XSection height="30rem" bgcolor="bg-blue-200">
    </XSection>

    <XSection height="45rem">
        <h1 class="text-gray-100 text-4xl">關於我們</h1>

    </XSection>

    <XSection height="10rem">
        <a href="#">
            <XBadge pattern="danger">danger</XBadge>
        </a>
        <XBadgeIcon pattern="success" spaceX="" name="fa fa-home"></XBadgeIcon>
        <XBadgeIcon pattern="success" name="fa fa-home">已完成</XBadgeIcon>
        <XBadgeIcon pattern="danger" name="fa fa-home">注意</XBadgeIcon>
        <XBadgeIcon pattern="warning" name="fa fa-home">已完成</XBadgeIcon>
        <XBadgeRound pattern="success">100</XBadgeRound>

        <XBadgeNumber pattern="success" size="xs">完成一個元件</XBadgeNumber>

    </XSection>

    <XSection height="10rem" bgcolor="bg-indigo-300">
        <XButton size="xs">Click Me</XButton>
        <XButton size="xs" button-style="success">Click Me</XButton>
    </XSection>
    <XSection height="15rem" bgcolor="bg-gray-100">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <XCard></XCard>
            <XCard></XCard>
            <XCard></XCard>
            <XCard></XCard>
        </div>
    </XSection>

    <XSection height="30rem" bgcolor="bg-green-300">
        <h1>Footer</h1>
    </XSection>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { XCard } from '#components';
definePageMeta({
    layout: "default-no"
})
const items = [
    { title: "惠安沉香", content: "這是第一項的內容。" },
    { title: "星洲沉香", content: "這是第二項的內容。" },
    { title: "第三項", content: XCard },
];
const sliderValue = ref(100)
</script>