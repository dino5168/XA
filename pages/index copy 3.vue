<script setup lang="ts">
const onAlert = () => {
    alert("Go Line Page")
}
</script>

<template>

    <section class="relative h-[20rem] bg-slate-300">
        <div class="h-[10rem] bg-info flex items-center">
            <h1 class="font-poppins text-danger">This headline will use Poppins.</h1>
            <button class="p-4 bg-blue-500 text-white rounded-full animate-spin">
                🔄 旋轉中
            </button>
            <div class="w-10 h-10 bg-red-500 rounded-full animate-ping"></div>
            <div class="w-16 h-16 bg-green-500 rounded-md animate-pulse"></div>
            <button
                class="p-2 bg-purple-500 cursor-pointer text-white rounded-lg transition-transform duration-500 ease-in hover:scale-110">
                🛸 進入時變大
            </button>
            <button
                class="p-4 bg-teal-500 text-white rounded-lg transition-transform duration-500 ease-out hover:scale-75">
                🛸 離開時縮小
            </button>
        </div>
        <XMapGoogle></XMapGoogle>
        <div class="absolute flex flex-col gap-y-1 left-1 top-1/2 -translate-y-1/2">
            <span
                class="size-8 rounded-full px-2 bg-white flex justify-center items-center hover:bg-green-500 hover:cursor-pointer">
                <i class="fa-brands fa-line"></i>
            </span>
            <span
                class="size-8 rounded-full px-2 bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-google text-blue-500"></i>
            </span>
            <span
                class="size-8 rounded-full bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-facebook"></i>
            </span>
            <span
                class="size-8 rounded-full bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-github"></i>
            </span>
        </div>
    </section>



    <section class="container h-[10rem] bg-slate-600">





    </section>

    <section class="h-[20rem] bg-blue-100 dark">
        <div
            class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img class="size-12 shrink-0" src="/images/image.png" alt="ChitChat Logo" />
            <div>
                <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
                <p class="text-blue-500 dark:text-gray-400">You have a new message!</p>
            </div>
        </div>
        <div class="flex">
            <div class="w-32 h-32 bg-red-500">Item 1</div>
            <div class="w-32 h-32 bg-blue-500 shrink-0">Item 2 (shrink-0)</div>
            <div class="w-32 h-32 bg-green-500">Item 3</div>
        </div>

        <div class="bg-white text-black dark:bg-gray-800 dark:text-white p-6">
            <h1>這是暗黑模式的範例</h1>
            <p>根據系統設置或手動控制，這個區塊會變成深色或淺色。</p>
        </div>
    </section>
    <section class="h-[20rem] bg-100-500">
        <h1>OK</h1>
    </section>
    <section class="h-[20rem] bg-blue-500">
        <h1>OK</h1>
    </section>

</template>
<script lang="ts" setup>
</script>