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

const route = useRoute();
const { $viewport } = useNuxtApp();
const headerRef = ref<HTMLElement | null>(null);
const headerIsVisible = ref<boolean>(false);

const propertyDetailStore = usePropertyDetailStore();

await propertyDetailStore.getPropertyById(route.params.id as string);

const url = useRequestURL();
const fullUrl = `${url.origin}${route.fullPath}`;

if (Object.keys(propertyDetailStore.data).length) {
  useHead({
    title: propertyDetailStore.data?.name || "",
    meta: [
      { name: "description", content: propertyDetailStore.data.description },
      { property: "og:title", content: propertyDetailStore.data.name },
      {
        property: "og:description",
        content: propertyDetailStore.data.description,
      },
      {
        property: "og:image",
        content: propertyDetailStore.data.images?.[0]?.url || NoImage,
      },
      {
        property: "og:url",
        content: fullUrl,
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: propertyDetailStore.data.name },
      {
        name: "twitter:description",
        content: propertyDetailStore.data.description,
      },
      {
        name: "twitter:image",
        content: propertyDetailStore.data.images?.[0]?.url || NoImage,
      },
    ],
  });

  useSeoMeta({
    title: () => `${propertyDetailStore.data?.name} | Raizco`,
    ogTitle: () => `${propertyDetailStore.data?.name} | Raizco`,
    description: () => propertyDetailStore.data?.description,
    ogDescription: () => propertyDetailStore.data?.description,
    ogImage: () => propertyDetailStore.data?.images?.[0]?.url || NoImage,
    ogUrl: () => fullUrl,
    twitterTitle: () => `${propertyDetailStore.data?.name} | Raizco`,
    twitterDescription: () => propertyDetailStore.data?.description,
    twitterImage: () => propertyDetailStore.data?.images?.[0]?.url || NoImage,
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
