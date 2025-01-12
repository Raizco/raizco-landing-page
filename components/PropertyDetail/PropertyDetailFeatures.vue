<template>
  <section class="property-detail-features">
    <h2 class="property-detail-features__title">
      {{ $t("propertyFeatures") }}
    </h2>
    <h3 class="features-list-title">{{ $t("internal") }}</h3>
    <ul class="features-list">
      <li
        class="features-list__item"
        v-for="(item, index) in internalFeatures"
        :key="index"
      >
        <span>
          {{ item?.label }}
        </span>
      </li>
    </ul>
    <h3 class="features-list-title">{{ $t("external") }}</h3>
    <ul class="features-list">
      <li
        class="features-list__item"
        v-for="(item, index) in externalFeatures"
        :key="index"
      >
        <span>
          {{ item?.label }}
        </span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";
import { usePropertiesStore } from "~/store/properties";
import type { FeatureType } from "~/types/property/features.type";
import type { PicklistItem } from "~/types/property/propertiesPicklists.type";

const propertiesStore = usePropertiesStore();
const propertyDetailStore = usePropertyDetailStore();

const internalFeatures = computed(() => {
  const mappedFeatures = propertyDetailStore.data.features.internalFeatures.map(
    (feature: FeatureType) =>
      propertiesStore.picklists.features.internalFeatures.find(
        (picklist: PicklistItem) => feature.id === picklist.id
      )
  );
  return mappedFeatures;
});

const externalFeatures = computed(() => {
  const mappedFeatures = propertyDetailStore.data.features.externalFeatures.map(
    (feature: FeatureType) =>
      propertiesStore.picklists.features.externalFeatures.find(
        (picklist: PicklistItem) => feature.id === picklist.id
      )
  );
  return mappedFeatures;
});
</script>

<style lang="scss" scoped>
.property-detail-features {
  margin-bottom: 20px;
  @include property-detail-section;
}

.features-list-title {
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
  }

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  text-align: left;
  gap: 0px 10px;
  padding: 0px;
  margin-left: 15px;
  &__item {
    color: #1d1e25;
    position: relative;
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: center;
    &:before {
      content: "•";
      color: $primary-color;
      font-size: 1.5rem;
      margin-right: 5px;
    }
  }
}
</style>
