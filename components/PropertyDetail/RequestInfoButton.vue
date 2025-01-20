<template>
  <RaizcoButton
    @click="onClickButton"
    :text="$t('contactConsultant')"
    :secondary="secondaryButton"
  />
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();

defineProps({
  secondaryButton: Boolean,
});

function onClickButton() {
  const url = encodeURIComponent(window.location.href);
  requestInfoAboutProperty(url, propertyDetailStore.data.advisorPhoneNumber);
}
</script>