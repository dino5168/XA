<template>
    <DialogRoot>
        <DialogTrigger asChild>
            <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                打開對話框
            </button>
        </DialogTrigger>
        <DialogContent class="p-6 bg-white rounded-lg shadow-lg max-w-md">
            <p class="text-lg">這是一個自訂樣式的 Dialog</p>
            <DialogClose asChild>
                <button class="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                    關閉
                </button>
            </DialogClose>
        </DialogContent>
    </DialogRoot>
</template>
