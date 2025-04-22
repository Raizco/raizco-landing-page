<template>
  <section class="property-detail-location">
    <h2 class="property-detail-location__title">
      {{ $t("location") }}
    </h2>
    <RaizcoMap
      :latitude="property.location.latitude"
      :longitude="property.location.longitude"
    />
  </section>
</template>

<script setup lang="ts">
import { type PropertyType } from "../../types/property/property.type";

defineProps({
  property: {
    type: Object as () => PropertyType,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.property-detail-location {
  @include property-detail-section;
}
</style>
