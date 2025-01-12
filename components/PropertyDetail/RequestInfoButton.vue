<template>
  <RaizcoButton
    @click="onClickButton"
    :text="$t('contactConsultant')"
    :secondary="secondaryButton"
  />
</template>

<script setup lang="ts">
defineProps({
  secondaryButton: Boolean,
});

function onClickButton() {
  const url = encodeURIComponent(window.location.href);
  requestInfoAboutProperty(url);
}
</script>