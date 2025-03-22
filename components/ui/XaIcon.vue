<template>
    <i :class="iconClass"></i>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
    name: string
}

const props = withDefaults(defineProps<Props>(), {
    name: 'fa-solid fa-house',
})

const iconClass = computed(() => props.name.trim() || 'fa-solid fa-house')
</script>
