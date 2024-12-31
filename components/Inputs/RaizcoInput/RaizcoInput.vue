<template>
  <div class="raizco-input">
    <div v-if="label" class="raizco-input-label">
      <label class="raizco-input-label__label" htmlFor="{inputId}">
        {{ label }}
      </label>
    </div>
    <div class="raizco-input-container">
      <ClientOnly>
        <input
          class="raizco-input-container__input"
          :id="inputId"
          :type="type"
          :placeholder="placeholder"
        />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RaizcoInputProps } from "./raizcoInput.types";

const props = defineProps<RaizcoInputProps>();

const inputId = props.id || generateComponentId({ prefix: "input" });
</script>

<style lang="scss" scoped>
.raizco-input {
  width: $input-width;
}

.raizco-input-label {
  &__label {
    font-size: $label-font-size;
    font-weight: 600;
  }
}

.raizco-input-container {
  background-color: #ffffff;
  width: 100%;
  height: $input-height;
  margin-top: 5px;
  box-shadow: $input-box-shadow;
  padding: $input-inner-padding;
  border-radius: $input-border-radius;
  transition: all 0.2s ease;
  &:focus-within {
    box-shadow: $input-box-shadow-focus;
  }
  &__input {
    width: 100%;
    height: 100%;
    font-size: $input-font-size;
    outline: none;
    border: none;
    padding: 0px;
    border-radius: $input-border-radius;
    color: $input-font-color;
  }
}
</style>
