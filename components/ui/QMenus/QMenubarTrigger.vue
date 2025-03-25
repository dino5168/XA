<template>
    <button
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none hover:bg-slate-100 focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700"
        :class="{ 'bg-slate-100 dark:bg-slate-700': open }" role="menuitem" :aria-expanded="open"
        @click="onTriggerClick">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{
    open: boolean;
    onTriggerClick: () => void;
}>();
</script>