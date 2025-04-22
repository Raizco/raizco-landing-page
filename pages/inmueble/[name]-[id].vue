<template>
  <div v-if="propertyDetailStore.data">
    {{ propertyDetailStore.data }}
    <!-- <PropertyDetailFooter
      :show="!headerIsVisible && $viewport.isLessOrEquals('tablet')"
      :property="property"
    /> -->
    <ContentWrapper>
      <article class="property-detail-page">
        <div>
          <PropertyDetailHeader ref="headerRef" :property="property" />
          <!-- <PropertyImages :images="property.images"></PropertyImages> -->
          <!-- <PropertyDetailMainFeatures :property="property" /> -->
          <section class="property-information">
            <div class="property-information-wrapper">
              <section
                class="property-detail-section property-detail-section--description"
              >
                <h2 class="property-detail-section__title">
                  {{ $t("description") }}
                </h2>
                <!-- <div v-html="property.description"></div> -->
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
          <!-- <PropertyDetailAddress v-if="property.location.address" /> -->
          <RaizcoDivider />
          <!-- <PropertyDetailVideo
            v-if="
              property.generalData.videoUrl || property.generalData.video360Url
            "
            :property="property"
          />
          <PropertyDetailLocation :property="property" /> -->
        </div>
      </article>
    </ContentWrapper>
  </div>
</template>

<script setup lang="ts">
import { usePropertyDetailStore } from "~/store/propertyDetail";
import { usePropertyMapper } from "~/composables/mappers/usePropertyMapper";
import { useAPIAsyncData } from "../../composables/services/useApi";
import NoImage from "../../assets/images/no-image.png";
import type { PropertyType } from "~/types/property/property.type";

const route = useRoute();
const { $viewport } = useNuxtApp();
const propertyId = route.params.id;
const property = ref<PropertyType | null>(null);
const headerRef = ref<HTMLElement | null>(null);
const headerIsVisible = ref<boolean>(false);
const { mapProperty } = usePropertyMapper();

const propertyDetailStore = usePropertyDetailStore();

await propertyDetailStore.getPropertyById(route.params.id as string);


const { data } = await useAPIAsyncData<PropertyType>(
  `/properties/${propertyId}`
);

if (!data.value) {
  throw createError({
    statusCode: 404,
    message: "Property not found",
    fatal: true,
  });
}

property.value = mapProperty(data.value);

const url = useRequestURL();
const fullUrl = `${url.origin}${route.fullPath}`;

if (property.value) {
  useHead({
    title: property.value?.name || "",
    meta: [
      { name: "description", content: property.value.description },
      { property: "og:title", content: property.value.name },
      { property: "og:description", content: property.value.description },
      {
        property: "og:image",
        content: property.value.images?.[0]?.url || NoImage,
      },
      {
        property: "og:url",
        content: fullUrl,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: property.value.name },
      { name: "twitter:description", content: property.value.description },
      {
        name: "twitter:image",
        content: property.value.images?.[0]?.url || NoImage,
      },
    ],
  });

  useSeoMeta({
    title: () => `${property.value?.name} | Raizco`,
    ogTitle: () => `${property.value?.name} | Raizco`,
    description: () => property.value?.description,
    ogDescription: () => property.value?.description,
    ogImage: () => property.value?.images?.[0]?.url || NoImage,
    ogUrl: () => fullUrl,
    twitterTitle: () => `${property.value?.name} | Raizco`,
    twitterDescription: () => property.value?.description,
    twitterImage: () => property.value?.images?.[0]?.url || NoImage,
  });
}

useIntersectionObserver(headerRef, ([entry]) => {
  headerIsVisible.value = entry?.isIntersecting;
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
