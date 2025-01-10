export type PicklistItem = {
  id: string;
  label: string;
  value: string;
};

export type PropertiesPicklists = {
  propertyType: PicklistItem[];
  status: PicklistItem[];
  management: PicklistItem[];
  condition: PicklistItem[];
  rentType: PicklistItem[];
  areaUnits: PicklistItem[];
  features: {
    internalFeatures: PicklistItem[];
    externalFeatures: PicklistItem[];
  };
};
