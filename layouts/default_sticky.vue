<script setup lang="ts">
import { ref } from 'vue'
import {
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarPortal,
    MenubarRoot,
    MenubarSeparator,
    MenubarTrigger,
} from 'radix-vue'
import badge from '~/components/X/badge.vue';
import ZMenuItem from '~/components/Z/ZMenuItem.vue';
import company from '~/components/ui/logo/company.vue';
import GotoTop from '~/components/X/gotoTop.vue';
</script>

<template>
    <GotoTop></GotoTop>
    <header class="sticky top-0  bg-blue-800 z-50 h-[5rem]">
        <div class="flex flex-row">
            <div class="basis-1/5 justify-center items-center">
                <company class="px-6" img-src="/images/image.png" alt="company logo png" desc="恐龍科技股份有限公司"></company>

            </div>
            <div class="basis-4/5 justify-center items-center">
                <MenubarRoot class="flex  p-2 sace-x-2">
                    <ZMenuItem>公司簡介</ZMenuItem>
                    <ZMenuItem>關於我們</ZMenuItem>
                    <MenubarMenu>
                        <MenubarTrigger class="px-4 py-2 hover:bg-gray-200 rounded">
                            檔案
                        </MenubarTrigger>
                        <MenubarPortal>
                            <MenubarContent class="bg-white shadow-md rounded p-1 min-w-[180px]">
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    新增
                                </MenubarItem>
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    開啟
                                </MenubarItem>
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    儲存
                                </MenubarItem>
                                <MenubarSeparator class="h-[1px] bg-gray-300 my-1" />
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    結束
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarPortal>
                    </MenubarMenu>
                    <ZMenuItem>編輯</ZMenuItem>

                    <MenubarMenu>
                        <MenubarTrigger class="px-4 py-2 hover:bg-gray-200 rounded">
                            檢視
                        </MenubarTrigger>
                        <MenubarPortal>
                            <MenubarContent class="bg-white shadow-md rounded p-1 min-w-[180px]">
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    放大
                                </MenubarItem>
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    縮小
                                </MenubarItem>
                                <MenubarSeparator class="h-[1px] bg-gray-300 my-1" />
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    重設縮放
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarPortal>
                    </MenubarMenu>

                    <MenubarMenu>
                        <MenubarTrigger class="px-4 py-2 hover:bg-gray-200 rounded">
                            說明
                        </MenubarTrigger>
                        <MenubarPortal>
                            <MenubarContent class="bg-white shadow-md rounded p-1 min-w-[180px]">
                                <MenubarItem class="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                                    關於
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarPortal>
                    </MenubarMenu>
                </MenubarRoot>
            </div>
        </div>

    </header>
    <main>
        <slot></slot>
    </main>

</template>