<template>
    <header class="h-[4rem] bg-blue-500 w-full">

    </header>
    <section class="h-[32rem] bg-blue-800 grid grid-cols-2">
        <div class="flex flex-col space-x-3 space-y-3 px-30">
            <div>
                <p class="text-5xl text-white">Better Solutions For Your Business</p>

            </div>
            <div>
                <p class="text-2xl text-blue-100">Header 02</p>
            </div>
            <div class="flex flex-row items-center space-x-3">
                <button class="text-sm  bg-blue-300 rounded-full px-4 py-2 text-white">Get Start</button>
                <span>Wath video</span>

            </div>
        </div>
        <div class="relative">
            <h1>Grid02</h1>
            <img src="/images/01.jpeg" class="absolute animate-bounce">
        </div>

    </section>
    <section>
        <XMapGoogle></XMapGoogle>
    </section>
    <XGotoTop></XGotoTop>

</template>
<script lang="ts" setup>
</script>
<style scoped>
@keyframes slideUpDown {
    0% {
        transform: translateY(-10px);
    }

    50% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(10px);
    }
}

.animate-slideUpDown {
    animation: slideUpDown 2s infinite;
}
</style>