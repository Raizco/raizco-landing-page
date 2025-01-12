<template>
  <div>
    <FiltersBar />
    <ContentWrapper>
      <div class="main-content-wrapper">
        <section class="properties-section">
          <article class="filters-wrapper" v-if="$viewport.isGreaterThan('tablet')">
            <Filters />
          </article>
          <article class="property-cards-list">
            <PropertyCard
              v-for="property of propertiesStore.properties"
              :key="property.id"
              :data="property"
            />
          </article>
        </section>
        <div class="paginator-wrapper">
          <RaizcoPaginator
            v-model="propertiesStore.page"
            :total="propertiesStore.totalItems"
            :pageCount="propertiesStore.itemsPerPage"
            @change="onChangePagination"
          />
        </div>
      </div>
    </ContentWrapper>
  </div>
</template>

<script lang="ts" setup>
import { usePropertiesStore } from "~/store/properties";
import type { PropertyManagementType } from "~/types/property/propertyManagement.type";
const { $viewport } = useNuxtApp()
const route = useRoute();

definePageMeta({
  middleware: ["propiedades"],
});

const propertiesStore = usePropertiesStore();

init();

async function init() {
  validateManagamentTypeInPath();
  propertiesStore.getProperties();
}

function validateManagamentTypeInPath() {
  const managementTypeFromPath = route.params.business;
  propertiesStore.filters.propertyManagement =
    managementTypeFromPath as PropertyManagementType;
}

async function onChangePagination() {
  await propertiesStore.getPropertiesWithFilters();
  window.scrollTo(0, 0);
}
</script>

<style lang="scss" scoped>
.main-content-wrapper {
  @include main-content-wrapper;
}

.properties-section {
  display: flex;
  gap: 35px;
  @media (width < 700px) {
    width: 100%;
  }
}

.filters-wrapper {
  @include respond-to(mobile) {
    display: none;
  }
}

.property-cards-list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 30px;
}

.paginator-wrapper {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
</style>
