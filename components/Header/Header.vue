<template>
  <header>
    <DesktopHeader v-if="$viewport.isGreaterThan('tablet')"/>
    <ResponsiveHeader v-else />
  </header>
</template>

<script lang="ts" setup>
const { $viewport } = useNuxtApp();
</script>
