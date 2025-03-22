<script lang="ts" setup>
import XaBadge from './XaBadge.vue'
import XaIcon from './XaIcon.vue'

const props = defineProps<{
    icon?: string;
    color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    decoration?: 'underline' | 'overline' | 'line' | 'no';
}>();
</script>

<template>
    <XaBadge :color="color" :size="size" :weight="weight" :decoration="decoration">
        <XaIcon v-if="icon" :name="icon" class="mr-1" />
        <slot></slot>
    </XaBadge>
</template>
