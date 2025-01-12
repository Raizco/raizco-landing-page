import { defineStore } from "pinia";
import type { PropertyType } from "~/types/property/property.type";
import { usePropertiesService } from "~/composables/services/usePropertiesService";
import { usePropertyMapper } from "~/composables/mappers/usePropertyMapper";

export const usePropertyDetailStore = defineStore("propertyDetail", {
  state: () => ({
    data: {} as PropertyType,
  }),
  actions: {
    async getPropertyById(id: string): Promise<void> {
      const { fetchPropertyById } = usePropertiesService();
      const { mapProperty } = usePropertyMapper();

      const response = await fetchPropertyById(id);
      this.data = mapProperty(response);
    },
    resetData(): void {
        this.data = {} as PropertyType;
    }
  },
});
