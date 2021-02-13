<template>
  <div class="relative slide flex flex-col items-center justify-between">
      <img :src="imgSrc" class="h-full absolute w-full top-0 bg-black-300 bg-opacity-25"/>

      <div class="legend-description absolute top-0 left-0 right-0 h-full flex flex-col items-center justify-center">
          <div v-if="offer" class="bg-gray-300 p-3">
              <h3 >{{ offer }}</h3>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LegendItem',
    props: {
        imgSrc: String,
        offer: String
    }

}

</script>

<style>

</style>