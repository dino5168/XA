<script setup lang="ts">
import { defineComponent, type Component } from 'vue';

interface AccordionItem {
    title: string;
    content: Component | string;
}

defineProps<{
    items: AccordionItem[];
}>();

const openIndex = ref<number | null>(null);

const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <div class="w-full max-w-md mx-auto h-auto">
        <div v-for="(item, index) in items" :key="index" class="border-b border-gray-300">
            <button @click="toggle(index)"
                class="w-full text-left p-4 font-semibold cursor-pointer flex justify-between items-center transition-colors duration-300"
                :class="openIndex === index
                    ? 'bg-blue-100 hover:bg-blue-200'
                    : 'bg-gray-100 hover:bg-gray-200'">
                <span class="font-bold text-yellow-700">{{ item.title }}</span>
                <span class="transform transition-transform duration-300 ease-in-out"
                    :class="openIndex === index ? 'rotate-180' : ''">
                    ▼
                </span>
            </button>
            <div class="accordion-content overflow-hidden transition-all duration-300 ease-in-out" :class="openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'">
                <div class="p-4 bg-blue-100 text-blue-700 font-bold">
                    <component v-if="typeof item.content !== 'string'" :is="item.content" />
                    <template v-else>
                        {{ item.content }}
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.accordion-content {
    transition: max-height 0.3s ease-in-out,
        opacity 0.3s ease-in-out;
}
</style>