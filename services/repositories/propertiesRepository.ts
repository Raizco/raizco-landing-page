import { fetchProperties, fetchPropertyById } from "../api/propertiesApi";

export const propertiesRepository = {
  getProperties: async (id: string) => {
    const user = await fetchProperties(id);
    // Transformar datos si es necesario
    return user;
  },
  getPropertyById: async (id: string) => {
    const users = await fetchPropertyById(id);
    // Transformar datos si es necesario
    return users;
  },
};
