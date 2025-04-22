import type { PropertyType } from "~/types/property/property.type";
import {
  BackendPropertyManagementType,
  PropertyManagementType,
} from "~/types/property/propertyManagement.type";

export function usePropertyValueWithManagementText(property: PropertyType) {
  const propertyManagement = computed(() => {
    let value: string;
    const management = property.generalData?.management;
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
    const management = property.generalData?.management;
    if(!management) return "$0";
    if (
      management.some((item) => item === BackendPropertyManagementType.RENT)
    ) {
      value = property.generalData.rentValue;
    } else {
      value = property.generalData.saleValue;
    }
    return `$${addDotsToValue(value!)}`;
  });

  return { propertyValue, propertyManagement };
}
