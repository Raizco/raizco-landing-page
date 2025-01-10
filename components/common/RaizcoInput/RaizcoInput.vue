<template>
  <div class="raizco-input">
    <div v-if="label" class="raizco-input-label">
      <label class="raizco-input-label__label" htmlFor="{inputId}">
        {{ label }}
      </label>
    </div>
    <div
      class="raizco-input-container"
      :class="{ 'raizco-input-container--disabled': disabled }"
    >
      <span v-if="icon" class="raizco-input__icon">
        <font-awesome :icon="icon" :style="{ color: iconColor }" />
      </span>
      <ClientOnly>
        <input
          v-if="type === 'text' || type === 'number'"
          class="raizco-input-container__input"
          :class="{ 'raizco-input-container--disabled': disabled }"
          :id="inputId"
          :placeholder="placeholder"
          :disabled="disabled"
          :type="type"
          min="0"
          v-model="value"
          @change="onChange"
          @input="onInput"
          @blur="onBlur"
          @focus="onFocus"
          @keyup.enter="onPressEnter"
          ref="inputRef"
        />
        <vue-number
          v-else
          class="raizco-input-container__input"
          :class="{ 'raizco-input-container--disabled': disabled }"
          v-model="value"
          v-bind="inputOptions"
          :id="inputId"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="onChange"
          @input="onInput"
          @blur="onBlur"
          @focus="onFocus"
          @keyup.enter="onPressEnter"
        ></vue-number>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  RaizcoInputFormatter,
  RaizcoInputProps,
} from "./raizcoInput.types";
import { component as VueNumber } from "@coders-tm/vue-number-format";

const emits = defineEmits([
  "update:modelValue",
  "change",
  "input",
  "blur",
  "focus",
  "enter",
]);

const props = withDefaults(defineProps<RaizcoInputProps>(), {
  type: "text",
});

const inputId = props.id || generateComponentId({ prefix: "input" });

const value = ref<string>(props.modelValue || "");

const inputFormatOptions: RaizcoInputFormatter = {
  currency: {
    separator: ".",
    prefix: "$ ",
    masked: false,
  },
  thousands: {
    separator: ".",
    masked: false,
  },
};

const inputOptions = ref(
  inputFormatOptions[props.type as keyof RaizcoInputFormatter]
);

function onChange(event: Event) {
  emits("update:modelValue", value.value);
  emits("change", value.value);
}

function onInput(event: Event) {
  // const target = event.target as HTMLInputElement;
  value.value = value.value;
  emits("input", value.value);
}

function onBlur(event: Event) {
  emits("blur", value.value);
}

function onFocus(event: Event) {
  emits("focus", value.value);
}

function onPressEnter(event: Event) {
  emits("enter", value.value);
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
    outline: none !important;
    border: none;
    padding: 0px;
    border-radius: $input-border-radius;
    color: $input-font-color;
    &::placeholder {
      color: $input-placeholder-color;
      text-overflow: ellipsis;
      font-size: $input-font-size;
    }
  }
  &--disabled {
    @include disabled-input;
  }
}
</style>
