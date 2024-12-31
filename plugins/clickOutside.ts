import type { DirectiveBinding } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("click-outside", {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
      el.clickOutsideHandler = (event: MouseEvent) => {
        if (!el.contains(event.target as Node)) {
          binding.value(event);
        }
      };
      document.addEventListener("click", el.clickOutsideHandler);
    },
    unmounted(el: HTMLElement) {
      if (el.clickOutsideHandler) {
        document.removeEventListener("click", el.clickOutsideHandler);
      }
    },
  });
});
