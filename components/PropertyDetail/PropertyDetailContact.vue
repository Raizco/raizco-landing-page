<template>
  <section class="property-detail-contact">
    <p class="property-detail-contact__title">
      {{ $t("knowMoreAboutProperty") }}
    </p>
    <RequestInfoButton />
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.property-detail-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 400px;
  &__title {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
}
</style>
