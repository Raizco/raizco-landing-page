<template>
  <div class="main-layout">
    <Header />
    <main>
      <section class="main-content">
        <NuxtPage />
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { usePropertiesStore } from "~/store/properties";

const propertiesStore = usePropertiesStore();

propertiesStore.getPicklists();
</script>

<style lang="scss" sci>
.main-layout {
  font-family: $app-font;
}
</style>
