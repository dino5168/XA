<template>
    <section
        class="relative w-full h-[32rem] flex flex-col justify-center items-center text-center bg-transparent bg-cover bg-center">
        <!-- 修正變數名稱，正確綁定背景圖片 -->

        <!-- Carousel wrapper -->
        <div class="relative w-full h-[32rem] overflow-hidden">
            <!-- Dynamic carousel items -->
            <div v-for="(item, index) in images" :key="index"
                class="absolute inset-0 w-full h-full flex justify-center items-center transition-opacity duration-700"
                :class="{ 'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
                <img :src="item" alt="Carousel Image" class="w-full h-full object-cover" />
            </div>
            <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
                <h1 class="text-5xl md:text-6xl font-bold text-blue-800">探索無限可能</h1>
                <p class="mt-4 text-lg font-bold text-blue-600 md:text-xl">發掘最棒的解決方案，開啟你的旅程</p>
                <a href="#"
                    class="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 inline-block">
                    立即開始
                </a>
            </div>

        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="(item, index) in images" :key="'indicator-' + index" type="button"
                class="w-3 h-3 rounded-full transition-all"
                :class="{ 'bg-gray-800': currentIndex === index, 'bg-white': currentIndex !== index }"
                @click="setCurrentIndex(index)" :aria-current="currentIndex === index ? 'true' : 'false'"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>

        <!-- Slider controls -->
        <button type="button"
            class="absolute top-1/2 left-4 z-30 cursor-pointer transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
            @click="previousSlide">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 1 1 5l4 4" />
            </svg>
        </button>

        <button type="button"
            class="absolute top-1/2 right-4 z-30 cursor-pointer transform -translate-y-1/2 bg-white/30 p-3 rounded-full hover:bg-white/50"
            @click="nextSlide">
            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 9 4-4-4-4" />
            </svg>
        </button>


    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const images = [
    '/images/01.jpeg',
    '/images/02.jpeg',
    '/images/03.jpeg',
    '/images/04.jpeg',
    '/images/05.jpeg'
];

const currentIndex = ref(0);

const setCurrentIndex = (index: number) => {
    currentIndex.value = index;
};

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const previousSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
let intervalId: ReturnType<typeof setInterval> | null = null;
// 自動播放函式
const startAutoPlay = () => {
    intervalId = setInterval(nextSlide, 3000); // 每 3 秒切換
};

// 停止自動播放
const stopAutoPlay = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};
// 在元件掛載時啟動自動播放
onMounted(() => {
    startAutoPlay();
});

// 在元件卸載時停止自動播放，避免記憶體洩漏
onUnmounted(() => {
    stopAutoPlay();
});
</script>
