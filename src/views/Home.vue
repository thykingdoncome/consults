<template>
  <div
    class="bg-gray-100 dark:bg-gray-900 dark:text-white text-gray-600 h-screen flex overflow-hidden text-sm"
  >
    <div class="flex-grow overflow-hidden h-full flex flex-col">
      <div class="flex-grow flex overflow-x-hidden">
        <div class="flex-grow bg-white dark:bg-gray-900 overflow-y-auto">
          <Navbar />

          <div class="sm:p-7 p-4 container my-12 mx-auto px-4 md:px-12">
            <agile
              :nav-buttons="true"
              :autoplay-speed="5000"
              :speed="2500"
              fade="fade"
              pause-on-hover="pause-on-hover"
              pause-on-dots-hover="pause-on-dots-hover"
              autoplay="autoplay"
              :dots="true"
            >
              <LegendItem
                imgSrc="https://images.pexels.com/photos/5556305/pexels-photo-5556305.jpeg"
                offer="This is Offer Two"
              />
              <LegendItem
                imgSrc="https://res.cloudinary.com/thykingdoncome/image/upload/v1613049968/pexels-photo-5625061_ul2apu.jpg"
                offer="This is Offer Three"
              />
              <LegendItem
                imgSrc="https://res.cloudinary.com/thykingdoncome/image/upload/v1613049946/pexels-photo-5926239_p9bxjf.jpg"
                offer="This is Offer Four"
              />
              <LegendItem
                imgSrc="https://res.cloudinary.com/thykingdoncome/image/upload/v1613049959/pexels-photo-5632366_alrieh.jpg"
                offer="This is Offer Five"
              />
              <LegendItem
                imgSrc="https://res.cloudinary.com/thykingdoncome/image/upload/v1613050026/pexels-photo-1086711_tt4syj.jpg"
                offer="This is Offer Six"
              />
            </agile>
          </div>

          <!-- products section start -->

          <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
            <main class="my-8">
              <div class="container mx-auto px-6">
                <h3 class="text-gray-700 text-2xl font-medium">
                  PRODUCT MERCHANTS
                </h3>

                <div
                  class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
                >
                  <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :imgSrc="product.imageSrc"
                    :productName="product.name"
                  />
                </div>
              </div>

              <div class="container mx-auto px-6 mt-20">
                <h3 class="text-gray-700 text-2xl font-medium">
                  SERVICE MERCHANTS
                </h3>

                <div
                  class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"
                >
                  <ProductCard
                    v-for="service in services"
                    :key="service.id"
                    :imgSrc="service.imageSrc"
                    :productName="service.name"
                  />
                </div>
              </div>
            </main>

            <!-- footer -->
            <Footer />
            <!-- footer -->
          </div>

          <!-- product section end -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import LegendItem from "../components/LegendItem.vue";
import ProductCard from "../components/ProductCard.vue";
import Footer from "../components/Footer.vue";

import {
  productMerchants,
  serviceMerchants,
} from "../utils/data/productsCategory.js";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    LegendItem,
    ProductCard,
  },
  data() {
    return {
      products: [...productMerchants],
      services: [...serviceMerchants],
    };
  },
  props: {
    
  },
  mounted() {
    console.log(this.products, "prrrrrooo");
    console.log(this.services, "serrvvvv");
  },
};
</script>

<style scoped></style>
