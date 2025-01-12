<template>
  <section class="property-detail-location">
    <h2 class="property-detail-location__title">
      {{ $t("location") }}
    </h2>
    <RaizcoMap
      :latitude="propertyDetailStore.data.location.latitude"
      :longitude="propertyDetailStore.data.location.longitude"
    />
  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();
</script>

<style lang="scss" scoped>
.property-detail-location {
  @include property-detail-section;
}
</style>
