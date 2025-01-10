<template>
  <header class="app-header">
    <figure class="app-header-logo" @click="goHome">
      <img class="app-header-logo__image" :src="RaizcoLogo" alt="" />
    </figure>
    <ul class="header-options">
      <li
        class="header-options__item"
        :class="{ 'header-options__item--selected': validateChosenOption(PropertyManagementType.SALE) }"
        @click="onClickOption(PropertyManagementType.SALE)"
      >
        {{ $t("sale").toUpperCase() }}
      </li>
      <li
        class="header-options__item"
        :class="{ 'header-options__item--selected': validateChosenOption(PropertyManagementType.RENT) }"
        @click="onClickOption(PropertyManagementType.RENT)"
      >
        {{ $t("rent").toUpperCase() }}
      </li>
    </ul>
  </header>
</template>

<script lang="ts" setup>
import { PropertyManagementType } from "~/types/property/propertyManagement.type";
import RaizcoLogo from "../assets/images/raizco-logo.png";
import { usePropertiesStore } from "~/store/properties";

const route = useRoute();
const propertiesStore = usePropertiesStore();

function onClickOption(management: PropertyManagementType) {
  propertiesStore.resetFilters();
  propertiesStore.filters.propertyManagement = management;
  navigateTo(`/propiedades/${management}`);
}

function goHome() {
  navigateTo(`/`);
}

function validateChosenOption(value: PropertyManagementType) {
  const currentManagement = route.params.business;
  return (currentManagement as PropertyManagementType) === value;
}
</script>

<style lang="scss" scoped>
.app-header {
  padding: 0px 30px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #000000;
  box-shadow: 0 0 6px #787878c0;
  clip-path: inset(0px 0px -10px 0px);
  user-select: none;
}

.app-header-logo {
  display: flex;
  align-items: center;
  height: 70px;
  width: 150px;
  cursor: pointer;
  &__image {
    object-fit: cover;
  }
}

.header-options {
  padding: 0px 30px 0px 50px;
  display: flex;
  gap: 30px;
  font-weight: 600;
  font-size: 18px;
  color: #ffffff;
  &__item {
    cursor: pointer;
    &--selected {
      color: $primary-color;
    }
  }
}
</style>
