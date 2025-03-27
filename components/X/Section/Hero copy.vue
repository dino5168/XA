<template>
    <section
        class="relative w-full h-[28rem] flex flex-col justify-center items-center text-center bg-transparent bg-cover bg-center">
        <!-- 修正變數名稱，正確綁定背景圖片 -->

        <!-- Carousel wrapper -->
        <div class="relative h-auto z-2 overflow-hidden rounded-lg md:h-96 sm:h-64">
            <!-- Dynamic carousel items -->
            <div v-for="(item, index) in images" :key="index" :class="{
                'hidden': currentIndex !== index,
                'duration-700 ease-in-out': true
            }" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <img :src="item" alt="Image" />
            </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="(item, index) in images" :key="'indicator-' + index" type="button" :class="{
                'w-3 h-3 rounded-full': true,
                'bg-white': currentIndex !== index,
                'bg-gray-800': currentIndex === index
            }" @click="setCurrentIndex(index)" :aria-current="currentIndex === index ? 'true' : 'false'"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>

        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="previousSlide">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="nextSlide">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>

        <div class="relative z-10 text-white px-6">
            <h1 class="text-5xl md:text-6xl font-bold text-blue-800">探索無限可能</h1>
            <p class="mt-4 text-lg font-bold text-blue-600 md:text-xl ">發掘最棒的解決方案，開啟你的旅程</p>
            <a href="#"
                class="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-600 transition duration-300 inline-block">立即開始</a>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

type SectionHero = {
    imgSrc?: string;
};

const props = withDefaults(defineProps<SectionHero>(), {
    imgSrc: '/images/02.jpeg',
});
// backgroundPosition: 'center',
// 正確的 computed 寫法
const styleString = computed(() => ({
    backgroundImage: `url(${props.imgSrc})`,
    backgroundSize: 'cover',

}));

const images = [
    './images/01.jpeg',
    './images/02.jpeg',
    './images/03.jpeg',
    './images/04.jpeg',
    './images/05.jpeg'
]

const currentIndex = ref(0)

const setCurrentIndex = (index: number) => {
    currentIndex.value = index
}

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
}

const previousSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>
