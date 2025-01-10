<template>
  <nav class="filters-bar">
    <ContentWrapper>
      <section class="filters-bar__content">
        <RaizcoInput
          :placeholder="$t('searchByKeyWord')"
          :icon="['fas', 'magnifying-glass']"
          iconColor="#f6b800"
          @enter="fetchPropertiesByName"
          @change="onChangeInput"
        />
        <RaizcoButton
          class="filters-button"
          :text="$t('filters')"
          :prefixIcon="['fas', 'sliders']"
          @click="onClickFiltersButton"
        />
      </section>
    </ContentWrapper>
    <RaizcoModal
      v-model="filtersMovalVisibility"
      header
      :title="$t('filters')"
      closeButton
    >
      <Filters @filters-applied="filtersMovalVisibility = false"/>
    </RaizcoModal>
  </nav>
</template>

<script setup lang="ts">
import { usePropertiesStore } from "~/store/properties";

const propertiesStore = usePropertiesStore();
const filtersMovalVisibility = ref<boolean>(false);

function onClickFiltersButton() {
  filtersMovalVisibility.value = !filtersMovalVisibility.value;
}

function fetchPropertiesByName(value: string) {
  propertiesStore.filters.propertyName = value;
  propertiesStore.getPropertiesWithFilters();
}

function onChangeInput(value: string) {
  propertiesStore.filters.propertyName = value;
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
