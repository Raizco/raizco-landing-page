<template>
  <div class="raizco-input">
    <div v-if="label" class="raizco-input-label">
      <label class="raizco-input-label__label" htmlFor="{inputId}">
        {{ label }}
      </label>
    </div>
    <div class="raizco-input-container" :class="{ 'raizco-input-container--disabled': disabled }">
      <span v-if="icon" class="raizco-input__icon">
        <font-awesome
          :icon="icon"
          :style="{ color: iconColor }"
        />
      </span>
      <ClientOnly>
        <input
          class="raizco-input-container__input"
          :class="{ 'raizco-input-container--disabled': disabled }"
          :id="inputId"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          v-model="value"
          @change="onChange"
          @input="onInput"
          @blur="onBlur"
          @focus="onFocus"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RaizcoInputProps } from "./raizcoInput.types";

const emits = defineEmits([
  "update:modelValue",
  "change",
  "input",
  "blur",
  "focus",
]);
const props = defineProps<RaizcoInputProps>();

const value = ref<string>(props.modelValue || "");

const inputId = props.id || generateComponentId({ prefix: "input" });

function onChange(event: Event) {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emits("update:modelValue", target.value);
  emits("change", target.value);
}

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  value.value = target.value;
  emits("input", target.value);
}

function onBlur(event: Event) {
  const target = event.target as HTMLInputElement;
  emits("blur", target.value);
}

function onFocus(event: Event) {
  const target = event.target as HTMLInputElement;
  emits("focus", target.value);
}
</script>

<style lang="scss" scoped>
.raizco-input {
  width: 100%;
  max-width: $input-width;
}

.raizco-input-label {
  &__label {
    font-size: $label-font-size;
    font-weight: 600;
  }
}

.raizco-input-container {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: $input-height;
  margin-top: 5px;
  box-shadow: $input-box-shadow;
  padding: $input-inner-padding;
  border-radius: $input-border-radius;
  background-color: #ffffff;
  transition: all 0.2s ease;
  &:focus-within {
    box-shadow: $input-box-shadow-focus;
  }
  &__input {
    width: 100%;
    height: 100%;
    font-size: $input-font-size;
    font-family: "Montserrat", sans-serif;
    outline: none;
    border: none;
    padding: 0px;
    border-radius: $input-border-radius;
    color: $input-font-color;
    &::placeholder {
      color: $input-placeholder-color;
      text-overflow: ellipsis;
      
    }
  }
  &--disabled{
    @include disabled-input;
  }
}
</style>
