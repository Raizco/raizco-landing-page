import { fetchProperties, fetchPropertyById } from "../api/propertiesApi";

export const propertiesRepository = {
  getProperties: async (id: string) => {
    const user = await fetchProperties(id);
    return user;
  },
  getPropertyById: async (id: string) => {
    const users = await fetchPropertyById(id);
    return users;
  },
};
