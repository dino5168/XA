<template>
    <div>
        <header class="fixed top-0 w-full h-[4rem] bg-white z-999">
            <slot name="header"></slot>
        </header>
        <main class="mt-[4rem]">

            <slot></slot> <!-- 確保可以放入其他內容 -->
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
