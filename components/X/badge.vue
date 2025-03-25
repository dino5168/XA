<template>
    <span :class="classAtr">
        <slot></slot>
    </span>
</template>
<script lang="ts" setup>
import { type badgeType, pattern, size } from './types';

const props = withDefaults(defineProps<badgeType>(), {
    pattern: "primary"
})
const commonStyle = "font-bold rounded-sm drop-shadow-sm px-2 py-1";
// 使用 cva 來管理 class
const badgeCva = cva(commonStyle, {
    variants: {
        pattern: pattern, // 這裡改成 `variant`
        size: size
    },
    defaultVariants: {
        pattern: "primary",
        size: "xs"
    },
});
// 計算最終的 class
const classAtr = computed(() =>
    cn(badgeCva({ pattern: props.pattern, size: props.size }))
);
</script>
