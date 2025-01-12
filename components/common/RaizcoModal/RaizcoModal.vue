<template>
  <UModal v-model="modalVisibility" :fullscreen="fullscreen">
    <header class="raizco-modal-header" v-if="header">
      <div class="raizco-modal-header__content-wrapper">
        <ClientOnly>
          <h2 class="raizco-modal-header__title" v-if="title">{{ title }}</h2>
          <button
            class="raizco-modal-header__close-button"
            v-if="closeButton"
            @click="modalVisibility = !modalVisibility"
          >
            <font-awesome :icon="['fas', 'xmark']" />
          </button>
        </ClientOnly>
      </div>
      <RaizcoDivider v-if="header" />
    </header>
    <slot>
    </slot>
  </UModal>
</template>

<script setup lang="ts">
import type { RaizcoModalProps } from "./raizcoModal.types";

const emits = defineEmits(["update:modelValue", "closed"]);
const props = defineProps<RaizcoModalProps>();

const modalVisibility = ref<boolean>(false);

watch(
  () => props.modelValue,
  () => {
    modalVisibility.value = props.modelValue;
  }
);

watch(
  () => modalVisibility.value,
  () => {
    emits("update:modelValue", modalVisibility.value);
  }
);
</script>

<style lang="scss" scoped>
.raizco-modal-header {
  padding: 15px 20px 0px 20px;
  background-color: $grey-color;
  &__content-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
  }
  &__title {
    font-size: 1.3rem;
    font-weight: 600;
  }
  &__close-button {
    position: absolute;
    right: 0px;
    font-size: 20px;
  }
}
</style>
