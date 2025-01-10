<template>
  <article class="property-images">
    <ClientOnly>
      <RaizcoCarousel :images="images" />
    </ClientOnly>
  </article>
</template>

<script lang="ts" setup>
import type { ImageType } from "~/types/property/images.type";

const images: ImageType[] = [
  {
    url: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/01/30/19/46/school-6982073_960_720.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/12/17/09/47/door-8453898_1280.jpg",
  },
];
</script>

<style lang="scss" scoped>
.property-images {
  margin: 0px;
  width: 100%;
  & img {
    width: 100%;
  }
}

:deep(.carousel__viewport) {
  border-radius: $property-card-border-radius $property-card-border-radius 0 0;
  & img {
    height: 400px;
    width: 100%;
    object-fit: contain;
  }
}
</style>
