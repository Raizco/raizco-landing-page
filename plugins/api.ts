export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://raizco-core.site",
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
