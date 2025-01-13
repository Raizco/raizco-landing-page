<template>
  <section class="property-detail-address property-detail-address--inner">
    <h2 class="property-detail-address__title">
      {{ $t("address") }}
    </h2>
    <div>{{ propertyDetailStore.data.location.address }}</div>
  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();
</script>

<style lang="scss" scoped>
.property-detail-address {
  @include property-detail-section;
  &--inner {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}
</style>
