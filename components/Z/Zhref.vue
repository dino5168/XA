<template>
    <a>
        <slot></slot>
    </a>
</template>
<script lang="ts" setup>
import { content } from '~/tailwind.config.';

type zhref = {
    content?: string
}
const props = withDefaults(defineProps<zhref>(), {
    content: "Hper Line Text"
});
</script>