<template>
    <section :style="{ height: props.height }" :class="props.bgcolor">
        <slot></slot>
    </section>
</template>

<script lang="ts" setup>
type xsection = {
    height?: string;
    bgcolor?: string;
}


const props = withDefaults(defineProps<xsection>(), {
    height: "300px",
    bgcolor: "bg-blue-800"
});
</script>
