<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="raizco-image-viewer"
        v-if="modelValue"
        @click="modalVisibility = !modalVisibility"
      >
        <div class="raizco-image-viewer-content" @click.stop>
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { RaizcoModalProps } from "../common/RaizcoModal/raizcoModal.types";

const emits = defineEmits(["update:modelValue", "closed"]);
const props = defineProps<RaizcoModalProps>();

const modalVisibility = ref<boolean>(false);

watch(
  () => props.modelValue,
  (newValue) => {
    modalVisibility.value = newValue;

    if (newValue) {
      document.body.style.overflow = "hidden";
      document.addEventListener("touchmove", handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("touchmove", handleTouchMove);
    }
  }
);

watch(
  () => modalVisibility.value,
  () => {
    emits("update:modelValue", modalVisibility.value);
  }
);

function handleTouchMove(event: any) {
  if (event.touches.length > 1) {
    return;
  }

  const modalContent = document.querySelector(".raizco-image-viewer-content");
  if (!modalContent || !modalContent.contains(event.target)) {
    event.preventDefault();
  }
}
</script>

<style lang="scss" scoped>
.raizco-image-viewer {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.raizco-image-viewer-content {
  background-color: #ffffff;
  border-radius: 3px;
  width: 95%;
  max-height: 90vh;
  overflow: hidden;
}

.no-scroll {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%; 
}
</style>
