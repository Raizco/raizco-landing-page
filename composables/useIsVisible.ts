import { ref, onUnmounted, type Ref } from "vue";

export function useIsVisible() {
  const isVisible = ref(false);
  const observer: Ref<IntersectionObserver | null> = ref(null);

  const observeElement = (element: any) => {
    const targetElement = element?.$el || element;

    if (!targetElement || !(targetElement instanceof HTMLElement)) {
      console.error("El elemento pasado no es un HTMLElement válido:", element);
      return;
    }

    observer.value = new IntersectionObserver(([entry]) => {
      isVisible.value = entry.isIntersecting;
    });

    observer.value.observe(targetElement);
  };

  const unobserveElement = () => {
    if (observer.value) {
      observer.value.disconnect();
      observer.value = null;
    }
  };

  onUnmounted(() => {
    unobserveElement();
  });

  return { isVisible, observeElement, unobserveElement };
}
