import type { RaizcoMultipleSelectorOption } from "~/components/common/RaizcoMultipleSelector/raizcoMultipleSelector.types";
import type { RaizcoSelectOption } from "~/components/common/RaizcoSelect/raizcoSelect.types";
import type { PropertiesFilters } from "~/types/property/propertiesFilters.type";
import type { PropertiesPicklists } from "~/types/property/propertiesPicklists.type";
import { PropertyManagementType } from "~/types/property/propertyManagement.type";
// import { usePropertiesStore } from "~/store/properties";

// const propertiesStore = usePropertiesStore();
export class PropertiesFiltersDto {
  public skip: number;
  public limit: number = 20;
  public property_name?: string;
  public property_management?: string;
  public property_type?: string[];
  public rent_value_from?: number;
  public rent_value_to?: number;
  public sale_value_from?: number;
  public sale_value_to?: number;
  public area_from?: number;
  public area_to?: number;
  public bedrooms?: number[];
  public bathrooms?: number[];
  public garages?: number[];
  public property_status?: string;
  public internal_features?: string[];
  public external_features?: string[];

  private constructor(
    queryParams: Partial<PropertiesFilters>,
    picklists: PropertiesPicklists
  ) {
    const {
      page,
      propertyName,
      propertyManagement,
      propertyType,
      valueFrom,
      valueTo,
      bedrooms,
      bathrooms,
      garages,
      totalAreaFrom,
      totalAreaTo,
      internalFeatures,
      externalFeatures,
    } = queryParams;
    this.skip = this.setSkip(page || 1);
    if (propertyName) this.property_name = propertyName;
    if (totalAreaFrom) this.area_from = Number(totalAreaFrom);
    if (totalAreaTo) this.area_to = Number(totalAreaTo);
    if (valueFrom) this.setValueFrom(propertyManagement!, Number(valueFrom));
    if (valueTo) this.setValueTo(propertyManagement!, Number(valueTo));
    if (propertyManagement)
      this.property_management = this.setPropertyManagement(
        propertyManagement,
        picklists
      );
    if (propertyType) this.property_type = this.setArrayOfIds(propertyType);
    if (internalFeatures)
      this.internal_features = this.setArrayOfIds(internalFeatures);
    if (externalFeatures)
      this.external_features = this.setArrayOfIds(externalFeatures);
    if (bedrooms) this.bedrooms = this.setQuantityArray(bedrooms);
    if (bathrooms) this.bathrooms = this.setQuantityArray(bathrooms);
    if (garages) this.garages = this.setQuantityArray(garages);
  }

  static create(
    queryParams: Partial<PropertiesFilters>,
    picklists: PropertiesPicklists
  ): PropertiesFiltersDto {
    return new PropertiesFiltersDto(queryParams, picklists);
  }

  private setSkip(value: number): number {
    if (value === 1) {
      return 0;
    }
    const skip = (value - 1) * this.limit;
    return skip;
  }

  private setPropertyManagement(
    value: PropertyManagementType,
    picklists: PropertiesPicklists
  ): string {
    const management = picklists.management.find(
      (item) => item.label.toLowerCase() === value.toLowerCase()
    )?.value;
    return management!;
  }

  private setValueFrom(
    propertyManagement: PropertyManagementType,
    value: number
  ): void {
    if (propertyManagement === PropertyManagementType.RENT) {
      this.rent_value_from = value;
      return;
    }
    this.sale_value_from = value;
  }

  private setValueTo(
    propertyManagement: PropertyManagementType,
    value: number
  ): void {
    if (propertyManagement === PropertyManagementType.RENT) {
      this.rent_value_to = value;
      return;
    }
    this.sale_value_to = value;
  }

  private setArrayOfIds(data: RaizcoSelectOption[]): string[] {
    return data.map((item) => item.id);
  }

  private setQuantityArray(data: RaizcoMultipleSelectorOption[]): number[] {
    console.log(data)
    return data.map((item) => Number(item.value));
  }
}
