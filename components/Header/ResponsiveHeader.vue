<template>
  <div class="app-header">
    <figure class="app-header-logo" @click="goHome">
      <img class="app-header-logo__image" :src="RaizcoLogo" alt="raizco-logo" />
    </figure>
    <button class="header-menu-button" @click="openSidebar = true">
      <font-awesome :icon="['fas', 'bars']" />
    </button>
    <CollapseSidebar v-model="openSidebar">
      <div class="header-menu-logo">
        <img
          class="header-menu-logo__image"
          :src="RaizcoLogoVertical"
          alt="raizco-logo"
        />
      </div>
      <ul class="header-options">
        <li
          class="header-options__item"
          :class="{
            'header-options__item--selected': validateChosenOption(
              PropertyManagementType.SALE
            ),
          }"
          @click="
            onClickOption(PropertyManagementType.SALE), (openSidebar = false)
          "
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
          @click="
            onClickOption(PropertyManagementType.RENT), (openSidebar = false)
          "
        >
          {{ $t("rent").toUpperCase() }}
        </li>
      </ul>
    </CollapseSidebar>
  </div>
</template>

<script setup lang="ts">
import RaizcoLogo from "../assets/images/raizco-logo.png";
import RaizcoLogoVertical from "../../assets/images/LOGOB4.png";
import { useHeader } from "../../composables/useHeader";
import { PropertyManagementType } from "~/types/property/propertyManagement.type";

const { onClickOption, validateChosenOption, goHome } = useHeader();

const openSidebar = ref<boolean>(false);
</script>

<style lang="scss" scoped>
@include header;

.app-header {
  display: none;
  justify-content: space-between;
  @include respond-to("mobile") {
    display: flex;
  }
}

.header-menu-logo {
  padding: 70px 70px 20px 70px;
  &__image {
    width: 100%;
  }
}

.header-options {
  font-family: $app-font;
  gap: 30px;
  font-weight: 600;
  font-size: 20px;
  &__item {
    padding: 20px 0px 20px 15px;
    cursor: pointer;
    &:hover {
      background-color: $primary-color;
    }
    &--selected {
      background-color: $primary-color;
      color: #ffffff;
    }
  }
}

.header-menu-button {
  color: #ffffff;
  font-size: 30px;
}
</style>
