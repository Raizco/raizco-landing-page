import { PropertyManagementType } from "~/types/property/propertyManagement.type";
import { usePropertiesStore } from "~/store/properties";
export function useHeader() {
  const route = useRoute();
  const propertiesStore = usePropertiesStore();

  function onClickOption(management: PropertyManagementType) {
    propertiesStore.resetFilters();
    propertiesStore.filters.propertyManagement = management;
    navigateTo(`/propiedades/${management}`);
  }

  function goHome() {
    // navigateTo(`/`);
  }

  function validateChosenOption(value: PropertyManagementType) {
    const currentManagement = route.params.business;
    return (currentManagement as PropertyManagementType) === value;
  }

  return { onClickOption, goHome, validateChosenOption };
}
