<template>
  <ClientOnly>
    <div
      class="raizco-select"
      :tabindex="tabindex"
      @blur="open = false"
      :id="inputId"
      v-click-outside="() => (open = false)"
    >
      <div
        class="raizco-select__selected"
        :class="{ 'raizco-select__open': open }"
        @click="open = !open"
      >
        {{ selected }}
      </div>
      <div class="raizco-select-items" :class="{ 'select-hide': !open }">
        <div
          class="raizco-select-items__item"
          v-for="(option, i) of options"
          :key="i"
          @click="onSelectOption(option)"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import type {
  RaizcoSelectProps,
  RaizcoSelectOption,
} from "./raizcoSelect.types";

const props = defineProps<RaizcoSelectProps>();
const emits = defineEmits(["update:modelValue", "change"]);

const inputId = props.id || generateComponentId({ prefix: "input" });
const innerSelectedOption = ref<RaizcoSelectOption | null>(null);
const selected = ref<string>(setDefaultValue());
const open = ref<boolean>(false);

function onSelectOption(option: RaizcoSelectOption) {
  open.value = !open.value;
  if (option.value === innerSelectedOption.value?.value) {
    return;
  }
  selected.value = option.label;
  innerSelectedOption.value = option;
  emits("update:modelValue", option);
  emits("change", option);
}

function setDefaultValue(): string {
  const findOption = props.options.find(
    (option) => option.value === props.default
  );
  const defaultValue = findOption || props.options[0];
  innerSelectedOption.value = defaultValue;
  emits("update:modelValue", defaultValue);
  return defaultValue.label;
}
</script>

<style lang="scss" scoped>
.raizco-select {
  margin-top: 5px;
  position: relative;
  width: $input-width;
  height: $input-height;
  text-align: left;
  line-height: $input-height;
  font-size: $input-font-size;
  box-shadow: $input-box-shadow;
  outline: none;
  border-radius: $input-border-radius;
  color: $input-font-color;
  &__selected {
    background-color: #ffffff;
    border-radius: $input-border-radius;
    padding: $input-inner-padding;
    cursor: pointer;
    user-select: none;
    &::after {
      position: absolute;
      content: "";
      top: 17px;
      right: 1em;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      border-color: $input-font-color transparent transparent transparent;
    }
  }
  &__open {
    box-shadow: $input-box-shadow-focus;
    border-radius: $input-border-radius;
  }
}

.raizco-select-items {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  margin-top: 1px;
  color: $input-font-color;
  border-radius: 0px 0px 6px 6px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  clip-path: inset(0px -10px -10px -10px);
  &__item {
    color: $input-font-color;
    padding: 0px 5px;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: $grey-color;
    }
  }
}

.select-hide {
  display: none;
}
</style>
