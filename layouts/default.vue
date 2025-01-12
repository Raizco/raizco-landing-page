<template>
  <div class="main-layout">
    <Header />
    <main>
      <section class="main-content">
        <NuxtPage />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { usePropertiesStore } from "~/store/properties";

useHead({
  htmlAttrs: {
    class: 'light-mode'
  }
})

const propertiesStore = usePropertiesStore();

propertiesStore.getPicklists();
</script>

<style lang="scss" sci>
.main-layout {
  font-family: $app-font;
}

html.light-mode {
  background-color: #fff;
  color: $font-color;
}
</style>
