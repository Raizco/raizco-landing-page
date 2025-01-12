<template>
  <ClientOnly>
    <div class="raizco-carousel">
      <Carousel v-bind="carouselConfig" v-model="currentSlide">
        <Slide v-for="(image, index) in images" :key="index">
          <img
            @click="onImageClick(image)"
            class="raizco-carousel__image"
            :src="image.url"
            alt=""
          />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <div v-if="thumbnail && $viewport.isGreaterThan('mobile')">
        <div class="raizco-carousel-divider"></div>
        <Carousel v-bind="thumbnailsConfig" v-model="currentSlide">
          <Slide
            v-for="(image, index) in images"
            :key="index"
            @click="slideTo(index)"
          >
            <div class="raizco-carousel-thumbnail">
              <img
                class="raizco-carousel-thumbnail__image"
                :src="image.url"
                alt=""
              />
            </div>
          </Slide>
        </Carousel>
      </div>
      <RaizcoImageViewer v-model="previewModalVisibility">
        <img :src="clickedImage" alt="">
      </RaizcoImageViewer>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { ImageType } from "~/types/property/images.type";
import type { RaizcoCarouselProps } from "./raizcoCarousel.type";
import { useWindowWidth } from "@/composables/useWindowWidth";

const { $viewport } = useNuxtApp();

defineProps<RaizcoCarouselProps>();

const currentSlide = ref<number>(0);
const clickedImage = ref<string>("");
const { windowWidth } = useWindowWidth();
const previewModalVisibility = ref<boolean>(false);

const thumbnailsToShow = computed(() => {
  if (windowWidth.value < 900) {
    return 4;
  } else if (windowWidth.value < 1100) {
    return 5;
  } else {
    return 6;
  }
});

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
};

const thumbnailsConfig = {
  itemsToShow: thumbnailsToShow,
  wrapAround: true,
  gap: 10,
};

function onImageClick(image: ImageType) {
  clickedImage.value = image.url;
  previewModalVisibility.value = true;
}

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);
</script>

<style lang="scss" scoped>
.raizco-carousel {
  &__image {
    width: 100%;
  }
}

.raizco-carousel-divider {
  height: 5px;
}

.raizco-carousel-thumbnail {
  width: 180px;
  height: 180px;
  &__image {
    width: 100%;
    height: 100%;
  }
}
</style>
