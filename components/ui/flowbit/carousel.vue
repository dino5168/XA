<template>
    <div id="default-carousel" class="relative w-full">
        <!-- Carousel wrapper -->
        <div class="relative h-auto overflow-hidden rounded-lg md:h-96 sm:h-64">
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
    </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
    './images/01.jpeg',
    './images/02.jpeg',
    './images/03.jpeg',
    './images/04.jpeg',
    './images/05.jpeg'
]

const currentIndex = ref(0)

const setCurrentIndex = (index) => {
    currentIndex.value = index
}

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
}

const previousSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>
