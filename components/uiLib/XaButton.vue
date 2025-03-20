<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { cva } from 'class-variance-authority';
import { cn } from "../../lib/utils"

const isPressed = ref(false);

const buttonVariants = cva(
    "transition-transform duration-150 font-bold cursor-pointer",
    {
        variants: {
            buttonStyle: {
                primary: "bg-blue-500 text-white",
                secondary: "bg-gray-500 text-white",
                danger: "bg-red-500 text-white",
                warning: "bg-yellow-500 text-white",
                info: "bg-sky-500 text-white",
                success: "bg-green-500 text-white",
            },
            size: {
                sm: "text-sm py-1 px-2 rounded-sm",
                md: "text-base py-2 px-4 rounded-md",
                lg: "text-lg py-3 px-6 rounded-lg",
                xs: "text-xs py-1 px-2 rounded-sm"
            }
        },
        defaultVariants: {
            buttonStyle: "primary",
            size: "sm"
        }
    }
);

const props = defineProps<{
    buttonStyle?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg'
}>();
</script>

<template>
    <button @mousedown="isPressed = true" @mouseup="isPressed = false" @mouseleave="isPressed = false"
        :class="cn(buttonVariants({ buttonStyle: props.buttonStyle, size: props.size }), isPressed ? 'scale-95' : '')">
        <slot />
    </button>
</template>
