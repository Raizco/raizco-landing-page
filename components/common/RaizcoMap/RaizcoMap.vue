<template>
  <div class="raizco-map">
    <client-only>
      <LMap
        ref="map"
        :zoom="zoom || 15"
        :center="[latitude || 6.244747, longitude || -75.57482]"
        :use-global-leaflet="false"
      >
        <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          layer-type="base"
          name="OpenStreetMap"
        />
        <LMarker
          v-if="latitude && longitude"
          :lat-lng="[latitude, longitude]"
          :draggable="draggableMarker"
        >
          <LIcon :icon-url="icon || DefaultIcon" :icon-size="[32, 55]"></LIcon>
        </LMarker>
      </LMap>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import type { RaizcoMapProps } from "./raizcoMap.types";
import DefaultIcon from "../../../assets/images/raizco-marker.png";

defineProps<RaizcoMapProps>();
</script>

<style lang="scss" scoped>
.raizco-map {
  width: 100%;
  height: 500px;
}
</style>
