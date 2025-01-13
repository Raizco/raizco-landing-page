<template>
  <div class="main-layout">
    <Header />
    <main>
      <section v-if="Object.keys(propertiesStore.picklists).length" class="main-content">
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
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/raizco-logo-192.png' },
  ],
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
