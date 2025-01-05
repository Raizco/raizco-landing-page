<template>
  <nav class="filters-bar">
    <ContentWrapper>
      <section class="filters-bar__content">
        <RaizcoInput
          :placeholder="$t('searchByKeyWord')"
          :icon="['fas', 'magnifying-glass']"
          iconColor="#f6b800"
        />
        <RaizcoButton
          class="filters-button"
          :text="$t('filters')"
          :prefixIcon="['fas', 'sliders']"
          @click="onClickFiltersButton"
        />
      </section>
    </ContentWrapper>
    <RaizcoModal v-model="filtersMovalVisibility">
      <div class="filters-wrapper">
        <FiltersTitle />
        <RaizcoDivider />
      </div>
      <Filters />
    </RaizcoModal>
  </nav>
</template>

<script setup lang="ts">
import type { RaizcoSelectOption } from "../common/RaizcoSelect/raizcoSelect.types";

const filtersMovalVisibility = ref<boolean>(false);

function onClickFiltersButton() {
  filtersMovalVisibility.value = !filtersMovalVisibility.value;
}

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

.filters-wrapper {
  padding: 20px 20px 0px 20px;
  background-color: $grey-color;
}

:deep(.filters-button) {
  @include respond-to(desktop) {
    visibility: hidden;
  }
  @include respond-to(mobile) {
    visibility: visible;
  }
}

:deep(.business-select) {
  width: 200px;
}

:deep(.management-select) {
  width: 150px;
}
</style>
