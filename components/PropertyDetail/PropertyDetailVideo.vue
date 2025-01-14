<template>
  <section class="property-detail-video">
    <h2 class="property-detail-video__title">
      {{ $t("video") }}
    </h2>
    <video :src="propertyDetailStore.data.generalData.videoUrl"></video>

  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();
</script>

<style lang="scss" scoped>
.property-detail-video {
  @include property-detail-section;
}
</style>
