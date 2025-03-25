<template>
    <li>
        <a :href="props.link"
            class="block py-2 px-3 font-bold  text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
            aria-current="page">
            <slot></slot>
        </a>
    </li>
</template>
<script lang="ts" setup>
type href = {
    link?: string
}
const props = withDefaults(defineProps<href>(), { link: "#" })


</script>