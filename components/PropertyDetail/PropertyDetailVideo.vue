<template>
  <section class="property-detail-video">
    <h2 class="property-detail-video__title">
      {{ $t("video") }}
    </h2>
    <div
      class="property-detail-video__url-video"
      v-if="propertyDetailStore.data.generalData.videoUrl"
    >
      <iframe
        :src="formatVideoUrl(propertyDetailStore.data.generalData.videoUrl)"
        name="Vídeo propiedad"
        title="Video propiedad"
        class="property-detail-video__iframe"
      />
    </div>
    <RaizcoDivider v-if="propertyDetailStore.data.generalData?.video360Url" />
    <div
      class="property-detail-video__360-video"
      v-if="propertyDetailStore.data.generalData?.video360Url"
    >
      <iframe
        :src="formatVideoUrl(propertyDetailStore.data.generalData.video360Url)"
        name="Vídeo propiedad"
        title="Video propiedad"
        class="property-detail-video__iframe"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();

function formatVideoUrl(url: string): string {
  if (url.match("youtu.be") && !url.match("embed")) {
    const id = url.split("/")[3];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.match("shorts")) {
    const id = url.split("shorts/")[1];
    return `https://www.youtube.com/embed/${id}`.split("&")[0];
  }
  if (url.match("yout") && !url.match("embed")) {
    const id = url.split("?v=")[1];
    return `https://www.youtube.com/embed/${id}`.split("&")[0];
  }
  return url;
}
</script>

<style lang="scss" scoped>
.property-detail-video {
  @include property-detail-section;
  &__iframe {
    width: 100%;
    min-height: 450px;
  }
}
</style>
