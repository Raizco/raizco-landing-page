<template>
  <article class="property-detail-value">
    <p class="property-detail-value__value">{{ propertyValue }}</p>
    <p class="property-detail-value__text">Valor de {{ propertyManagement }}</p>
  </article>
</template>

<script setup lang="ts">
import { usePropertyValueWithManagementText } from "~/composables/usePropertyValueWithManagementText";

const { propertyValue, propertyManagement } =
  usePropertyValueWithManagementText();
</script>

<style lang="scss" scoped>
.property-detail-value {
  margin-top: 5px;
  &__text {
    margin: 0px;
    font-size: 13px;
  }
  &__value {
    margin: 0px;
    color: $primary-color;
    font-size: 25px;
    font-weight: 600;
    line-height: 1;
  }
}
</style>
