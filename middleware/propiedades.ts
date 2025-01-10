import { PropertyManagementType } from "~/types/property/propertyManagement.type";

export default defineNuxtRouteMiddleware((to, from) => {
  const validPaths = Object.values(PropertyManagementType);
  if (!validPaths.includes(to.params.business as PropertyManagementType)) {
    return abortNavigation();
  }
});
