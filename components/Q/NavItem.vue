<template>
    <ClientOnly>
        <div>
            <a :href="href" class="text-white hover:underline block md:inline-block">
                <slot></slot>
            </a>
        </div>
    </ClientOnly>
</template>

<script lang="ts" setup>
defineProps<{
    href: string;
}>();
</script>