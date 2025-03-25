<script lang="ts" setup>
const showText = ref([{ text: "喜歡嗎?帶回家", color: "green" }])
</script>
<template>
    <h1>Header 01</h1>
    <UiQaIcon name="fa-solid fa-home" color="blue"></UiQaIcon>
    <UiQaIcon name="fa-solid fa-circle-user" color="text-red-800" size="lg"></UiQaIcon>
    <UiQaIcon name="fa-solid fa-image" color="text-indigo-500" size="sm"></UiQaIcon>
    <UiQaIcon name="fa-solid fa-truck" color="text-indigo-200" size="sm"></UiQaIcon>



    <div
        class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">


        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </a>
        <UiQaTyping :repeat="true" :pauseBeforeRepeat="2000" :contentData='showText'></UiQaTyping>
    </div>
    <div
        class="max-w-sm p-0 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center">
            <UiQaTyping :repeat="true" :pauseBeforeRepeat="2000" :typingSpeed="300"
                :contentData="[{ text: '電視機特賣中...', color: '#17125c' }]">
            </UiQaTyping>
        </div>
        <img src="/public/images/01.jpeg" alt="girl">

    </div>
    <div
        class="max-w-sm p-0 bg-gray-200 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center">
            <UiQaTyping :repeat="true" :pauseBeforeRepeat="2000" :typingSpeed="300"
                :contentData="[{ text: '陳小小', color: '#e63e6b' }]">
            </UiQaTyping>
        </div>
        <img src="/public/images/02.jpeg" alt="girl">

    </div>
</template>
