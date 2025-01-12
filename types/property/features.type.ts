export type FeatureType = {
  id: string | null;
  label: string;
  value: string;
}

export type FeaturesType = {
  internalFeatures: FeatureType[];
  externalFeatures: FeatureType[];
};
