<template>
  <section class="content-wrapper">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.content-wrapper {
  padding: 0px 20px;
  max-width: 1350px;
  margin: 0 auto;
  @include respond-to(mobile) {
    padding: 0px 10px;
  }
}
</style>
