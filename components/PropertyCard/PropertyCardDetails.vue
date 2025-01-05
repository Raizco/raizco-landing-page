<template>
  <div class="property-card-details">
    <section class="property-card-header">
      <div class="property-location">
        <font-awesome class="property-location__icon" :icon="['fas', 'location-pin']" />
        <span class="property-location__text">{{ 'Medellín'.toUpperCase() }}</span>
      </div>
    </section>
    <section class="property-value">
      <p class="property-value__text">{{ propertyValue }}</p>
    </section>
    <section class="property-name">
      <p class="property-name__text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores optio
        quas id quibusdam voluptatibus, minima fugiat possimus mollitia ducimus
        beatae, quia quaerat amet cupiditate sed cumque magnam neque nam?
        Tenetur!
      </p>
    </section>
    <hr class="divider" />
    <footer>
      <ul class="property-features">
        <li class="property-features__item">
          <font-awesome class="property-features__item-icon" :icon="['fas', 'ruler-combined']" />
          <span>60 m²</span>
        </li>
        <li class="property-features__item">
          <font-awesome class="property-features__item-icon" :icon="['fas', 'bed']" />
          <span>2</span>
        </li>
        <li class="property-features__item">
          <font-awesome class="property-features__item-icon" :icon="['fas', 'bath']" />
          <span>1</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import addDotsToValue from "~/utils/addDotsToValue";

const propertyValue = computed(() => {
  return `$ ${addDotsToValue(300000000)}`;
});
</script>

<style lang="scss" scoped>
.property-card-details {
  padding: 0px 10px;
}

.property-location {
  padding: 10px 0px 5px 0px;
  display: flex;
  align-items: stretch;
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
  padding: 5px 0px;
  &__text {
    font-size: 20px;
    font-weight: 500;
    margin: 0px;
  }
}

.property-name {
  padding: 5px 0px 7px 0px;
  color: #6d6d6d;
  &__text {
    @include text-ellipsis(2);
    font-size: 14px;
    font-weight: 500;
    margin: 0px;
  }
}

.divider {
  margin: 0px;
}

.property-features {
  list-style-type: none;
  margin: 0px;
  padding: 5px 0px;
  display: flex;
  gap: 15px;
  &__item {
    display: flex;
    align-items: stretch;
    gap: 5px;
    font-size: 14px;
  }
}
</style>
