import type { GeneralDataType } from "~/types/property/generalData.type";

export const useGeneralDataMapper = () => {
  const mapGeneralData = (data: any): GeneralDataType => ({
    management: data.management,
    saleValue: data.sale_value || null,
    rentValue: data.rent_value || null,
    feeValue: data.fee_value || null,
    condition: data.property_condition,
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    garage: data.garage,
    stratum: data.stratum,
    floor: data.floor,
    totalArea: data.total_area,
    videoUrl: data.video_url,
    video360Url: data.video_360_url,
  });

  return { mapGeneralData };
};
