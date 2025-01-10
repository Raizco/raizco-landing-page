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
    baseURL: useNuxtApp().$config.public.apiBaseUrl
  });
}
