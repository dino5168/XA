<template>
    <i :class="classAtr"></i>
</template>

<script lang="ts" setup>
import { cva } from "class-variance-authority";
import { computed } from "vue";
import type { typeIcon } from "./UiType";

const bootStyle = {
    primary: "text-blue-500",
    secondary: "text-gray-500",
    danger: "text-red-500",
    warning: "text-yellow-500",
    info: "text-sky-500",
    success: "text-green-500",
};
const size = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xs: "text-xs",
};

type Props = typeIcon & {
    name: string;
    variant?: keyof typeof bootStyle; // `style` 改為 `variant`

    size?: keyof typeof size;
};

const props = withDefaults(defineProps<Props>(), {
    name: "fa-solid fa-image",
    variant: "primary",
    size: "lg",
});



// 使用 cva 來管理 class
const iconCva = cva("", {
    variants: {
        variant: bootStyle, // 這裡改成 `variant`
        size: size,


    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    },
});

// 計算最終的 class
const classAtr = computed(() =>
    cn(iconCva({ variant: props.variant, size: props.size, }) + " " + props.color + " " + props.name)
);
</script>
