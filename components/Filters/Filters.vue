<template>
  <nav class="filters">
    <h2 class="filters__title">{{ $t("filters") }}</h2>
    <section class="filters__content">
      <div class="filters-wrapper">
        <article>
          <h3 class="filter-item__title">{{ $t("propertyType") }}:</h3>
          <RaizcoSelect
            :options="propertiesStore.picklists.propertyType"
            multiple
            @change="onPropertyTypeChange"
            v-model="propertiesStore.filters.propertyType"
          />
        </article>
      </div>
      <RaizcoDivider />
      <div class="filters-wrapper">
        <PropertyValueFilter />
      </div>
      <RaizcoDivider />
      <div class="filters-wrapper">
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("rooms") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="propertiesStore.filters.bedrooms"
            @change="onChangeRooms"
          />
        </article>
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("bathrooms") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="propertiesStore.filters.bathrooms"
            @change="onChangeBathrooms"
          />
        </article>
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("garage") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="propertiesStore.filters.garages"
            @change="onChangeGarages"
          />
        </article>
        <PropertyAreaFilter />
      </div>
      <RaizcoDivider />
      <article>
        <h3 class="filter-item__title">{{ $t("internalFeatures") }}:</h3>
        <RaizcoSelect
          multiple
          :options="propertiesStore.picklists.features.internalFeatures"
          :placeholder="$t('internalFeatures')"
          @change="onInternalFeaturesChange"
          v-model="propertiesStore.filters.internalFeatures"
        />
      </article>
      <article>
        <h3 class="filter-item__title">{{ $t("externalFeatures") }}:</h3>
        <RaizcoSelect
          multiple
          :options="propertiesStore.picklists.features.externalFeatures"
          :placeholder="$t('externalFeatures')"
          @change="onExternalFeaturesChange"
          v-model="propertiesStore.filters.externalFeatures"
        />
      </article>
      <div class="apply-filters">
        <RaizcoButton :text="$t('applyFilters')" @click="onApplyFilters" />
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts">
import type { RaizcoMultipleSelectorOption } from "../common/RaizcoMultipleSelector/raizcoMultipleSelector.types";
import type { RaizcoSelectOption } from "../common/RaizcoSelect/raizcoSelect.types";
import { usePropertiesStore } from "~/store/properties";

const emits = defineEmits(["filtersApplied"]);

const propertiesStore = usePropertiesStore();

const multipleSelectorValue = ref<RaizcoMultipleSelectorOption[]>([]);

function onPropertyTypeChange(data: RaizcoSelectOption[]) {
  propertiesStore.filters.propertyType = data;
}

function onInternalFeaturesChange(data: RaizcoSelectOption[]) {
  propertiesStore.filters.internalFeatures = data;
}

function onExternalFeaturesChange(data: RaizcoSelectOption[]) {
  propertiesStore.filters.externalFeatures = data;
}

function onChangeRooms(value: RaizcoMultipleSelectorOption[]) {
  propertiesStore.filters.bedrooms = value;
}

function onChangeBathrooms(value: RaizcoMultipleSelectorOption[]) {
  propertiesStore.filters.bathrooms = value;
}

function onChangeGarages(value: RaizcoMultipleSelectorOption[]) {
  propertiesStore.filters.garages = value;
}

function onApplyFilters() {
  propertiesStore.getPropertiesWithFilters();
  emits("filtersApplied");
}

const multipleSelectorOptions = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },
  {
    label: "4",
    value: "4",
  },
  {
    label: "5+",
    value: "5",
  },
];
</script>

<style lang="scss" scoped>
.filters {
  width: 300px;
  padding: 20px 20px;
  background-color: $grey-color;
  border-radius: 2px;
  @include respond-to(mobile) {
    width: 100%;
    padding-top: 5px;
  }
  &__title {
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0px 0px 15px 0px;
    @include respond-to(mobile) {
      display: none;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

.filters-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-item {
  @include filter-item;
}

.apply-filters {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.filters-divider {
  border-top: 1px solid $divider-color;
  width: 100%;
  margin: 5px 0px 8px 0px;
}
</style>
