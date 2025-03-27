<template>
    <section :class="props.textColor">
        <slot></slot>
    </section>
</template>

<script lang="ts" setup>
import { type sectionType, sectionStyle, bgColor, textCorleMap } from './types';
import { typeClsss } from './typeClsss';

const cssClass = "section"; //main.css 定義共同定義
const props = withDefaults(defineProps<sectionType>(), {
    textColor: typeClsss.getTextColor("red", "500"),
    bgColor: typeClsss.getBgColor("blue", "500"),
    sectionStyle: "auto",
});
const sectionCva = cva("", {
    variants: {

    },
    defaultVariants: {

    }
})

const classStr = computed(() => {

})

</script>
