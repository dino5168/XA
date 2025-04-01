<template>
    <div class="flex gap-2">
        <a v-for="(button, index) in buttons" :key="button.name" @click="activeButton = index"
            class="text-blue-500 text-sm cursor-pointer transition-all duration-300 font-bold px-2 hover:text-blue-800 hover:underline hover:decoration-2 hover:underline-offset-4"
            :class="{
                'text-blue-800 underline decoration-2 underline-offset-4': activeButton === index,
                'text-blue-500': activeButton !== index
            }">
            {{ button.name }}
        </a>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

type CButton = {
    name: string;
    defaultIndex?: number;
};

// 定義按鈕列表
const buttons: CButton[] = [
    { name: "公司首頁", defaultIndex: 0 },
    { name: "關於我們", defaultIndex: 1 },
    { name: "要有活力", defaultIndex: 2 }
];

// 設定 `activeButton` 初始值為 `buttons[0].defaultIndex` 或 `0`
const activeButton = ref(buttons[0].defaultIndex ?? 0);
</script>
