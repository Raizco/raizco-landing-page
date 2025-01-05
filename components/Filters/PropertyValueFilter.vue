<template>
  <article class="filter-item">
    <h3 class="filter-item__title">{{ $t("propertyValue") }}:</h3>
    <div class="filter-item__property-value">
      <RaizcoInput :placeholder="$t('priceFrom')" />
      <RaizcoInput :placeholder="$t('priceTo')" />
    </div>
  </article>
</template>

<script setup lang="ts"></script>

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
