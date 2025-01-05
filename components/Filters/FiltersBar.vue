<template>
  <nav class="filters-bar">
    <ContentWrapper>
      <section class="filters-bar__content">
        <RaizcoInput
          :placeholder="$t('searchByKeyWord')"
          :icon="['fas', 'magnifying-glass']"
          iconColor="#f6b800"
        />
        <template class="filters-button">
          <RaizcoButton
          text="Filtros"
          :prefixIcon="['fas', 'sliders']"
          :label="$t('management')"
          color="primary"
          />
        </template>
      </section>
    </ContentWrapper>
  </nav>
</template>

<script setup lang="ts">
import type { RaizcoSelectOption } from "../common/RaizcoSelect/raizcoSelect.types";

function handleSelect(data: RaizcoSelectOption) {
  console.log(data);
}
</script>

<style lang="scss" scoped>
.filters-bar {
  padding: 20px 0px;
  box-shadow: 0 0 5px #78787862;
  &__content {
    display: flex;
    align-items: baseline;
    gap: 20px;
  }
}

.filters-button {
  display: none;
  @include respond-to(mobile) {
    display: block;
  }
}

:deep(.business-select) {
  width: 200px;
}

:deep(.management-select) {
  width: 150px;
}
</style>
