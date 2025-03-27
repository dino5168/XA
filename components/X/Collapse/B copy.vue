<script setup lang="ts">
import { ref, computed } from 'vue'

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

// Computed method to determine tab state
const isActiveTab = (index: number) => activeTab.value === index
</script>

<template>
    <div class="tabs-container">
        <!-- Tabs 標籤列 -->
        <div class="flex border-b border-blue-300 overflow-x-auto">
            <button v-for="(tab, index) in props.tabs" :key="index" @click="activeTab = index"
                class="px-4 py-2 text-blue-600 hover:bg-blue-100 border-b-2 cursor-pointer transition-all duration-300 flex-shrink-0"
                :class="{
                    'border-blue-500 font-bold text-blue-800 bg-blue-50': isActiveTab(index),
                    'border-transparent': !isActiveTab(index)
                }">
                {{ tab.label }}
            </button>
        </div>

        <!-- Tabs 內容 -->
        <div class="tab-content p-4 border border-blue-300 shadow overflow-y-auto">
            <div>
                {{ props.tabs[activeTab].content }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.tabs-container {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tab-content {
    flex-grow: 1;
    overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 顯示滾動條 */
.tab-content {
    scrollbar-width: thin;
    /* Firefox */
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    /* Firefox */
}

.tab-content::-webkit-scrollbar {
    width: 8px;
    /* 滾動條寬度 */
}

.tab-content::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.tab-content::-webkit-scrollbar-track {
    background: transparent;
}
</style>