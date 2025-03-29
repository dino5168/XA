<script setup lang="ts">
const onAlert = () => {
    alert("Go Line Page")
}
</script>

<template>
    <section>
        <div class="橫向排列">
            <a href="#">公司簡介</a>
            <a href="#" class="a_red">公司簡介</a>
            <h1 class="px-1">Header 01</h1>
            <h1 class="px-1">Header 01</h1>
        </div>
        <div class="縱向排列 ">
            <h1 class="px-1 text-blue-500">Header 01</h1>
            <h1 class="px-1 text-green-500">Header 01</h1>
        </div>
    </section>
    <section class="h-[20rem] bg-indigo-500">
        <button class="btn btn-primary">訂閱</button>
        <h1 class="text-indigo-200">Header 01</h1>
        <h2 class="text-green-200">Header 02</h2>
        <h3 class="text-red-300">Header 03</h3>
        <h4>Header 04</h4>
        <h5>Header 05</h5>
        <h6>Header 06</h6>

    </section>
    <section class="h-[20rem]">
        <p> this is a paragraph</p>
        <a href="#">Go to home page</a>
        <input class="accent-purple-500/25" type="checkbox" checked /><label>Yes</label>
        <input class="accent-purple-500/75" type="checkbox" checked /><label>No</label>

    </section>
    <section class="h-[20rem] bg-white">
        <div class="flex">
            <div class="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
            <div class="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
            <div class="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
        </div>
        <div>


            <button class="bg-blue-500 shadow-lg shadow-blue-500/50">Subscribe</button>
            <button class="bg-indigo-500 shadow-lg shadow-indigo-500/50">Subscribe</button>
            <button class="bg-gray-500 shadow-lg shadow-gray-500/50">Subscribe</button>
        </div>
        <div class="flex">
            <div class="inset-shadow-sm inset-shadow-indigo-500 size-16"></div>
            <div class="inset-shadow-sm inset-shadow-indigo-500/50 size-16"></div>
        </div>


    </section>
    <section>
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
                <tr>
                    <td>Witchy Woman</td>
                    <td>The Eagles</td>
                    <td>1972</td>
                </tr>
                <tr>
                    <td>Shining Star</td>
                    <td>Earth, Wind, and Fire</td>
                    <td>1975</td>
                </tr>
            </tbody>
        </table>
        <table class="border-collapse border border-blue-400 ...">
            <thead>
                <tr>
                    <th class="border border-blue-300 bg-blue-500">State</th>
                    <th class="border border-blue-300 bg-red-500">City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border border-gray-300 ...">Indiana</td>
                    <td class="border border-gray-300 ...">Indianapolis</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 ...">Ohio</td>
                    <td class="border border-gray-300 ...">Columbus</td>
                </tr>
                <tr>
                    <td class="border border-gray-300 ...">Michigan</td>
                    <td class="border border-gray-300 ...">Detroit</td>
                </tr>
            </tbody>
        </table>
    </section>
    <section class="h-[20rem] bg-blue-200">
        <p class="indent-8">So I started to walk into the water...</p>
        <p class="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-5xl font-extrabold text-transparent">
            Hello world
        </p>
    </section>
    <section class="relative h-[20rem] bg-blue-800">
        <div class="absolute flex flex-col gap-y-1 right-1 top-1/2 -translate-y-1/2">
            <span
                class="size-8 animate-bounce rounded-full px-2 bg-white flex justify-center items-center hover:bg-green-500 hover:cursor-pointer">
                <i class="fa-brands fa-line"></i>
            </span>
            <span
                class="size-8 animate-bounce rounded-full px-2 bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-google text-blue-500"></i>
            </span>
            <span
                class="size-8 animate-bounce rounded-full bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-facebook"></i>
            </span>
            <span
                class="size-8 animate-bounce rounded-full bg-white flex justify-center items-center hover:bg-amber-100 hover:cursor-pointer">
                <i class="fa-brands fa-github"></i>
            </span>
        </div>

    </section>
    <section class="h-[20rem] bg-blue-200">
        <div class="flex gap-10">
            <!-- 立方體 1 -->
            <div class="size-20 perspective-near perspective-origin-top-left relative">
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-z-6 rotate-x-0">
                    1</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-z-6 rotate-y-18">
                    2</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-x-6 rotate-y-90">
                    3</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-x-6 -rotate-y-90">
                    4</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-y-6 rotate-x-90">
                    5</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-y-6 -rotate-x-90">
                    6</div>
            </div>

            <!-- 立方體 2 -->
            <div class="size-20 perspective-near perspective-origin-bottom-right relative">
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-z-6 rotate-x-0">
                    1</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-z-6 rotate-y-18">
                    2</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-x-6 rotate-y-90">
                    3</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-x-6 -rotate-y-90">
                    4</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 -translate-y-6 rotate-x-90">
                    5</div>
                <div
                    class="absolute size-12 flex items-center justify-center text-white font-bold border bg-sky-300/75 translate-y-6 -rotate-x-90">
                    6</div>
            </div>
        </div>
    </section>
    <section class="flex flex-row h-[20rem]">
        <div class="basis-1/4 bg-blue-300">01</div>
        <div class="basis-3/4 bg-blue-600">02</div>
    </section>
    <section class="flex flex-row h-[20rem]">
        <div class="basis-3/4 bg-blue-300">01</div>
        <div class="basis-1/4 bg-blue-600">02</div>

    </section>

    <section class="h-[24rem]">
        <XMapGoogle></XMapGoogle>
    </section>
    <section class="h-[20rem] bg-blue-500">
        <h1 class="text-blue-500">Footer</h1>
    </section>
    <section class="h-[20rem] bg-blue-800">
        <h1 class="text-2xl text-blue-100 p-6">網站地圖</h1>

    </section>
</template>
<script lang="ts" setup>
</script>