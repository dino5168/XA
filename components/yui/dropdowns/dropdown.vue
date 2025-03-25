<template>
    <div class="relative inline-block text-left" @click.outside="closeDropdown">
        <a href="/ui/alert"
            class="text-white px-2 py-1  hover:cursor-pointer  font-bold  text-lg  text-center inline-flex items-center">
            沉香介紹
        </a>
        <a href="/ui/exH"
            class="text-white px-2 py-1  hover:cursor-pointer  font-bold  text-lg  text-center inline-flex items-center">
            聯絡我們
        </a>

        <a
            class="text-blue-200 px-2 py-1  hover:cursor-pointer  font-bold  text-lg  text-center inline-flex items-center">
            服務項目
        </a>
        <a @click="toggleDropdown"
            class="text-blue-200 px-2 py-1  hover:cursor-pointer  font-bold  text-lg  text-center inline-flex items-center"
            type="button">
            公司產品
            <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
            </svg>
        </a>

        <div v-show="isOpen"
            class="absolute  w-44 bg-white divide-y divide-gray-100 rounded-lg shadow-md dark:bg-gray-700">
            <ul class="text-sm text-gray-700 font-bold dark:text-gray-200">
                <li><a href="#"
                        class="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li><a href="#"
                        class="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">系統設定</a>
                </li>
                <li><a href="#"
                        class="block px-4 py-2 font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li><a href="#"
                        class="block px-4 py-2 font-bold  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">系統登出</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const closeDropdown = (event) => {
    if (isOpen.value && !event.target.closest('.relative')) {
        isOpen.value = false;
    }
};

onMounted(() => {
    document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
    document.removeEventListener('click', closeDropdown);
});
</script>
