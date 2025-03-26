<template>
    <badge :pattern="props.bgColor" :size="props.txSize">
        <slot></slot>
        <span class="px-0.5"></span>
        <badgeRound :pattern="props.bgColor">{{ props.content }}
        </badgeRound>
    </badge>
</template>
<script lang="ts" setup>
import { type badgeType } from './types';
import badge from './badge.vue';
import badgeRound from './badgeRound.vue';
type badgeNumberType = {
    content?: string
} & badgeType

const props = withDefaults(defineProps<badgeNumberType>(), {
    bgColor: "primary",
    txSize: "xs",
    content: "10"
})

</script>