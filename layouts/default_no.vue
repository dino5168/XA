<template>
    <header class="sticky top-0 z-9999">
        <nav class="flex flex-row w-full px-4 items-center h-16 bg-blue-900">
            <div>
                <UiLogoCompany></UiLogoCompany>
            </div>
            <div class="ml-auto">
                <YuiDropdownsDropdown class="flex-end"></YuiDropdownsDropdown>
            </div>

        </nav>
    </header>
    <div>
        <slot></slot>
    </div>
</template>