<script lang="ts" setup>
import { cn, cva } from "@/utils"
const props = defineProps<{
    color?: 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
    decoration?: 'underline' | 'overline' | 'line' | 'no';
}>();
const badgeVariants = cva("me-2 px-2.5 py-0.5",
    {
        variants: {
            color: {
                blue: "bg-blue-100 text-blue-800",
                gray: "bg-gray-100 text-gray-800",
                red: "bg-red-100 text-red-800",
                green: "bg-green-100 text-green-800",
                yellow: "bg-yellow-100 text-yello-800",
                indigo: "bg-indigo-100 text-indigo-800",
                purple: "bg-purple-100 text-purple-800",
                pink: "bg-pink-100 text-pink-800",
            },
            size: {
                sm: "text-sm py-1 px-2 rounded-sm",
                md: "text-base py-2 px-4 rounded-md",
                lg: "text-lg py-3 px-6 rounded-lg",
                xs: "text-xs py-1 px-2 rounded-sm",
                xl: "text-xl py-1 px-2 rounded-xl"
            },
            weight: {
                thin: 'font-thin',
                extralight: 'font-extralight',
                light: 'font-light',
                normal: 'font-normal',
                medium: 'font-medium',
                semibold: 'font-semibold',
                bold: 'font-bold',
                extrabold: 'font-extrabold',
                black: 'font-black'
            },
            decoration: {
                underline: "underline",
                overline: "overline",
                line: "line-through",
                no: "no-underline",
            }

        },
        defaultVariants: {
            color: "blue",
            size: "xs",
            weight: "bold",
            decoration: "no"


        }
    }
)

</script>
<template>
    <span
        :class="cn(badgeVariants({ color: props.color, size: props.size, weight: props.weight, decoration: props.decoration }))">
        <slot></slot>
    </span>

</template>
