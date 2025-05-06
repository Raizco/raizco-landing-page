<template>
  <ClientOnly>
    <article class="raizco-multiple-selector" :id="selectorId">
      <div
        class="raizco-multiple-selector__item"
        v-for="(item, index) in options"
        :key="index"
        :class="{
          'raizco-multiple-selector__item--selected': itemIsSelected(item),
        }"
        @click="onClick(item)"
      >
        <span class="raizco-multiple-selector__text">
          {{ item.label }}
        </span>
      </div>
    </article>
  </ClientOnly>
</template>

<script setup lang="ts">
import type {
  RaizcoMultipleSelectorOption,
  RaizcoMultipleSelectorProps,
} from "./raizcoMultipleSelector.types";

const emits = defineEmits(["update:modelValue", "change"]);
const props = defineProps<RaizcoMultipleSelectorProps>();

const selectorId = props.id || generateComponentId({ prefix: "input" });
const selectedOptions = ref<RaizcoMultipleSelectorOption[]>(setDefaultValue());

watch(
  () => props.modelValue,
  (newValue) => {
    selectedOptions.value = newValue || setDefaultValue();
  },
  { immediate: true }
);

const itemIsSelected = (item: RaizcoMultipleSelectorOption) =>
  selectedOptions.value?.some((option) => option.value === item.value);

function setDefaultValue(): RaizcoMultipleSelectorOption[] {
  const defaultOptions = props.options.filter((option) =>
    props.modelValue?.some((item) => item.value === option.value)
  );
  return defaultOptions;
}

function onClick(item: RaizcoMultipleSelectorOption) {
  if (selectedOptions.value?.some((option) => option.value === item.value)) {
    selectedOptions.value = selectedOptions.value.filter(
      (option) => option.value !== item.value
    );
  } else {
    selectedOptions.value = [...selectedOptions.value, item];
  }
  emits("update:modelValue", selectedOptions.value);
  emits("change", selectedOptions.value);
}
</script>

<style lang="scss" scoped>
@use "sass:color";

.raizco-multiple-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  &__item {
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 35px;
    height: 35px;
    background-color: color.scale($primary-color, $lightness: 65%);
    border-radius: 5px;
    color: color.scale($primary-color, $lightness: -30%);
    cursor: pointer;
    font-weight: 500;
    user-select: none;
    transition: all 0.2s;
    &--selected {
      color: white;
      background-color: $primary-color;
    }
  }
}
</style>
