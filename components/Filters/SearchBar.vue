<template>
  <nav class="search-bar">
    <ContentWrapper>
      <section class="search-bar__content">
        <RaizcoSelect :options="options" />
        <RaizcoSelect
          :options="options2"
          :default="options[2].value"
          @change="handleSelect"
        />
        <RaizcoInput placeholder="Test" />
      </section>
    </ContentWrapper>
  </nav>
</template>

<script setup lang="ts">
import type { RaizcoSelectOption } from "../Inputs/RaizcoSelect/raizcoSelect.types";

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
];

function handleSelect(data: RaizcoSelectOption) {
  console.log(data);
}
</script>

<style lang="scss" scoped>
.search-bar {
  padding: 20px 0px;
  background-color: $grey-color;
  &__content {
    display: flex;
    gap: 20px;
  }
}
</style>
