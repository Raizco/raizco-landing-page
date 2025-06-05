<template>
  <div v-if="propertyDetailStore.data">
    <PropertyDetailFooter
      :show="!headerIsVisible && $viewport.isLessOrEquals('tablet')"
    />
    <ContentWrapper>
      <article class="property-detail-page">
        <div>
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
import { useAPIAsyncData } from "~/composables/services/useApi";
import { usePropertyMapper } from "~/composables/mappers/usePropertyMapper";

const route = useRoute();
const { $viewport } = useNuxtApp();
const headerRef = ref<HTMLElement | null>(null);
const headerIsVisible = ref<boolean>(false);

const propertyDetailStore = usePropertyDetailStore();

const { data, error } = await useAPIAsyncData(`/properties/${route.params.id}`);

if (error.value) {
  throw createError({ statusCode: 404, message: "Propiedad no encontrada" });
}

const { mapProperty } = usePropertyMapper();
const mappedProperty = mapProperty(data.value);
propertyDetailStore.data = mappedProperty;

const url = useRequestURL();
const fullUrl = `${url.origin}${route.fullPath}`;

useHead({
  title: mappedProperty.name || "",
  meta: [
    { name: "description", content: mappedProperty.description },
    { property: "og:title", content: mappedProperty.name },
    {
      property: "og:description",
      content: mappedProperty.description,
    },
    {
      property: "og:image",
      content: `${mappedProperty.images?.[0]?.url}` || NoImage,
    },
    {
      property: "og:url",
      content: fullUrl,
    },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: mappedProperty.name },
    {
      name: "twitter:description",
      content: mappedProperty.description,
    },
    {
      name: "twitter:image",
      content: `${mappedProperty.images?.[0]?.url}` || NoImage,
    },
  ],
});

useSeoMeta({
  title: () => `${mappedProperty.name} | Raizco`,
  ogTitle: () => `${mappedProperty.name} | Raizco`,
  description: () => mappedProperty.description,
  ogDescription: () => mappedProperty.description,
  ogImage: () => `${mappedProperty.images?.[0]?.url}` || NoImage,
  ogUrl: () => fullUrl,
  twitterTitle: () => `${mappedProperty.name} | Raizco`,
  twitterDescription: () => mappedProperty.description,
  twitterImage: () => `${mappedProperty.images?.[0]?.url}` || NoImage,
});

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
