<template>
    <nav>
        <!-- Desktop Navigation Menu -->
        <div class="hidden ml-auto lg:block">
            <NavigationMenuRoot class="w-full">
                <NavigationMenuList class="flex relative items-center">
                    <NavigationMenuItem v-for="item in items" :key="item.name" class="relative px-4">
                        <template v-if="item.children">
                            <NavigationMenuTrigger class="text-blue-500 hover:underline cursor-pointer py-2">
                                {{ item.name }}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent
                                class="absolute left-0 mt-2 bg-blue-500 shadow-lg rounded-md p-2 w-48 z-20">
                                <ul>
                                    <li v-for="subItem in item.children" :key="subItem.name"
                                        class="relative nested-menu-item">
                                        <!-- If the sub-item also has children, create another level of dropdown -->
                                        <template v-if="subItem.children">
                                            <div
                                                class="flex items-center justify-between p-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
                                                {{ subItem.name }}
                                                <i class="fa-solid fa-angle-right ml-2 text-sm"></i>
                                            </div>
                                            <div
                                                class="absolute left-full top-0 bg-blue-500 shadow-lg rounded-md p-2 w-48 hidden third-level-menu z-30">
                                                <ul>
                                                    <li v-for="grandChild in subItem.children" :key="grandChild.name">
                                                        <NavigationMenuLink :href="grandChild.href"
                                                            class="block p-2 text-gray-700 hover:bg-gray-200 ">
                                                            {{ grandChild.name }}
                                                        </NavigationMenuLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                        <!-- If the sub-item has no children, just display the link -->
                                        <template v-else>
                                            <NavigationMenuLink :href="subItem.href"
                                                class="block p-2 text-gray-700 hover:bg-gray-200">
                                                {{ subItem.name }}
                                            </NavigationMenuLink>
                                        </template>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </template>
                        <template v-else>
                            <NavigationMenuLink :href="item.href"
                                class="text-blue-500 hover:underline cursor-pointer py-2 block">
                                {{ item.name }}
                            </NavigationMenuLink>
                        </template>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenuRoot>
        </div>

        <!-- Mobile Menu Button -->
        <div class="flex items-center justify-center lg:hidden">
            <span @click="toggleMobileMenu" class="cursor-pointer">
                <i class="fa-solid fa-bars text-2xl text-blue-500 hover:text-blue-300"></i>
            </span>
        </div>

        <!-- Mobile Sidebar Navigation -->
        <div :class="{ 'hidden': !mobileMenuOpen }" class="bg-blue-300 w-[12rem] fixed top-[4rem] left-0 h-full z-50">
            <div class="relative w-full h-full">
                <div class="absolute top-0 right-0">
                    <button @click="toggleMobileMenu" class="cursor-pointer bg-blue-500 text-white px-4 py-2">
                        CloseMe
                    </button>
                </div>
                <div class="pt-14 px-2">
                    <ul class="space-y-4">
                        <li v-for="item in items" :key="item.name" class="relative">
                            <!-- Item with children -->
                            <template v-if="item.children">
                                <div @click="toggleSubmenu(item)"
                                    class="text-blue-500 hover:underline cursor-pointer py-2 flex justify-between items-center">
                                    <span>{{ item.name }}</span>
                                    <i :class="[item.isOpen ? 'fa-angle-down' : 'fa-angle-right', 'fa-solid ml-2']"></i>
                                </div>
                                <ul v-if="item.isOpen" class="pl-4 mt-2 space-y-2">
                                    <li v-for="subItem in item.children" :key="subItem.name" class="relative">
                                        <!-- Second level with children -->
                                        <template v-if="subItem.children">
                                            <div @click="toggleSubmenu(subItem)"
                                                class="text-blue-500 hover:underline cursor-pointer py-2 flex justify-between items-center">
                                                <span>{{ subItem.name }}</span>
                                                <i
                                                    :class="[subItem.isOpen ? 'fa-angle-down' : 'fa-angle-right', 'fa-solid ml-2']"></i>
                                            </div>
                                            <ul v-if="subItem.isOpen" class="pl-4 mt-2 space-y-2">
                                                <li v-for="grandChild in subItem.children" :key="grandChild.name">
                                                    <a :href="grandChild.href"
                                                        class="text-blue-500 hover:underline block py-1">
                                                        {{ grandChild.name }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </template>
                                        <!-- Second level without children -->
                                        <template v-else>
                                            <a :href="subItem.href" class="text-blue-500 hover:underline block py-1">
                                                {{ subItem.name }}
                                            </a>
                                        </template>
                                    </li>
                                </ul>
                            </template>
                            <!-- Item without children -->
                            <template v-else>
                                <a :href="item.href" class="text-blue-500 hover:underline block py-2">
                                    {{ item.name }}
                                </a>
                            </template>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});

// Add isOpen property to each menu item with children for mobile toggle
const processedItems = ref([]);

const initializeItems = () => {
    processedItems.value = props.items.map(item => {
        const newItem = { ...item, isOpen: false };
        if (newItem.children) {
            newItem.children = newItem.children.map(subItem => {
                return { ...subItem, isOpen: false };
            });
        }
        return newItem;
    });
    return processedItems.value;
};

// Mobile menu state
const mobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Toggle submenu on mobile
const toggleSubmenu = (item) => {
    item.isOpen = !item.isOpen;
};

onMounted(() => {
    initializeItems();
});
</script>

<style scoped>
/* Desktop multi-level menu hover effects */
.nested-menu-item:hover .third-level-menu {
    display: block;
}

/* Ensure submenus don't get cut off */
.NavigationMenuContent {
    overflow: visible;
}

/* Fix z-index for proper stacking */
.NavigationMenuRoot {
    position: relative;
    z-index: 10;
}
</style>