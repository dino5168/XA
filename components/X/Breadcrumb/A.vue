<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{ title: string }>();
</script>

<template>
    <section id="breadcrumbs" class="bg-green-600 py-4">
        <div class="mx-auto px-4">
            <div class="flex justify-between items-center">
                <h2 class="text-xl text-white font-semibold">{{ title }}</h2>
                <ol class="flex space-x-2 text-gray-600">
                    <li>
                        <a href="/" class="text-blue-600 hover:underline">Home</a>
                    </li>
                    <li class="text-gray-400">/</li>
                    <li class="text-gray-800">{{ title }}</li>
                </ol>
            </div>
        </div>
    </section>
</template>
