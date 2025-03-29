<script setup lang="ts">
const onAlert = () => {
    alert("Go Line Page")
}
</script>

<template>
    <section class="h-[32rem] grid grid-cols-3 gap-1 bg-neutral-500">
        <!-- Pin to top left corner -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute top-0 left-0 size-16 bg-amber-200">01</div>
        </div>
        <!-- Span top edge -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute inset-x-0 top-0 h-16 bg-amber-200">02</div>
        </div>
        <!-- Pin to top right corner -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute top-0 right-0 size-16 bg-amber-200">03</div>
        </div>
        <!-- Span left edge -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute inset-y-0 left-0 w-16 bg-amber-200">04</div>
        </div>
        <!-- Fill entire parent -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute inset-0 bg-amber-200">05</div>
        </div>
        <!-- Span right edge -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute inset-y-0 right-0 w-16 bg-amber-200">06</div>
        </div>
        <!-- Pin to bottom left corner -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute bottom-0 left-0 size-16 bg-amber-200">07</div>
        </div>
        <!-- Span bottom edge -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute inset-x-0 bottom-0 h-16 bg-amber-200">08</div>
        </div>
        <!-- Pin to bottom right corner -->
        <div class="relative size-32 bg-amber-50">
            <div class="absolute right-0 bottom-0 size-16 bg-amber-200">09</div>
        </div>
    </section>
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
            <span @click="onAlert"
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