<template>
  <div>
    <SearchBar />
    <ContentWrapper>
      <section class="property-cards-list">
        <PropertyCard v-for="(item, index) of 10" :key="index" />
      </section>
    </ContentWrapper>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.property-cards-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 30px;
  margin: 20px 0px;
}
</style>
