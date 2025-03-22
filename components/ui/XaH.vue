<template>
    <h1>Header 01</h1>
</template>
<script lang="ts" setup>
import { cva, cn } from "@/utils";
const buttonVariants = cva(
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
                sm: "text-sm py-1 px-2 rounded-sm",
                md: "text-base py-2 px-4 rounded-md",
                lg: "text-lg py-3 px-6 rounded-lg",
                xs: "text-xs py-1 px-2 rounded-sm"
            }
        },
        defaultVariants: {
            buttonStyle: "primary",
            size: "sm"
        }
    }
);
</script>