<template>
  <div class="app-header">
    <figure class="app-header-logo" @click="goHome">
      <img class="app-header-logo__image" :src="RaizcoLogo" alt="" />
    </figure>
    <ul class="header-options">
      <li
        class="header-options__item"
        :class="{
          'header-options__item--selected': validateChosenOption(
            PropertyManagementType.SALE
          ),
        }"
        @click="onClickOption(PropertyManagementType.SALE)"
      >
        {{ $t("sale").toUpperCase() }}
      </li>
      <li
        class="header-options__item"
        :class="{
          'header-options__item--selected': validateChosenOption(
            PropertyManagementType.RENT
          ),
        }"
        @click="onClickOption(PropertyManagementType.RENT)"
      >
        {{ $t("rent").toUpperCase() }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import RaizcoLogo from "../assets/images/raizco-logo.png";
import { useHeader } from "../../composables/useHeader";
import { PropertyManagementType } from "~/types/property/propertyManagement.type";

const { onClickOption, validateChosenOption, goHome } = useHeader();
</script>

<style lang="scss" scoped>
@include header;

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
