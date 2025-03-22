<template>

    <div class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
        <span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </div>
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <span class="font-medium">Danger alert!</span> Change a few things up and try submitting again.
    </div>
    <div class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
        role="alert">
        <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
    </div>
    <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
        role="alert">
        <span class="font-medium">Warning alert!</span> Change a few things up and try submitting again.
    </div>
    <div class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
        <span class="font-medium">Dark alert!</span> Change a few things up and try submitting again.
    </div>
</template>
<script lang="ts" setup>
import { cva, cn } from "@/utils";
const alertVariants = cva(
    "transition-transform duration-150 font-bold cursor-pointer",
    {
        variants: {
            buttonStyle: {
                primary: "bg-blue-500 text-white",
                secondary: "bg-gray-500 text-white",
                danger: "bg-red-500 text-white",
                warning: "bg-yellow-500 text-white",
                info: "bg-sky-500 text-white",
                success: "bg-green-500 text-white",
            },
            size: {
                xs: "text-xs py-1 px-2 rounded-sm",
                sm: "text-sm py-1 px-2 rounded-sm",
                md: "text-base py-2 px-4 rounded-md",
                lg: "text-lg py-3 px-6 rounded-lg",
                xl: "text-xl py-3 px-6 rounded-lg"
            }
        },
        defaultVariants: {
            buttonStyle: "primary",
            size: "sm"
        }
    }
);
const props = defineProps<{
    buttonStyle?: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success';
    size?: 'xs' | 'sm' | 'md' | 'lg'
}>();
</script>