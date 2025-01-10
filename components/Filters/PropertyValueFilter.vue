<template>
  <article class="filter-item">
    <h3 class="filter-item__title">{{ $t("propertyValue") }}:</h3>
    <div class="filter-item__property-value">
      <RaizcoInput
        @change="onValueFromChange"
        :placeholder="$t('priceFrom')"
        type="currency"
        v-model="propertiesStore.filters.valueFrom"
      />
      <RaizcoInput
        @change="onValueToChange"
        :placeholder="$t('priceTo')"
        type="currency"
        v-model="propertiesStore.filters.valueTo"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { usePropertiesStore } from "~/store/properties";

const propertiesStore = usePropertiesStore();

function onValueFromChange(value: string) {
  propertiesStore.filters.valueFrom = value;
}
function onValueToChange(value: string) {
  propertiesStore.filters.valueTo = value;
}
</script>

<style lang="scss" scoped>
.filter-item {
  @include filter-item;
  &__property-value {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
