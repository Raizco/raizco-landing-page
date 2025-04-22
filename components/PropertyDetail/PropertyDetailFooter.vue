<template>
  <div
    class="property-detail-footer"
    :class="{
      'property-detail-footer--show': show,
    }"
  >
    <ContentWrapper>
      <article class="property-detail-footer__name">
        <h1>{{ property.name }}</h1>
      </article>
      <article class="property-detail-footer__location">
        <span>{{ propertyLocation }}</span>
      </article>
      <article class="property-detail-footer-value">
        <div>
          <p class="property-detail-footer-value__value">{{ propertyValue }}</p>
          <p class="property-detail-footer-value__text">
            Valor de {{ propertyManagement }}
          </p>
        </div>
        <div class="contact-us">
          <RequestInfoButton secondaryButton />
        </div>
      </article>
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import { usePropertyValueWithManagementText } from "~/composables/usePropertyValueWithManagementText";
import type { PropertyType } from "~/types/property/property.type";

const props = defineProps({
  property: {
    type: Object as () => PropertyType,
    required: true,
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const { propertyValue, propertyManagement } =
  usePropertyValueWithManagementText(props.property);

const propertyLocation = computed(() => {
  return props.property.location?.cityName.toUpperCase() || "";
});
</script>

<style lang="scss" scoped>
@use "sass:color";

.property-detail-footer {
  position: fixed;
  // Z-index muy alto porque el mapa también tiene un valor elevado
  z-index: 1001;
  bottom: -100px;
  padding: 5px 10px 0px 10px;
  width: 100%;
  height: 100px;
  color: color.scale($font-color, $lightness: 5%);
  background-color: color.scale($primary-color, $lightness: 40%);
  transition: bottom 0.3s ease-in-out;
  &--show {
    bottom: 0px;
  }
  &__name {
    @include text-ellipsis;
    font-size: 18px;
    font-weight: 700;
  }
  &__location {
    display: flex;
    font-size: 12px;
    gap: 5px;
    align-items: center;
    font-weight: 600;
  }
  &__location-icon {
    font-size: 18px;
    color: $primary-color;
  }
}

.property-detail-footer-value {
  position: relative;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 100px;
  &__text {
    margin: 0px;
    font-size: 11px;
  }
  &__value {
    margin: 0px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1;
  }
}

.contact-us {
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 0px;
  bottom: 5px;
  //   transform: translateY(-50%);
  font-weight: 500;
}
</style>
