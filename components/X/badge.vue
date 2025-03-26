<template>
    <span :class="classAtr">
        <slot></slot>
    </span>
</template>
<script lang="ts" setup>
import { type badgeType, bgColor, txSize } from './types';
const cssClass = "badge";
const props = withDefaults(defineProps<badgeType>(), {
    bgColor: "primary"
})

// 使用 cva 來管理 class
const badgeCva = cva(cssClass, {
    variants: {
        bgColor: bgColor, // 這裡改成 `variant`
        txSize: txSize
    },
    defaultVariants: {
        bgColor: "primary",
        txSize: "xs"
    },
});
// 計算最終的 class
const classAtr = computed(() =>
    cn(badgeCva({ bgColor: props.bgColor, txSize: props.txSize }))
);
</script>
