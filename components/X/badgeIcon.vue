<template>
    <badge :pattern="props.pattern" :size="props.size">
        <i :class="props.name"></i>


        <span v-if="isSpaceX" :class="props.spaceX">
            <slot></slot>
        </span>

    </badge>
</template>
<script lang="ts" setup>
import { type badgeType } from './types';
import badge from './badge.vue';
type iconType = {
    name: string;
    spaceX?: string;
} & badgeType

const props = withDefaults(defineProps<iconType>(), {
    pattern: "danger",
    name: "fa fa-home",
    size: "xs",
    spaceX: "px-1",
})
const isSpaceX = ref(false);
//
onMounted(() => {

    if (props.spaceX.length > 0) {
        isSpaceX.value = true
    }
})
</script>