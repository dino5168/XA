<template>
    <a :href="props.to" class="flex items-center space-x-1 py-2 rtl:space-x-reverse">
        <img :src="props.imgSrc" class="size-8" :alt="props.alt" />
        <span
            class="self-center text-xl text-white hover:text-blue-100 hover:underline hover:underline-offset-2 drop-shadow-sm font-semibold whitespace-nowrap dark:text-white">{{
                props.desc }}</span>
    </a>
</template>

<script lang="ts" setup>
type companyLogo = {

    imgSrc?: string;
    alt?: string;
    desc?: string;
    to?: string;
}
const props = withDefaults(defineProps<companyLogo>(), {
    imgSrc: "/images/Logo.png",
    alt: "image desc",
    desc: "專營越南沉香",
    to: "/"
});


</script>