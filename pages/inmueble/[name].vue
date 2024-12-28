<template>
    <div>
      <h1>Esta es la propiedad {{ currentId }}</h1>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute();
  
  const currentId = route.params.id;
  
  </script>
  