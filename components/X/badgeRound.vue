<template>
    <div :class="classAtr">
        <slot></slot>
    </div>

</template>
<script lang="ts" setup>
import { type badgeType, pattern, size } from "./types"
const commonStyle = "inline-flex w-auto h-4 text-xs bg-green-700 border-black text-white rounded items-center justify-center";
const props = withDefaults(defineProps<badgeType>(), {
    pattern: "primary",
    size: "xs",

})
const badgeCva = cva(commonStyle, {
    variants: {
        pattern: pattern,
        size: size
    }
})
// 計算最終的 class
const classAtr = computed(() =>
    cn(badgeCva({ pattern: props.pattern, size: props.size }))
);
</script>