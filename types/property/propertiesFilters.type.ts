import type { RaizcoSelectOption } from "~/components/common/RaizcoSelect/raizcoSelect.types";
import type { PropertyManagementType } from "./propertyManagement.type";
import type { RaizcoMultipleSelectorOption } from "~/components/common/RaizcoMultipleSelector/raizcoMultipleSelector.types";

export type PropertiesFilters = {
    page?: number,
    propertyName: string
    propertyManagement: PropertyManagementType;
    propertyType: RaizcoSelectOption[],
    valueFrom: string,
    valueTo: string,
    bedrooms: RaizcoMultipleSelectorOption[],
    bathrooms: RaizcoMultipleSelectorOption[],
    garages: RaizcoMultipleSelectorOption[],
    totalAreaFrom: string,
    totalAreaTo: string,
    internalFeatures?: RaizcoSelectOption[]
    externalFeatures?: RaizcoSelectOption[]
}