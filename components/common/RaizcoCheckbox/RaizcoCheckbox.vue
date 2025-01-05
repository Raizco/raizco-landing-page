<template>
  <div class="raizco-checkbox">
    <ClientOnly>
      <label class="raizco-checkbox__label" :for="checkboxId">
        <input
          type="checkbox"
          :checked="isChecked"
          @change="onChange"
          :id="checkboxId"
        />
        <span>{{ label }}</span>
      </label>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import type { RaizcoCheckboxProps } from "./raizcoCheckbox.types";

const emits = defineEmits(["update:modelValue", "change"]);
const props = defineProps<RaizcoCheckboxProps>();

const checkboxId = props.id || generateComponentId({ prefix: "checkbox" });
const isChecked = ref<boolean>(props.checked || false);

function onChange() {
  isChecked.value = !isChecked.value;
  emits("update:modelValue", isChecked.value);
  emits("change", isChecked.value);
}
</script>

<style lang="scss" scoped>
.raizco-checkbox {
  &__label {
    display: flex;
    align-items: center;
  }
  & input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    margin-right: 5px;
    border: 2px solid $primary-color;
    background-color: #ffffff;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    &:disabled {
      border-color: #c0c0c0;
      background-color: #c0c0c0;
    }
    &:disabled + span {
      color: #c0c0c0;
    }
  }
  & input {
    &:checked {
      background-color: $primary-color;
      position: relative;
      &::before {
        content: "\2713";
        font-size: 1.2em;
        color: #ffffff;
        position: absolute;
        right: 3px;
        top: -2.5px;
      }
    }
  }
}
</style>
