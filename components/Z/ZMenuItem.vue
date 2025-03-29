<template>
    <MenubarMenu>
        <MenubarTrigger class="px-4 py-2 hover:text-blue-500 rounded cursor-pointer underline">
            <badge>
                <slot></slot>
            </badge>
        </MenubarTrigger>
    </MenubarMenu>
</template>
<script lang="ts" setup>
import badge from '~/components/X/badge.vue';
</script>