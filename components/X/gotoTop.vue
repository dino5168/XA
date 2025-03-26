<template>
    <div v-show="isVisible"
        class="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg cursor-pointer transition-opacity duration-300 hover:bg-blue-600"
        @click="scrollToTop">
        <i class="fa-solid fa-arrow-up text-xl"></i>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
    isVisible.value = window.scrollY > 250
}

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
