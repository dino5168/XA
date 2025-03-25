<script lang="ts" setup>

definePageMeta({
    layout: 'default-no'
})
import { QMenubar, QMenubarContent, QMenubarItem, QMenubarMenu, QMenubarSeparator, QMenubarTrigger, QMenubarShortcut } from "../components/ui/QMenus"

const handleItemClick = (action: string) => {
    alert(action)

}
const onTriggerClick = () => {

}
</script>
<template>
    <QMenubar>
        <QMenubarMenu :index="0">
            <template #trigger="{ open, onTriggerClick }">
                <QMenubarTrigger :open="open" :onTriggerClick="onTriggerClick">
                    文件
                </QMenubarTrigger>
            </template>

            <template #content="{ open, onClose }">
                <QMenubarContent :open="open" :onClose="onClose">
                    <QMenubarItem :onClick="() => handleItemClick('新建文件')">
                        新建文件
                        <MenubarShortcut>⌘N</MenubarShortcut>
                    </QMenubarItem>
                    <QMenubarItem :onClick="() => handleItemClick('打開文件')">
                        打開文件
                        <MenubarShortcut>⌘O</MenubarShortcut>
                    </QMenubarItem>
                    <QMenubarSeparator />
                    <QMenubarItem :onClick="() => handleItemClick('保存')">
                        保存
                        <QMenubarShortcut>⌘S</QMenubarShortcut>
                    </QMenubarItem>
                </QMenubarContent>
            </template>
        </QMenubarMenu>

        <QMenubarMenu :index="1">
            <template #trigger="{ open, onTriggerClick }">
                <QMenubarTrigger :open="open" :onTriggerClick="onTriggerClick">
                    文件
                </QMenubarTrigger>
            </template>

            <template #content="{ open, onClose }">
                <QMenubarContent :open="open" :onClose="onClose">
                    <QMenubarItem :onClick="() => handleItemClick('新建文件')">
                        新建文件
                        <MenubarShortcut>⌘N</MenubarShortcut>
                    </QMenubarItem>
                    <QMenubarItem :onClick="() => handleItemClick('打開文件')">
                        打開文件
                        <MenubarShortcut>⌘O</MenubarShortcut>
                    </QMenubarItem>
                    <QMenubarSeparator />
                    <QMenubarItem :onClick="() => handleItemClick('保存')">
                        保存
                        <QMenubarShortcut>⌘S</QMenubarShortcut>
                    </QMenubarItem>
                </QMenubarContent>
            </template>
        </QMenubarMenu>

    </QMenubar>
</template>
