<template>
    <h1>
        <slot></slot>
    </h1>
</template>
<script lang="ts" setup>
import { size } from './types';
type htype = {
    size?: string
}

const props = withDefaults(defineProps<htype>(), {
    size: "md"
})

</script>