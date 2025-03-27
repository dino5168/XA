<template>
    <!-- ======= Header ======= -->
    <!-- ======= Header ======= -->
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div class="container mx-auto flex items-center py-4 px-6">

            <h1 class="text-2xl font-bold text-gray-900 me-auto">
                <a href="index.html" class="text-blue-600">
                    <span class="font-bold">Com</span>pany
                </a>
            </h1>

            <nav class="ml-auto">
                <ul class="flex space-x-6">
                    <li><a href="index.html" class="text-gray-900 hover:text-blue-600">Home</a></li>

                    <li class="relative">
                        <a href="#" class="text-gray-900 hover:text-blue-600 flex items-center">
                            <span>About</span>
                            <i class="bi bi-chevron-down ml-2"></i>
                        </a>
                        <ul class="absolute left-0 mt-2 bg-white shadow-lg rounded-md hidden group-hover:block">
                            <li><a href="about.html" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">About
                                    Us</a></li>
                            <li><a href="team.html" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Team</a>
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

                    <li><a href="services.html" class="text-gray-900 hover:text-blue-600">Services</a></li>
                    <li><a href="portfolio.html" class="text-gray-900 hover:text-blue-600">Portfolio</a></li>
                    <li><a href="pricing.html" class="text-gray-900 hover:text-blue-600">Pricing</a></li>
                    <li><a href="blog.html" class="text-gray-900 hover:text-blue-600">Blog</a></li>
                    <li><a href="contact.html" class="text-gray-900 hover:text-blue-600">Contact</a></li>
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
        <XMapGoogle></XMapGoogle>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12191.366067559487!2d120.9602446750602!3d24.725643088138195!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1743045089913!5m2!1szh-TW!2stw"
            width="600" height="450" style="border:0;" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

    </header><!-- End Header -->
    <div>
        <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270"
            frameborder="0" style="border:0"></iframe>

    </div>
</template>