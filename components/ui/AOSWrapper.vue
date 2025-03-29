<script setup lang="ts">
import { useAOS } from "@/composables/useAOS";

const { registerElement } = useAOS();
</script>

<template>
    <ClientOnly>
        <div ref="aosContainer">
            <slot />
        </div>
    </ClientOnly>
</template>
