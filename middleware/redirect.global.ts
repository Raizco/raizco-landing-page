export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/" || to.path === "/propiedades") {
    return navigateTo("/propiedades/venta");
  }
});
