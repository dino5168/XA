<script setup lang="ts">
import { ref, onMounted, defineProps, defineEmits } from "vue";

// 定義 props
const props = defineProps({
    loadingText: {
        type: String,
        default: "Loading..."
    },
    successText: {
        type: String,
        default: "✅ 異步組件已加載！"
    },
    loadingTime: {
        type: Number,
        default: 2000
    },
    showSpinner: {
        type: Boolean,
        default: true
    }
});

// 定義 emits
const emit = defineEmits(['loaded']);

// 建立響應式狀態
const message = ref(props.loadingText);
const isLoading = ref(true);

onMounted(() => {
    setTimeout(() => {
        message.value = props.successText;
        isLoading.value = false;
        emit('loaded');
    }, props.loadingTime);
});
</script>

<template>
    <div class="async-component" :class="{ 'loading': isLoading }">
        <div v-if="showSpinner && isLoading" class="spinner"></div>
        <h2>{{ message }}</h2>
        <div v-if="!isLoading" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.async-component {
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;
}

.async-component.loading {
    background: #f0f8ff;
    border-left: 4px solid #4a7bff;
}

.spinner {
    width: 30px;
    height: 30px;
    border: 3px solid rgba(74, 123, 255, 0.3);
    border-radius: 50%;
    border-top-color: #4a7bff;
    animation: spin 1s ease-in-out infinite;
    margin: 0 auto 15px;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

h2 {
    margin: 10px 0;
    color: #333;
    font-size: 1.2rem;
}

.content {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eee;
}
</style>