<template>
  <ClientOnly>
    <div class="raizco-carousel">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(image, index) in images" :key="index">
          <img class="raizco-carousel__image" :src="image.url" alt="" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { ImageType } from "~/types/property/images.type";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

defineProps({
  images: {
    type: Array as () => ImageType[],
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.raizco-carousel {
  &__image {
    width: 100%;
  }
}
</style>
