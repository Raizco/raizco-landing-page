<template>
  <ClientOnly>
    <div
      class="raizco-select"
      :class="props.class"
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
        <label
          v-if="multiple"
          class="raizco-select__label"
          :class="{ placeholder: !selectedMultiple }"
        >
          {{ selectedMultipleLabel }}
        </label>
        <label
          v-else
          class="raizco-select__label"
          :class="{ placeholder: !selected }"
        >
          {{ selectedLabel }}
        </label>
      </div>
      <div class="raizco-select-items" :class="{ 'select-hide': !open }">
        <div v-for="(option, i) of options" :key="i">
          <div class="raizco-select-items__item" v-if="multiple">
            <RaizcoCheckbox
              :label="option.label"
              :checked="
                selectedMultiple.some((item) => item.value == option.value)
              "
              @change="onSelectMultipleOptions(option)"
            />
          </div>
          <div
            class="raizco-select-items__item"
            v-else
            @click="onSelectOption(option)"
          >
            <span>
              {{ option.label }}
            </span>
          </div>
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

const selectedLabel = computed(() => {
  return selected.value?.label || props.placeholder || "Seleccionar";
});

const selectedMultipleLabel = computed(() => {
  return selectedMultiple.value.map((item) => item.label).join(", ");
});

const inputId = props.id || generateComponentId({ prefix: "select" });
const selected = ref<RaizcoSelectOption | undefined>(setDefaultValue());
const selectedMultiple = ref<RaizcoSelectOption[]>(setDefaultMultipleValue());
const open = ref<boolean>(false);

function onSelectOption(option: RaizcoSelectOption) {
  open.value = !open.value;
  if (Array.isArray(selected.value)) {
    return;
  }
  if (option.value === selected.value?.value) {
    return;
  }
  selected.value = option;
  emits("update:modelValue", option);
  emits("change", option);
}

function onSelectMultipleOptions(option: RaizcoSelectOption): void {
  if (selectedMultiple.value?.some((item) => item.value === option.value)) {
    selectedMultiple.value = selectedMultiple.value.filter(
      (item) => item.value !== option.value
    );
  } else {
    selectedMultiple.value = [...selectedMultiple.value, option];
  }
  emits("update:modelValue", selectedMultiple.value);
  emits("change", selectedMultiple.value);
}

function setDefaultMultipleValue() {
  if (!props.modelValue) {
    return [];
  }
  return props.modelValue as RaizcoSelectOption[];
}

function setDefaultValue(): RaizcoSelectOption | undefined {
  let defaultValue: RaizcoSelectOption | undefined = undefined;
  if (!props.modelValue) {
    return defaultValue;
  }
  defaultValue = props.options.find(
    (option) => option.value === (props.modelValue as RaizcoSelectOption).value
  );
  return defaultValue;
}
</script>

<style lang="scss" scoped>
.raizco-select {
  margin-top: 5px;
  position: relative;
  width: 100%;
  max-width: $input-width;
  height: $input-height;
  text-align: left;
  line-height: $input-height;
  font-size: $input-font-size;
  box-shadow: $input-box-shadow;
  outline: none;
  border-radius: $input-border-radius;
  color: $input-font-color;
  &__label {
    max-width: $input-width;
    padding-right: 1em;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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
  max-height: 160px;
  overflow-y: scroll;
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
    padding: 3px 5px;
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

.placeholder {
  color: $input-placeholder-color;
}
</style>
