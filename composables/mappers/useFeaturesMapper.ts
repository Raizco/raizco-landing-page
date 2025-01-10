import type { FeaturesType } from "~/types/property/features.type";

export const useFeaturesMapper = () => {
  const mapFeatures = (features: any): FeaturesType => ({
    internalFeatures: mapFeature(features.internal_features),
    externalFeatures: mapFeature(features.external_features),
  });

  const mapFeature = (features: any[]): string[] => {
    return [];
  };

  return { mapFeatures };
};
