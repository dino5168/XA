<template>
    <header class="sticky top-0 left-0 w-full bg-green-700 shadow-md z-50">
        <div class="container mx-auto flex items-center py-4 px-6">

            <h1 class="text-2xl font-bold text-white me-auto">
                <a href="index.html" class="text-blue-600">
                    <span class="font-bold text-white">恐龍</span>科技股份有限公司
                </a>
            </h1>

            <nav class="ml-auto">
                <ul class="flex space-x-6">
                    <li><a href="/ui/alert" class="text-gray-100 hover:text-blue-600">首頁</a></li>

                    <li class="relative">
                        <a href="#" class="text-gray-100 hover:text-blue-600 flex items-center">
                            <span>關於我們</span>
                            <i class="bi bi-chevron-down ml-2"></i>
                        </a>
                        <ul class="absolute left-0 mt-2 bg-white shadow-lg rounded-md hidden group-hover:block">
                            <li><a href="/custom" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">關於我們
                                    Us</a></li>
                            <li><a href="team.html" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">公司團隊</a>
                            </li>
                            <li><a href="testimonials.html"
                                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Testimonials</a></li>
                            <li class="relative">
                                <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center">
                                    <span>Deep Drop Down</span>
                                    <i class="bi bi-chevron-right ml-2"></i>
                                </a>
                                <ul class="absolute left-0 mt-2 bg-white shadow-lg rounded-md hidden">
                                    <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Deep Drop
                                            Down 1</a></li>
                                    <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Deep Drop
                                            Down 2</a></li>
                                    <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Deep Drop
                                            Down 3</a></li>
                                    <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Deep Drop
                                            Down 4</a></li>
                                    <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Deep Drop
                                            Down 5</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li><a href="services.html"
                            class="text-gray-100 underline decoration-indigo-200 underline-offset-4 hover:text-blue-600">Services</a>
                    </li>
                    <li><a href="portfolio.html" class="text-gray-100 hover:text-blue-600">資料夾</a></li>
                    <li><a href="pricing.html" class="text-gray-100 hover:text-blue-600">產品價格</a></li>
                    <li><a href="blog.html" class="text-gray-100 hover:text-blue-600">部落格</a></li>
                    <li><a href="/custom" class="text-gray-100 hover:text-blue-600">聯絡我們</a></li>
                </ul>
            </nav>

            <div class="ml-4 flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-blue-600">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-blue-600">
                    <i class="bi bi-facebook"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-blue-600">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-blue-600">
                    <i class="bi bi-linkedin"></i>
                </a>
            </div>

        </div>
    </header>
    <XGotoTop></XGotoTop>
    <slot></slot>
</template>