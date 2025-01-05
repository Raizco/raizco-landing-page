<template>
  <UModal v-model="modalVisibility">
    <slot>
      <Filters />
    </slot>
  </UModal>
</template>

<script setup lang="ts">
import type { RaizcoModalProps } from "./raizcoModal.types";

const emits = defineEmits(["update:modelValue", "closed"])
const props = defineProps<RaizcoModalProps>();

const modalVisibility = ref<boolean>(false)

watch(() => props.modelValue, () => {
    modalVisibility.value = props.modelValue
})

watch(() => modalVisibility.value, () => {
    emits("update:modelValue", modalVisibility.value)
})


</script>

<style lang="scss" scoped></style>
