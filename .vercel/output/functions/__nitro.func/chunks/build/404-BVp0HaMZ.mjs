import { _ as __nuxt_component_0 } from './nuxt-link-B9G7Wlt6.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center" }, _attrs))}><h1 class="text-6xl font-bold text-red-600">404</h1><p class="mt-4 text-xl text-gray-700">\xA1Oops! P\xE1gina no encontrada.</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "mt-6 text-blue-500 underline hover:text-blue-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Volver al inicio `);
      } else {
        return [
          createTextVNode(" Volver al inicio ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/404.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _404 as default };
//# sourceMappingURL=404-BVp0HaMZ.mjs.map
