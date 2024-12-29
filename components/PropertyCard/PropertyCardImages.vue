<template>
  <article>
    <figure
      v-for="(image, index) in images"
      :key="index"
      class="property-card-images"
    >
      <img :src="image" alt="" />
    </figure>
  </article>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const images: string[] = [
  "https://www.kasandbox.org/programming-images/avatars/leaf-blue.png",
  "https://www.kasandbox.org/programming-images/avatars/leaf-green.png",
  "https://www.kasandbox.org/programming-images/avatars/leaf-red.png",
  "https://www.kasandbox.org/programming-images/avatars/leaf-grey.png",
  "https://www.kasandbox.org/programming-images/avatars/leaf-orange.png",
  "https://www.kasandbox.org/programming-images/avatars/leaf-yellow.png",
];
</script>

<style lang="scss" scoped>
.property-card-images {
  margin: 0px;
  width: 100%;
  & img {
    width: 100%;
  }
}
</style>
