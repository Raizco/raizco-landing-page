<template>
  <section class="property-main-features">
    <div class="item-group">
      <article class="property-main-features-item">
        <font-awesome
          class="property-main-features-item__icon"
          :icon="['fas', 'ruler-combined']"
        />
        <div>
          <h2 class="property-main-features-item__title">
            {{ $t("builtArea") }}
          </h2>
          <p class="property-main-features-item__text">
            {{ propertyDetailStore.data.generalData.totalArea }} m²
          </p>
        </div>
      </article>
      <article class="property-main-features-item">
        <font-awesome
          class="property-main-features-item__icon"
          :icon="['fas', 'bed']"
        />
        <div>
          <h2 class="property-main-features-item__title">{{ $t("rooms") }}</h2>
          <p class="property-main-features-item__text">
            {{ propertyDetailStore.data.generalData.bedrooms }}
          </p>
        </div>
      </article>
    </div>
    <div class="item-group">
      <article class="property-main-features-item">
        <font-awesome
          class="property-main-features-item__icon"
          :icon="['fas', 'bath']"
        />
        <div>
          <h2 class="property-main-features-item__title">
            {{ $t("bathrooms") }}
          </h2>
          <p class="property-main-features-item__text">
            {{ propertyDetailStore.data.generalData.bathrooms }}
          </p>
        </div>
      </article>
      <article class="property-main-features-item">
        <font-awesome
          class="property-main-features-item__icon"
          :icon="['fas', 'warehouse']"
        />
        <div>
          <h2 class="property-main-features-item__title">{{ $t("garage") }}</h2>
          <p class="property-main-features-item__text">
            {{ propertyDetailStore.data.generalData.garage }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";

const propertyDetailStore = usePropertyDetailStore();
</script>

<style lang="scss" scoped>
.property-main-features {
  margin-top: 10px;
  padding: 18px 18px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  background-color: $grey-color;
  border-radius: 2px;
}

.property-main-features-item {
  display: flex;
  align-items: center;
  &__icon {
    font-size: 22px;
    margin-right: 10px;
    color: #929292d2;
  }
  &__title {
    font-size: 18px;
  }
  &__text {
    font-weight: 700;
    text-align: center;
  }
}

.item-group {
  display: flex;
  gap: 35px;
  @media (width < 720px) {
    display: grid;
  }
}
</style>
