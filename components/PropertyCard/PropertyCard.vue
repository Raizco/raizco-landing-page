<template>
  <article class="property-card">
    <PropertyCardImages />
    <PropertyCardDetails />
  </article>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.property-card {
  // max-width: 330px;
  height: 360px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
}
</style>
