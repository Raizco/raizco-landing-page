import type { FeaturesType, FeatureType } from "~/types/property/features.type";

export const useFeaturesMapper = () => {
  const mapFeatures = (features: any): FeaturesType => ({
    internalFeatures: mapFeaturesList(features.internal_features),
    externalFeatures: mapFeaturesList(features.external_features),
  });

  const mapFeature = (item: any): FeatureType => ({
    id: item.id || null,
    label: item.name || "",
    value: item.value || "",
  });

  const mapFeaturesList = (features: any[]): FeatureType[] =>
    features.map((item: any) => mapFeature(item));

  return { mapFeatures };
};
