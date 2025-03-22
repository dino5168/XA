<template>
    <RenderComponent />
</template>

<script lang="ts" setup>
import { h, defineComponent } from "vue";

const RenderComponent = defineComponent({
    render() {
        return h("div", { class: "text-blue-500 text-lg" }, "Hello, Vue h Function!");
    },
});
</script>
