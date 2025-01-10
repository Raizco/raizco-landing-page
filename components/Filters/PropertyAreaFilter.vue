<template>
  <article class="filter-item">
    <h3 class="filter-item__title">{{ $t("propertyArea") }}:</h3>
    <div class="filter-item__property-area">
      <RaizcoInput
        @change="onAreaFromChange"
        type="number"
        :placeholder="$t('areaFrom')"
        v-model="propertiesStore.filters.totalAreaFrom"
      />
      <RaizcoInput
        @change="onAreaToChange"
        type="number"
        :placeholder="$t('areaTo')"
        v-model="propertiesStore.filters.totalAreaTo"
      />
    </div>
  </article>
</template>

<script setup lang="ts">
import { usePropertiesStore } from "~/store/properties";

const propertiesStore = usePropertiesStore();

function onAreaFromChange(value: string) {
  propertiesStore.filters.totalAreaFrom = value;
}
function onAreaToChange(value: string) {
  propertiesStore.filters.totalAreaTo = value;
}
</script>

<style lang="scss" scoped>
.filter-item {
  @include filter-item;
  &__property-area {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>
