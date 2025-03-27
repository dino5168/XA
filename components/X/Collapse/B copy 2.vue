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
        <div class="tabs-content overflow-hidden p-4 border border-blue-300">
            <div class="h-full overflow-y-auto" :class="{ 'overflow-y-scroll': true }">
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

.tabs-content {
    flex-grow: 1;
    overflow: hidden;
}

/* 只在需要時顯示滾動條 */
.tabs-content>div {
    height: 100%;
    overflow-y: auto;
}

.tabs-content>div::-webkit-scrollbar {
    display: none;
    /* 隱藏 Chrome, Safari 和 Opera 的滾動條 */
}

.tabs-content>div {
    -ms-overflow-style: none;
    /* IE 和 Edge 的滾動條 */
    scrollbar-width: none;
    /* Firefox 的滾動條 */
}

/* 當內容溢出時顯示滾動條 */
.tabs-content>div:hover::-webkit-scrollbar {
    display: block;
    width: 8px;
}

.tabs-content>div:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}
</style>