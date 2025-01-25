export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/" || to.path === "/propiedades") {
    return navigateTo("/propiedades/venta");
  }
  if (!to.matched.length) {
    return navigateTo("/404");
  }
});
