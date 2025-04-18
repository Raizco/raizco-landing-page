export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  
  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl,
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/"));
      }
    },
  });
  return {
    provide: {
      api,
    },
  };
});
