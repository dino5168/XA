<template>
    <badge :pattern="props.pattern" :size="props.size">
        <slot></slot>
        <span class="px-0.5"></span>
        <badgeRound :pattern="props.pattern">{{ props.content }}
        </badgeRound>
    </badge>
</template>
<script lang="ts" setup>
import { type badgeType, pattern } from './types';
import badge from './badge.vue';
import badgeRound from './badgeRound.vue';
type badgeNumberType = {
    content?: string
} & badgeType

const props = withDefaults(defineProps<badgeNumberType>(), {
    pattern: "primary",
    size: "xs",
    content: "10"
})

</script>