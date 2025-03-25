<template>
  <div role="menuitem"
    class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
    :class="{ 'bg-slate-100 dark:bg-slate-700': highlighted }" :tabindex="disabled ? -1 : 0"
    :data-disabled="disabled ? true : undefined" @click="!disabled && onClick ? onClick() : null"
    @mouseenter="setHighlighted(true)" @mouseleave="setHighlighted(false)" @focus="setHighlighted(true)"
    @blur="setHighlighted(false)" @keydown.enter="!disabled && onClick ? onClick() : null"
    @keydown.space="!disabled && onClick ? onClick() : null">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  disabled?: boolean;
  onClick?: () => void;
}>();

const highlighted = ref(false);

const setHighlighted = (value: boolean) => {
  highlighted.value = value;
};
</script>