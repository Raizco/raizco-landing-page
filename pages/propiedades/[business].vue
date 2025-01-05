<template>
  <div>
    <FiltersBar />
    <ContentWrapper>
      <section class="properties-section">
        <article class="filters-wrapper">
          <Filters />
        </article>
        <article class="property-cards-list">
          <PropertyCard v-for="(item, index) of 10" :key="index" />
        </article>
      </section>
    </ContentWrapper>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.properties-section {
  display: flex;
  gap: 35px;
  margin: 20px 0px;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 30px;
}
</style>
