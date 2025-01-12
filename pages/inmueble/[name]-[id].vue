<template>
  <div>
    <PropertyDetailFooter
      :show="!isVisible && $viewport.isLessOrEquals('tablet')"
    />
    <ContentWrapper>
      <article class="property-detail-page">
        <div v-if="dataExists">
          <PropertyDetailHeader ref="elementRef" />
          <PropertyImages
            v-if="dataExists"
            :images="propertyDetailStore.data.images"
          ></PropertyImages>
          <PropertyDetailMainFeatures />
          <section class="property-information">
            <div class="property-information-wrapper">
              <section
                class="property-detail-section property-detail-section--description"
              >
                <h2 class="property-detail-section__title">
                  {{ $t("description") }}
                </h2>
                <div v-html="propertyDetailStore.data.description"></div>
              </section>
              <PropertyDetailFeatures />
            </div>
            <div v-if="$viewport.isGreaterOrEquals('desktop')">
              <hr class="vertical-divider" />
              <PropertyDetailContact />
            </div>
          </section>
          <RaizcoDivider />
          <PropertyDetailLocation />
        </div>
      </article>
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";
import { useIsVisible } from "~/composables/useIsVisible";

const route = useRoute();
const { $viewport } = useNuxtApp();
const propertyId = route.params.id;
const elementRef = ref<HTMLElement | null>(null);
const { isVisible, observeElement } = useIsVisible();

const propertyDetailStore = usePropertyDetailStore();

propertyDetailStore.getPropertyById(propertyId as string);

const dataExists = computed(() => {
  return Object.keys(propertyDetailStore.data).length > 0;
});

onMounted(() => {
  if (elementRef) {
    observeElement(elementRef.value);
  }
});

onUnmounted(() => {
  propertyDetailStore.resetData();
});
</script>

<style lang="scss" scoped>
.property-detail-page {
  @include main-content-wrapper;
}

.property-detail-section {
  @include property-detail-section;
  &--description {
    margin-top: 0px;
    margin-bottom: 20px;
  }
}

.property-information {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.property-information-wrapper {
  width: 100%;
}

.vertical-divider {
  border: none;
  border-left: 1px solid $divider-color;
  height: auto;
  width: 1px;
}
</style>
