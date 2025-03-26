<template>
    <badge :pattern="props.bgColor" :size="props.txSize">
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
    bgColor: "danger",
    name: "fa fa-home",
    txSize: "xs",
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