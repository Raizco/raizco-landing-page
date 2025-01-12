<template>
  <section class="property-detail-header">
    <article class="property-detail-header__name">
      <h1>{{ propertyDetailStore.data.name }}</h1>
    </article>
    <article class="property-detail-header__location">
      <font-awesome
        class="property-detail-header__location-icon"
        :icon="['fas', 'location-pin']"
      />
      <span>{{ propertyLocation }}</span>
    </article>
    <PropertyDetailValue />
  </section>
</template>

<script lang="ts" setup>
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();

const propertyLocation = computed(() => {
  return propertyDetailStore.data.location?.cityName.toUpperCase() || "";
});

</script>

<style lang="scss" scoped>
.property-detail-header {
  margin-bottom: 10px;
  &__name {
    font-size: 27px;
    font-weight: 700;
    color: $font-color;
  }
  &__location {
    display: flex;
    font-size: 16px;
    gap: 5px;
    align-items: baseline;
  }
  &__location-icon {
    font-size: 16px;
    color: $primary-color;
  }
}
</style>
