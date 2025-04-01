<template>
    <i :class="props.name"></i>
</template>

<script lang="ts" setup>
type icon = {
    name?: string;
}
const props = withDefaults(defineProps<icon>(), {
    name: "fa fa-home"
})
</script>
