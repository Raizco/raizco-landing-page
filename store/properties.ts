import { defineStore } from "pinia";
import type { PropertyType } from "~/types/property/property.type";
import { usePropertiesService } from "~/composables/services/usePropertiesService";
import { usePropertyMapper } from "~/composables/mappers/usePropertyMapper";
import type { PropertiesPicklists } from "~/types/property/propertiesPicklists.type";
import { usePicklistsMapper } from "~/composables/mappers/usePicklistsMapper";
import type { PropertiesFilters } from "~/types/property/propertiesFilters.type";
import { PropertiesFiltersDto } from "~/dtos/PropertiesFiltersDto";

export const usePropertiesStore = defineStore("properties", {
  state: () => ({
    properties: [] as PropertyType[],
    picklists: {} as PropertiesPicklists,
    filters: {} as PropertiesFilters,
    page: 1,
    itemsPerPage: 20,
    totalItems: 0,
  }),
  actions : {
    async getProperties(): Promise<void> {
      const { fetchProperties } = usePropertiesService();
      const { mapProperties } = usePropertyMapper();

      const filters = PropertiesFiltersDto.create(
        { propertyManagement: this.filters.propertyManagement },
        this.picklists
      );
      const response = await fetchProperties(filters);
      this.properties = mapProperties(response.data);
      this.totalItems = response.total;
    },
    async getPropertiesWithFilters(): Promise<void> {
      const { fetchPropertiesWithFilters } = usePropertiesService();
      const { mapProperties } = usePropertyMapper();
      
      const filters = PropertiesFiltersDto.create(
        {
          ...this.filters,
          page: this.page,
        },
        this.picklists
      );

      const response = await fetchPropertiesWithFilters(filters);
      this.properties = mapProperties(response.data);
      this.totalItems = response.total;
    },
    async getPicklists(): Promise<void> {
      const { fetchPicklists } = usePropertiesService();
      const { mapPicklists } = usePicklistsMapper();

      const response = await fetchPicklists();
      this.picklists = mapPicklists(response);
    },
    resetFilters() {
      this.filters = {} as PropertiesFilters;
    },
  },
});
