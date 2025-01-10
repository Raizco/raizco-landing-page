export const useApiConfig = () => {
    const config = useRuntimeConfig();
  
    return {
      baseURL: config.public.apiBaseUrl,
    };
  };
  