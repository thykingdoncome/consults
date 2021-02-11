<template>
  <!-- NAV BAR STARTS -->
        <nav class="bg-green-700 h-16 sticky top-0 z-50">
            <div class="mx-auto px-4">
                <div class="flex justify-between items-center">

                <div class="flex space-x-4">
                    <!-- logo -->
                    <div>
                    <a href="#" class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                        <svg class="w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33">
                                <path fill="white" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd" />
                        </svg>
                        <span class="font-bold text-white ml-1 hidden md:flex">STOP SHOP</span>
                    </a>
                    </div>

                </div>

                <!-- search group-->
                <div class="overflow-hidden flex h-10">


                    <div class="border rounded overflow-hidden flex h-10  mr-3">
                        <input type="text" class="px-4 py-2" placeholder="Search products...">
                        <button class="flex items-center justify-center px-4 border-l">
                        <svg class="h-4 w-4 text-grey-dark" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
                        </button>
                    </div>

                    <div class="relative hidden md:flex items-center space-x-1">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Products</option>
                            <option>Services</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- secondary nav -->
                <div class="hidden md:flex items-center space-x-1">
                    <a href="" class="py-5 px-3 text-white">Login</a>
                    <a href="" class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                </div>

                <!-- mobile button goes here -->
                <div class="md:hidden flex items-center">
                    <button @click="handleNav" class="mobile-menu-button">
                    <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>

                </div>
            </div>

            <!-- mobile menu -->
            <div class="mobile-menu hidden md:hidden bg-gray-700 h-fit p-3">
                <div class="flex flex-col">
                    <a href="" class="block py-2 px-4 mb-2 text-sm text-white hover:bg-yellow-200 hover:text-black rounded transition duration-300">Product Merchants</a>
                      <a href="" class="block py-2 px-4 mb-2 text-sm text-white hover:bg-yellow-200 hover:text-black rounded transition duration-300">Service Merchants</a>
                    <a href="#" class="block py-2 px-4 mb-2 text-sm text-white hover:bg-yellow-200 hover:text-black rounded transition duration-300">Login</a>

                    <a href="" class="py-2 px-3 bg-yellow-400  hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</a>
                </div>
            </div>
        </nav>

        <!-- NAVBAR ENDS -->
</template>

<script>
export default {
    name: 'Navbar',
    methods: {
        handleNav: function(e) {
            e.preventDefault()
            const menu = document.querySelector(".mobile-menu");
            menu.classList.toggle("hidden");
        }
    }
}
</script>

<style>

</style>