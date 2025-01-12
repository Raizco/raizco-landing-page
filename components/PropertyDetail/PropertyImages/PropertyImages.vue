<template>
  <article class="property-images">
    <ClientOnly>
      <RaizcoCarousel :images="images" thumbnail/>
    </ClientOnly>
  </article>
</template>

<script lang="ts" setup>
import type { PropertyImagesProps } from "../PropertyImages/propertyImages.type";

defineProps<PropertyImagesProps>()

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
  & .raizco-carousel__image {
    width: 100%;
    height: calc(100vw * 0.55);
    max-height: 780px;
    object-fit: contain;
  }
}
</style>
