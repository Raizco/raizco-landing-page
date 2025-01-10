import type { FeaturesType } from "./features.type";
import type { GeneralDataType } from "./generalData.type";
import type { ImageType } from "./images.type";
import type { LocationType } from "./location.type";

export type PropertyType = {
  id: string;
  name: string;
  description: string;
  generalData: GeneralDataType;
  location: LocationType;
  images: ImageType[];
  features: FeaturesType;
};
