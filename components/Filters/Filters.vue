<template>
  <nav class="filters">
    <h2 class="filters__title">{{ $t("filterBy") }}</h2>
    <section class="filters__content">
      <div class="filters-wrapper">
        <!-- <article>
          <h3 class="filter-item__title">{{ $t("propertyName") }}:</h3>
          <RaizcoInput
            :placeholder="$t('propertyName')"
            v-model="inputValue"
            :icon="['fas', 'magnifying-glass']"
            iconColor="#cacac6"
          />
        </article> -->
        <article>
          <h3 class="filter-item__title">{{ $t("propertyType") }}:</h3>
          <RaizcoSelect
            :options="options"
            @change="handleSelect"
            :placeholder="$t('propertyType')"
          />
        </article>
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("businessType") }}:</h3>
          <RaizcoSelect
          multiple
            :options="options2"
            @change="handleSelect"
            v-model="selectValue2"
            :placeholder="$t('businessType')"
          />
        </article>
      </div>
      <hr class="filters-divider" />
      <div class="filters-wrapper">
        <PropertyValueFilter />
      </div>
      <hr class="filters-divider" />
      <div class="filters-wrapper">
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("rooms") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="multipleSelectorValue"
          />
        </article>
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("bathrooms") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="multipleSelectorValue"
          />
        </article>
        <article class="filter-item">
          <h3 class="filter-item__title">{{ $t("garage") }}:</h3>
          <RaizcoMultipleSelector
            :options="multipleSelectorOptions"
            v-model="multipleSelectorValue"
          />
        </article>
        <PropertyAreaFilter />
      </div>
      <hr class="filters-divider" />
      <article>
        <h3 class="filter-item__title">{{ $t("propertyFeatures") }}:</h3>
        <RaizcoSelect
          :options="options"
          @change="handleSelect"
          v-model="selectValue2"
          :placeholder="$t('propertyFeatures')"
        />
      </article>
      <div class="apply-filters">
        <RaizcoButton
          :text="$t('applyFilters')"
          @click="() => console.log('test')"
        />
      </div>
    </section>
  </nav>
</template>

<script setup lang="ts">
import type { RaizcoMultipleSelectorOption } from "../common/RaizcoMultipleSelector/raizcoMultipleSelector.types";
import type { RaizcoSelectOption } from "../common/RaizcoSelect/raizcoSelect.types";

const inputValue = ref<string>("");

const options: RaizcoSelectOption[] = [
  {
    label: "Apartamentos",
    value: "option1",
  },
  {
    label: "Casas",
    value: "option2",
  },
  {
    label: "Locales",
    value: "option3",
  },
  {
    label: "Oficinas",
    value: "option4",
  },

  {
    label: "Bodegas",
    value: "option5",
  },
  {
    label: "Lotes",
    value: "option6",
  },
  {
    label: "Fincas",
    value: "option7",
  },
  {
    label: "Hoteles",
    value: "option8",
  },
  {
    label: "Edificios",
    value: "option9",
  },
  {
    label: "Consultorios",
    value: "option10",
  },
];

const options2: RaizcoSelectOption[] = [
  {
    label: "Venta",
    value: "venta",
  },
  {
    label: "Arriendo",
    value: "arriendo",
  },
  {
    label: "Permuta",
    value: "permuta",
  },
  {
    label: "Proyecto",
    value: "proyecto",
  }
];

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

const selectValue = ref<RaizcoSelectOption>(options[1]);
const selectValue2 = ref<RaizcoSelectOption[]>([options2[0], options2[1]]);

const multipleSelectorValue = ref<RaizcoMultipleSelectorOption[]>([
  multipleSelectorOptions[0],
  multipleSelectorOptions[1],
]);

function handleSelect(data: RaizcoSelectOption) {
  console.log(data);
}
</script>

<style lang="scss" scoped>
.filters {
  width: 275px;
  padding: 20px 20px;
  background-color: $grey-color;
  border-radius: 2px;
  &__title {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0px 0px 15px 0px;
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
