<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: { type: Number, required: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 }
});

const emit = defineEmits(['update:modelValue']);
const updateValue = (event: Event) => {
    const newValue = Number((event.target as HTMLInputElement).value);
    emit('update:modelValue', newValue);
};
</script>

<template>
    <div class="flex flex-col items-center w-full max-w-md p-4">
        <input type="range" :min="min" :max="max" :step="step" :value="modelValue" @input="updateValue"
            class="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500" />
        <span class="mt-2 text-lg font-semibold">{{ modelValue }}</span>
    </div>
</template>
