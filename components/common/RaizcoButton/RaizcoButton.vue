<template>
  <ClientOnly>
    <button
      class="raizco-button"
      @click="onClick"
      :id="buttonId"
      :class="bindedClasses"
    >
      <span v-if="prefixIcon" class="raizco-button__icon">
        <font-awesome
          class="property-features__item-icon"
          :icon="prefixIcon"
          :style="{ color: prefixIconColor }"
        />
      </span>
      <span>
        {{ text }}
      </span>
    </button>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { RaizcoButtonProps } from "./raizcoButton.types";

const emits = defineEmits(["click"]);
const props = defineProps<RaizcoButtonProps>();
const buttonId = props.id || generateComponentId({ prefix: "input" });

const bindedClasses = computed(() => {
  return {
    "raizco-button--disabled": props.disabled,
    ...(props.class && { [props.class]: true }),
  };
});

function onClick() {
  emits("click");
}
</script>

<style lang="scss" scoped>
.raizco-button {
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: $button-font-size;
  color: $button-font-color;
  background-color: $button-background-color;
  border-radius: $button-border-radius;
  border: none;
  padding: $button-padding;
  font-family: $app-font;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  &__icon {
    margin-right: 5px;
  }
  &:hover {
    background-color: $button-hover-background-color;
  }
  &--disabled {
    background-color: $button-disabled-background-color;
    cursor: not-allowed;
    &:hover {
      background-color: $button-disabled-background-color;
    }
  }
}
</style>
