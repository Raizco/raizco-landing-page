<template>
  <UPagination v-model="page" :page-count="pageCount" :total="total" />
</template>

<script setup lang="ts">
import { type RaizcoPaginatorProps } from "./raizcoPaginator.type";

const emits = defineEmits(["update:modelValue", "change"]);

const props = defineProps<RaizcoPaginatorProps>();

const page = ref<number>(props.modelValue || 1);

watch(
  () => props.modelValue,
  (newVal) => {
    page.value = newVal || 1;
  }
);

watch(page, () => {
  emits("update:modelValue", page.value);
  emits("change", page.value);
});
</script>

<style lang="scss" scoped>
:deep(.bg-primary-500) {
  background-color: $primary-color;
}
</style>
