<script setup lang="ts">
import XaButton from "../../ui/XaButton.vue";
import { useToggle } from '@vueuse/core';

// 定義 Props
interface Props {
    modelValue?: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:modelValue"]);
// 正確使用 useToggle (回傳的是 [state, toggle] 陣列)
const [isOpen, toggle] = useToggle(props.modelValue ?? false);
// 監聽 modelValue 變化，確保外部改變時，內部狀態也同步
watch(() => props.modelValue, (newValue) => {
    isOpen.value = newValue ?? false;
});
// 點擊時同步更新 modelValue
const onToggle = () => {
    toggle();
    emit("update:modelValue", isOpen.value);
};
</script>

<template>
    <div>
        <XaButton @click="onToggle" buttonStyle="success" size="sm" style="width: 48px;">
            {{ isOpen ? '收起' : '展開' }}
        </XaButton>

        <transition name="fade">
            <div v-if="isOpen" class="p-4 border border-blue-300 shadow h-full">
                <slot />
            </div>
        </transition>
    </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
