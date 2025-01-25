<template>
  <div>
    <PropertyDetailFooter
      :show="!headerIsVisible && $viewport.isLessOrEquals('tablet')"
    />
    <ContentWrapper>
      <article class="property-detail-page">
        <div v-if="dataExists">
          <PropertyDetailHeader ref="headerRef" />
          <PropertyImages
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
            <div
              class="contact-wrapper"
              v-if="$viewport.isGreaterOrEquals('desktop')"
            >
              <hr class="vertical-divider" />
              <PropertyDetailContact />
            </div>
          </section>
          <PropertyDetailAddress
            v-if="propertyDetailStore.data.location.address"
          />
          <RaizcoDivider />
          <PropertyDetailVideo
            v-if="
              propertyDetailStore.data.generalData.videoUrl ||
              propertyDetailStore.data.generalData.video360Url
            "
          />
          <PropertyDetailLocation />
        </div>
      </article>
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";
import NoImage from "../../assets/images/no-image.png";

const route = useRoute();
const { $viewport } = useNuxtApp();
const propertyId = route.params.id;
const headerRef = ref<HTMLElement | null>(null);
const headerIsVisible = ref<boolean>(false);

const propertyDetailStore = usePropertyDetailStore();

propertyDetailStore.getPropertyById(propertyId as string);

const dataExists = computed(() => {
  return Object.keys(propertyDetailStore.data).length > 0;
});

watchEffect(() => {
  if (dataExists.value) {
    const property = propertyDetailStore.data;

    useSeoMeta({
      title: () => `${property.name} | Raizco`,
      ogTitle: () => `${property.name} | Raizco`,
      description: () => property.description,
      ogDescription: () => property.description,
      ogImage: () => property.images?.[0]?.url || NoImage,
      ogUrl: () => `${window.location.origin}/properties/${propertyId}`,
      twitterTitle: () => `${property.name} | Raizco`,
      twitterDescription: () => property.description,
      twitterImage: () => property.images?.[0]?.url || NoImage,
    });
  }
});

useIntersectionObserver(headerRef, ([entry]) => {
  headerIsVisible.value = entry?.isIntersecting;
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
  border-left: 1px solid $divider-color;
  height: auto;
  width: 1px;
}

.contact-wrapper {
  display: flex;
}
</style>
