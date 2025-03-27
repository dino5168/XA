<script setup lang="ts">
import { ref } from 'vue'

// Define Props type
type Tab = {
    label: string
    content: string
}

type Props = {
    tabs: Tab[]
    defaultIndex?: number
}

// Use defineProps with type
const props = withDefaults(defineProps<Props>(), {
    defaultIndex: 0
})

// Active tab state with safe default
const activeTab = ref(Math.min(props.defaultIndex, props.tabs.length - 1))
</script>

<template>
    <div class="tabs-container">
        <!-- Tabs 標籤列 -->
        <div class="tabs-header flex border-b border-blue-300 overflow-x-auto">
            <button v-for="(tab, index) in props.tabs" :key="index" @click="activeTab = index"
                class="px-4 py-2 text-blue-600 hover:bg-blue-100 border-b-2 cursor-pointer transition-all duration-300 flex-shrink-0"
                :class="{
                    'border-blue-500 font-bold text-blue-800 bg-blue-50': activeTab === index,
                    'border-transparent': activeTab !== index
                }">
                {{ tab.label }}
            </button>
        </div>

        <!-- Tabs 內容 -->
        <div class="tabs-content overflow-y-auto max-h-[calc(100%-48px)] p-4 border border-blue-300">
            {{ props.tabs[activeTab].content }}
        </div>
    </div>
</template>

<style scoped>
.tabs-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tabs-content {
    overflow-y: auto;
    flex-grow: 1;
}

/* 確保滾動條可見 */
.tabs-content {
    scrollbar-width: thin;
    /* Firefox */
    scrollbar-color: rgba(0, 0, 128, 0.5) transparent;
    /* Firefox */
}

.tabs-content::-webkit-scrollbar {
    width: 8px;
    /* 滾動條寬度 */
}

.tabs-content::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.tabs-content::-webkit-scrollbar-track {
    background: transparent;
}
</style>