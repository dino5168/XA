<template>
    <div class="w-full">
        <div v-for="(item, index) in items" :key="index" class="overflow-hidden">
            <button
                class="w-full text-left p-3 cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                @click="toggle(index)">
                <span class="font-bold">{{ item.title }}</span>
                <span class="text-lg">{{ activeIndex === index ? '▲' : '▼' }}</span>
            </button>
            <div v-show="activeIndex === index" class="border-t px-6 py-1 border-gray-300 bg-white">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type AccordionItem = {
    title: string;
    content: string;
};

const items: AccordionItem[] = [
    { title: '公司首頁', content: '這是公司首頁的內容。' },
    { title: '關於我們', content: '我們是一家有活力的公司！' },
    { title: '要有活力', content: '我們的團隊充滿創意與熱情。' }
];

const activeIndex = ref<number | null>(null);

const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<style scoped>
button:focus {
    outline: none;
}
</style>