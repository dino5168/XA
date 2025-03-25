<template>
    <Primitive v-bind="props" @mousedown="(event) => {
        // prevent text selection when double clicking label
        if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
    }">
        <slot></slot>
    </Primitive>
</template>
<script lang="ts" setup>

import { useForwardExpose } from "radix-vue";
import type { PrimitiveProps } from "radix-vue"

export interface LabelProps extends PrimitiveProps {
    for?: string
}
const props = withDefaults(defineProps<LabelProps>(), {
    as: 'label',
})
useForwardExpose()
//useForwardProps(props);
</script>