import { P as PropertyManagementType } from './propertyManagement.type-D2tDZXBb.mjs';
import { y as defineNuxtRouteMiddleware, z as abortNavigation } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import 'pinia';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import 'vue/server-renderer';

const propiedades = defineNuxtRouteMiddleware((to, from) => {
  const validPaths = Object.values(PropertyManagementType);
  if (!validPaths.includes(to.params.business)) {
    return abortNavigation();
  }
});

export { propiedades as default };
//# sourceMappingURL=propiedades-DvpImWTC.mjs.map
