export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "http://localhost:5001",
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
