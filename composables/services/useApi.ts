import type { UseFetchOptions } from "nuxt/app";

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api as typeof $fetch,
  });
}
export function useAPIFetch<T>(
  url: string | (() => string),
  options?: Record<string, any>
) {
  const resolvedUrl = typeof url === "function" ? url() : url;
  const nuxtApp = useNuxtApp();
  const $api = nuxtApp.$api as typeof $fetch;
  return $api<T>(resolvedUrl, {
    ...options,
    baseURL: useRuntimeConfig().public.apiBaseUrl,
  });
}
export function useAPIAsyncData<T>(
  url: string,
) {
  return useAsyncData<T>(url, () =>
    $fetch(url, {
      baseURL: useRuntimeConfig().public.apiBaseUrl,
    })
  );
}
