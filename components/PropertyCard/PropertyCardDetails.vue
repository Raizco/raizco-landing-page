<template>
  <div class="property-card-details">
    <section class="property-card-header">
      <div class="property-location">
        <font-awesome
          class="property-location__icon"
          :icon="['fas', 'location-pin']"
        />
        <span class="property-location__text">{{
          data.location.cityName.toUpperCase()
        }}</span>
      </div>
    </section>
    <section class="property-value">
      <p class="property-value__text">{{ propertyValue }}</p>
    </section>
    <section class="property-name">
      <p class="property-name__text">
        {{ data.name }}
      </p>
    </section>
    <hr class="divider" />
    <footer>
      <ul class="property-features">
        <li class="property-features__item">
          <font-awesome
            class="property-features__item-icon"
            :icon="['fas', 'ruler-combined']"
          />
          <span>{{ data.generalData.totalArea }} m²</span>
        </li>
        <li class="property-features__item">
          <font-awesome
            class="property-features__item-icon"
            :icon="['fas', 'bed']"
          />
          <span>{{ data.generalData.bedrooms }}</span>
        </li>
        <li class="property-features__item">
          <font-awesome
            class="property-features__item-icon"
            :icon="['fas', 'bath']"
          />
          <span>{{ data.generalData.bathrooms }}</span>
        </li>
        <li class="property-features__item">
          <font-awesome
            class="property-features__item-icon"
            :icon="['fas', 'warehouse']"
          />
          <span>{{ data.generalData.garage }}</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { PropertyCardDetailsProps } from "./propertyCardDetails.type";
import addDotsToValue from "~/utils/addDotsToValue";

const props = defineProps<PropertyCardDetailsProps>();

const propertyValue = computed(() => {
  const value =
    props.data.generalData.saleValue || props.data.generalData.rentValue || 0;
  return `$ ${addDotsToValue(value)}`;
});
</script>

<style lang="scss" scoped>
.property-card-details {
  padding: 0px 10px;
}

.property-location {
  padding: 10px 0px 0px 0px;
  display: flex;
  align-items: center;
  font-size: 13px;
  gap: 5px;
  &__icon {
    color: $primary-color;
  }
  &__text {
    font-weight: 500;
    margin: 0px;
  }
}

.property-value {
  padding: 2px 0px;
  &__text {
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
  }
}

.property-name {
  padding: 0px 0px 8px 0px;
  color: #6d6d6d;
  &__text {
    @include text-ellipsis(2);
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
    min-height: 42px;
  }
}

.divider {
  margin: 0px;
}

.property-features {
  list-style-type: none;
  margin: 0px;
  padding: 9px 0px 5px 0px;
  display: flex;
  gap: 15px;
  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: $font-color;
  }
}
</style>
