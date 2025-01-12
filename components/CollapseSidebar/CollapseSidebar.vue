<template>
    <USlideover v-model="modalVisibility">
      <slot></slot>
    </USlideover>
</template>

<script setup lang="ts">
import { type CollapseSidebarProps } from './collapseSidebar.type';

const emits = defineEmits(["update:modelValue", "closed"]);
const props = defineProps<CollapseSidebarProps>();

const modalVisibility = ref<boolean>(false);

watch(
  () => props.modelValue,
  (newValue) => {
    modalVisibility.value = newValue;
  }
);

watch(
  () => modalVisibility.value,
  () => {
    emits("update:modelValue", modalVisibility.value);
  }
);

</script>

<style scoped>

</style>