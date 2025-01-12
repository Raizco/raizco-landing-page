import { usePropertyDetailStore } from "~/store/propertyDetail";
import {
  BackendPropertyManagementType,
  PropertyManagementType,
} from "~/types/property/propertyManagement.type";

export function usePropertyValueWithManagementText() {
  const propertyDetailStore = usePropertyDetailStore();

  const propertyManagement = computed(() => {
    let value: string;
    const management = propertyDetailStore.data.generalData.management;
    if(!management) return capitalizeFirstLetter(PropertyManagementType.SALE);
    if (
      management.some((item) => item === BackendPropertyManagementType.RENT)
    ) {
      value = PropertyManagementType.RENT;
    } else {
      value = PropertyManagementType.SALE;
    }
    return capitalizeFirstLetter(value);
  });

  const propertyValue = computed(() => {
    let value;
    const management = propertyDetailStore.data.generalData.management;
    if(!management) return "$0";
    if (
      management.some((item) => item === BackendPropertyManagementType.RENT)
    ) {
      value = propertyDetailStore.data.generalData.rentValue;
    } else {
      value = propertyDetailStore.data.generalData.saleValue;
    }
    return `$${addDotsToValue(value!)}`;
  });

  return { propertyValue, propertyManagement };
}
