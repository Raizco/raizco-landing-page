<template>
    <article class="filter-item">
      <h3 class="filter-item__title">{{ $t("propertyArea") }}:</h3>
      <div class="filter-item__property-area">
        <RaizcoInput :placeholder="$t('areaFrom')" />
        <RaizcoInput :placeholder="$t('areaTo')" />
      </div>
    </article>
  </template>
  
  <script setup lang="ts"></script>
  
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
  