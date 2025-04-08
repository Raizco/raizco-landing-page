import type { PropertiesFiltersDto } from "~/dtos/PropertiesFiltersDto";
import { useAPI, useAPIFetch } from "./useApi";

export const usePropertiesService = () => {
  const fetchProperties = async (
    filters: PropertiesFiltersDto
  ): Promise<any> => {
    try {
      const response = await useAPIFetch(`/properties/landing`, {
        params: { ...filters, property_status: "active" },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };

  const fetchPropertiesWithFilters = async (
    filters: PropertiesFiltersDto
  ): Promise<any> => {
    try {
      const response = await useAPIFetch(`/properties/landing`, {
        method: "GET",
        params: { ...filters, property_status: "active" },
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };

  const fetchPropertyById = async (id: string): Promise<any> => {
    const { data, error } = await useAPI(`/properties/${id}`);
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value as any;
  };

  const fetchPicklists = async (): Promise<any> => {
    const { data, error } = await useAPI(`/properties/picklists`);
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value as any;
  };

  return {
    fetchProperties,
    fetchPropertiesWithFilters,
    fetchPropertyById,
    fetchPicklists,
  };
};
