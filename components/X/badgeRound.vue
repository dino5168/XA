<template>
    <div :class="classAtr">
        <slot></slot>
    </div>

</template>
<script lang="ts" setup>
import { type badgeType, bgColor, txSize } from "./types"
const commonStyle = "inline-flex w-auto h-4 text-xs bg-green-700 border-black text-white rounded items-center justify-center";
const props = withDefaults(defineProps<badgeType>(), {
    bgColor: "primary",
    txSize: "xs",

})
const badgeCva = cva(commonStyle, {
    variants: {
        bgColor: bgColor,
        txSize: txSize
    }
})
// 計算最終的 class
const classAtr = computed(() =>
    cn(badgeCva({ bgColor: props.bgColor, txSize: props.txSize }))
);
</script>