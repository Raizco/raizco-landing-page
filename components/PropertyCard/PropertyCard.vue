<template>
  <ClientOnly>
    <article class="property-card" @click="onClick">
      <article class="property-card-images">
        <img
          class="property-card__image"
          :class="{ 'property-card__image--no-preview': !data.images.length }"
          :src="data.images.length ? data.images[0].url : NoImage"
          alt="image"
          lazy
        />
      </article>
      <PropertyCardDetails :data="data" />
    </article>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { PropertyCardProps } from "./propertyCard.type";
import NoImage from "../../assets/images/no-image.png";

useRouter();

const props = defineProps<PropertyCardProps>();

function onClick() {
    const baseUrl = window.location.origin;
    window.open(`${baseUrl}/inmueble/${removeWhiteSpaces(props.data.name, "_")}-${props.data.id}`, "_blank");
}
</script>

<style lang="scss" scoped>
.property-card {
  height: 370px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  &__image {
    height: 218px;
    width: 100%;
    object-fit: cover;
    &--no-preview {
      object-fit: contain;
    }
  }
}
</style>
