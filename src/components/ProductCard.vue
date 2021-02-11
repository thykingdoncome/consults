<template>
    <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden product-card cursor-pointer">
        <div class="flex items-end justify-end h-56 w-full pt-6 relative">
            <figure class="overflow-hidden h-full w-full">
                <img :src="imgSrc" :alt="productName" class="h-full w-full transition duration-400 ease-in-out">
            </figure>
        </div>
        <div class="px-5 py-3">
            <h3 class="text-gray-700 uppercase">{{ productName }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        imgSrc: String,
        productName: String
    }
}
</script>

<style>

</style>