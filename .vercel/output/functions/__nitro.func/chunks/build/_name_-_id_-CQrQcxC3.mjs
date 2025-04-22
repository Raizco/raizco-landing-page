import { b as buildAssetsURL, E as getRequestURL } from '../_/nitro.mjs';
import { _ as __nuxt_component_2$1, a as __nuxt_component_1$1, b as __nuxt_component_0$2, c as __nuxt_component_1$2 } from './RaizcoDivider-DIP3PRU2.mjs';
import { useSSRContext, defineComponent, mergeProps, computed, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, ref, withAsyncContext, toValue, watch, getCurrentScope, onScopeDispose, getCurrentInstance } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { defineStore } from 'pinia';
import { u as usePropertiesService, a as usePropertyMapper, b as usePropertiesStore, _ as _sfc_main$d } from './properties-rhRhWshR.mjs';
import { P as PropertyManagementType, B as BackendPropertyManagementType } from './propertyManagement.type-D2tDZXBb.mjs';
import { _ as _export_sfc, g as useRoute, c as useNuxtApp, u as useHead, i as useSeoMeta, f as useRequestEvent } from './server.mjs';
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import '@fortawesome/fontawesome-svg-core';
import './asyncData-_Tu7Jwpj.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import '@fortawesome/free-solid-svg-icons';

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const noop = () => {
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return toArray(_target).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
const usePropertyDetailStore = defineStore("propertyDetail", {
  state: () => ({
    data: {}
  }),
  actions: {
    async getPropertyById(id) {
      const { fetchPropertyById } = usePropertiesService();
      const { mapProperty } = usePropertyMapper();
      const response = await fetchPropertyById(id);
      this.data = mapProperty(response);
    },
    resetData() {
      this.data = {};
    }
  }
});
function requestInfoAboutProperty(propertyUrl, phone) {
  const message = `\xA1Hola! Me gustar\xEDa obtener m\xE1s informaci\xF3n del siguiente inmueble: ${propertyUrl}`;
  const whatsappURL = `https://api.whatsapp.com/send?phone=+57${phone}&text=${message}`;
  (void 0).open(whatsappURL, "_blank");
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RequestInfoButton",
  __ssrInlineRender: true,
  props: {
    secondaryButton: Boolean
  },
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    function onClickButton() {
      const url = encodeURIComponent((void 0).location.href);
      requestInfoAboutProperty(url, propertyDetailStore.data.advisorPhoneNumber);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RaizcoButton = __nuxt_component_2$1;
      _push(ssrRenderComponent(_component_RaizcoButton, mergeProps({
        onClick: onClickButton,
        text: _ctx.$t("contactConsultant"),
        secondary: __props.secondaryButton
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/RequestInfoButton.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function addDotsToValue(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
function usePropertyValueWithManagementText(property) {
  const propertyManagement = computed(() => {
    var _a;
    let value;
    const management = (_a = property.generalData) == null ? void 0 : _a.management;
    if (!management) return capitalizeFirstLetter(PropertyManagementType.SALE);
    if (management.some((item) => item === BackendPropertyManagementType.RENT)) {
      value = PropertyManagementType.RENT;
    } else {
      value = PropertyManagementType.SALE;
    }
    return capitalizeFirstLetter(value);
  });
  const propertyValue = computed(() => {
    var _a;
    let value;
    const management = (_a = property.generalData) == null ? void 0 : _a.management;
    if (!management) return "$0";
    if (management.some((item) => item === BackendPropertyManagementType.RENT)) {
      value = property.generalData.rentValue;
    } else {
      value = property.generalData.saleValue;
    }
    return `$${addDotsToValue(value)}`;
  });
  return { propertyValue, propertyManagement };
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailFooter",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    const { propertyValue, propertyManagement } = usePropertyValueWithManagementText(propertyDetailStore.data);
    const propertyLocation = computed(() => {
      var _a;
      return ((_a = propertyDetailStore.data.location) == null ? void 0 : _a.cityName.toUpperCase()) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentWrapper = __nuxt_component_1$1;
      const _component_RequestInfoButton = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["property-detail-footer", {
          "property-detail-footer--show": __props.show
        }]
      }, _attrs))} data-v-5edef698>`);
      _push(ssrRenderComponent(_component_ContentWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="property-detail-footer__name" data-v-5edef698${_scopeId}><h1 data-v-5edef698${_scopeId}>${ssrInterpolate(unref(propertyDetailStore).data.name)}</h1></article><article class="property-detail-footer__location" data-v-5edef698${_scopeId}><span data-v-5edef698${_scopeId}>${ssrInterpolate(unref(propertyLocation))}</span></article><article class="property-detail-footer-value" data-v-5edef698${_scopeId}><div data-v-5edef698${_scopeId}><p class="property-detail-footer-value__value" data-v-5edef698${_scopeId}>${ssrInterpolate(unref(propertyValue))}</p><p class="property-detail-footer-value__text" data-v-5edef698${_scopeId}> Valor de ${ssrInterpolate(unref(propertyManagement))}</p></div><div class="contact-us" data-v-5edef698${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RequestInfoButton, { secondaryButton: "" }, null, _parent2, _scopeId));
            _push2(`</div></article>`);
          } else {
            return [
              createVNode("article", { class: "property-detail-footer__name" }, [
                createVNode("h1", null, toDisplayString(unref(propertyDetailStore).data.name), 1)
              ]),
              createVNode("article", { class: "property-detail-footer__location" }, [
                createVNode("span", null, toDisplayString(unref(propertyLocation)), 1)
              ]),
              createVNode("article", { class: "property-detail-footer-value" }, [
                createVNode("div", null, [
                  createVNode("p", { class: "property-detail-footer-value__value" }, toDisplayString(unref(propertyValue)), 1),
                  createVNode("p", { class: "property-detail-footer-value__text" }, " Valor de " + toDisplayString(unref(propertyManagement)), 1)
                ]),
                createVNode("div", { class: "contact-us" }, [
                  createVNode(_component_RequestInfoButton, { secondaryButton: "" })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailFooter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-5edef698"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailValue",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    const { propertyValue, propertyManagement } = usePropertyValueWithManagementText(propertyDetailStore.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "property-detail-value" }, _attrs))} data-v-d6c17e7c><p class="property-detail-value__value" data-v-d6c17e7c>${ssrInterpolate(unref(propertyValue))}</p><p class="property-detail-value__text" data-v-d6c17e7c>Valor de ${ssrInterpolate(unref(propertyManagement))}</p></article>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailValue.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-d6c17e7c"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    const propertyLocation = computed(() => {
      var _a;
      return ((_a = propertyDetailStore.data.location) == null ? void 0 : _a.cityName.toUpperCase()) || "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$d;
      const _component_PropertyDetailValue = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-header" }, _attrs))} data-v-f353cc12><article class="property-detail-header__name" data-v-f353cc12><h1 data-v-f353cc12>${ssrInterpolate(unref(propertyDetailStore).data.name)}</h1></article><article class="property-detail-header__location" data-v-f353cc12>`);
      _push(ssrRenderComponent(_component_font_awesome, {
        class: "property-detail-header__location-icon",
        icon: ["fas", "location-pin"]
      }, null, _parent));
      _push(`<span data-v-f353cc12>${ssrInterpolate(unref(propertyLocation))}</span></article>`);
      _push(ssrRenderComponent(_component_PropertyDetailValue, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-f353cc12"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PropertyImages",
  __ssrInlineRender: true,
  props: {
    images: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$2;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "property-images" }, _attrs))} data-v-9c83f0aa>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</article>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyImages/PropertyImages.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9c83f0aa"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailMainFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$d;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-main-features" }, _attrs))} data-v-562016fa><div class="item-group" data-v-562016fa><article class="property-main-features-item" data-v-562016fa>`);
      _push(ssrRenderComponent(_component_font_awesome, {
        class: "property-main-features-item__icon",
        icon: ["fas", "ruler-combined"]
      }, null, _parent));
      _push(`<div data-v-562016fa><h2 class="property-main-features-item__title" data-v-562016fa>${ssrInterpolate(_ctx.$t("builtArea"))}</h2><p class="property-main-features-item__text" data-v-562016fa>${ssrInterpolate(unref(propertyDetailStore).data.generalData.totalArea)} m\xB2 </p></div></article><article class="property-main-features-item" data-v-562016fa>`);
      _push(ssrRenderComponent(_component_font_awesome, {
        class: "property-main-features-item__icon",
        icon: ["fas", "bed"]
      }, null, _parent));
      _push(`<div data-v-562016fa><h2 class="property-main-features-item__title" data-v-562016fa>${ssrInterpolate(_ctx.$t("rooms"))}</h2><p class="property-main-features-item__text" data-v-562016fa>${ssrInterpolate(unref(propertyDetailStore).data.generalData.bedrooms)}</p></div></article></div><div class="item-group" data-v-562016fa><article class="property-main-features-item" data-v-562016fa>`);
      _push(ssrRenderComponent(_component_font_awesome, {
        class: "property-main-features-item__icon",
        icon: ["fas", "bath"]
      }, null, _parent));
      _push(`<div data-v-562016fa><h2 class="property-main-features-item__title" data-v-562016fa>${ssrInterpolate(_ctx.$t("bathrooms"))}</h2><p class="property-main-features-item__text" data-v-562016fa>${ssrInterpolate(unref(propertyDetailStore).data.generalData.bathrooms)}</p></div></article><article class="property-main-features-item" data-v-562016fa>`);
      _push(ssrRenderComponent(_component_font_awesome, {
        class: "property-main-features-item__icon",
        icon: ["fas", "warehouse"]
      }, null, _parent));
      _push(`<div data-v-562016fa><h2 class="property-main-features-item__title" data-v-562016fa>${ssrInterpolate(_ctx.$t("garage"))}</h2><p class="property-main-features-item__text" data-v-562016fa>${ssrInterpolate(unref(propertyDetailStore).data.generalData.garage)}</p></div></article></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailMainFeatures.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-562016fa"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const propertiesStore = usePropertiesStore();
    const propertyDetailStore = usePropertyDetailStore();
    const internalFeatures = computed(() => {
      const mappedFeatures = propertyDetailStore.data.features.internalFeatures.map(
        (feature) => propertiesStore.picklists.features.internalFeatures.find(
          (picklist) => feature.id === picklist.id
        )
      );
      return mappedFeatures;
    });
    const externalFeatures = computed(() => {
      const mappedFeatures = propertyDetailStore.data.features.externalFeatures.map(
        (feature) => propertiesStore.picklists.features.externalFeatures.find(
          (picklist) => feature.id === picklist.id
        )
      );
      return mappedFeatures;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-features" }, _attrs))} data-v-cc31b5ba><h2 class="property-detail-features__title" data-v-cc31b5ba>${ssrInterpolate(_ctx.$t("propertyFeatures"))}</h2><h3 class="features-list-title" data-v-cc31b5ba>${ssrInterpolate(_ctx.$t("internal"))}</h3><ul class="features-list" data-v-cc31b5ba><!--[-->`);
      ssrRenderList(unref(internalFeatures), (item, index) => {
        _push(`<li class="features-list__item" data-v-cc31b5ba><span data-v-cc31b5ba>${ssrInterpolate(item == null ? void 0 : item.label)}</span></li>`);
      });
      _push(`<!--]--></ul><h3 class="features-list-title" data-v-cc31b5ba>${ssrInterpolate(_ctx.$t("external"))}</h3><ul class="features-list" data-v-cc31b5ba><!--[-->`);
      ssrRenderList(unref(externalFeatures), (item, index) => {
        _push(`<li class="features-list__item" data-v-cc31b5ba><span data-v-cc31b5ba>${ssrInterpolate(item == null ? void 0 : item.label)}</span></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailFeatures.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-cc31b5ba"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RequestInfoButton = _sfc_main$c;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-contact" }, _attrs))} data-v-fe4b9fa8><p class="property-detail-contact__title" data-v-fe4b9fa8>${ssrInterpolate(_ctx.$t("knowMoreAboutProperty"))}</p>`);
  _push(ssrRenderComponent(_component_RequestInfoButton, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailContact.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fe4b9fa8"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailAddress",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-address property-detail-address--inner" }, _attrs))} data-v-405cbe4d><h2 class="property-detail-address__title" data-v-405cbe4d>${ssrInterpolate(_ctx.$t("address"))}</h2><div data-v-405cbe4d>${ssrInterpolate(unref(propertyDetailStore).data.location.address)}</div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailAddress.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-405cbe4d"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailVideo",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    function formatVideoUrl(url) {
      if (url.match("youtu.be") && !url.match("embed")) {
        const id = url.split("/")[3];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (url.match("shorts")) {
        const id = url.split("shorts/")[1];
        return `https://www.youtube.com/embed/${id}`.split("&")[0];
      }
      if (url.match("yout") && !url.match("embed")) {
        const id = url.split("?v=")[1];
        return `https://www.youtube.com/embed/${id}`.split("&")[0];
      }
      return url;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_RaizcoDivider = __nuxt_component_1$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-video" }, _attrs))} data-v-bb9e7633><h2 class="property-detail-video__title" data-v-bb9e7633>${ssrInterpolate(_ctx.$t("video"))}</h2>`);
      if (unref(propertyDetailStore).data.generalData.videoUrl) {
        _push(`<div class="property-detail-video__url-video" data-v-bb9e7633><iframe${ssrRenderAttr("src", formatVideoUrl(unref(propertyDetailStore).data.generalData.videoUrl))} name="V\xEDdeo propiedad" title="Video propiedad" class="property-detail-video__iframe" data-v-bb9e7633></iframe></div>`);
      } else {
        _push(`<!---->`);
      }
      if ((_a = unref(propertyDetailStore).data.generalData) == null ? void 0 : _a.video360Url) {
        _push(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(propertyDetailStore).data.generalData) == null ? void 0 : _b.video360Url) {
        _push(`<div class="property-detail-video__360-video" data-v-bb9e7633><iframe${ssrRenderAttr("src", formatVideoUrl(unref(propertyDetailStore).data.generalData.video360Url))} name="V\xEDdeo propiedad" title="Video propiedad" class="property-detail-video__iframe" data-v-bb9e7633></iframe></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailVideo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-bb9e7633"]]);
const DefaultIcon = "" + buildAssetsURL("raizco-marker.HmMbRrrr.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RaizcoMap",
  __ssrInlineRender: true,
  props: {
    latitude: {},
    longitude: {},
    zoom: {},
    draggableMarker: { type: Boolean },
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LMap = LMap;
      const _component_LTileLayer = LTileLayer;
      const _component_LMarker = LMarker;
      const _component_LIcon = LIcon;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "raizco-map" }, _attrs))} data-v-8236e849>`);
      _push(ssrRenderComponent(_component_LMap, {
        ref: "map",
        zoom: _ctx.zoom || 15,
        center: [_ctx.latitude || 6.244747, _ctx.longitude || -75.57482],
        "use-global-leaflet": false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_LTileLayer, {
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
              "layer-type": "base",
              name: "OpenStreetMap"
            }, null, _parent2, _scopeId));
            if (_ctx.latitude && _ctx.longitude) {
              _push2(ssrRenderComponent(_component_LMarker, {
                "lat-lng": [_ctx.latitude, _ctx.longitude],
                draggable: _ctx.draggableMarker
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_LIcon, {
                      "icon-url": _ctx.icon || unref(DefaultIcon),
                      "icon-size": [32, 55]
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_LIcon, {
                        "icon-url": _ctx.icon || unref(DefaultIcon),
                        "icon-size": [32, 55]
                      }, null, 8, ["icon-url"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_LTileLayer, {
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                "layer-type": "base",
                name: "OpenStreetMap"
              }),
              _ctx.latitude && _ctx.longitude ? (openBlock(), createBlock(_component_LMarker, {
                key: 0,
                "lat-lng": [_ctx.latitude, _ctx.longitude],
                draggable: _ctx.draggableMarker
              }, {
                default: withCtx(() => [
                  createVNode(_component_LIcon, {
                    "icon-url": _ctx.icon || unref(DefaultIcon),
                    "icon-size": [32, 55]
                  }, null, 8, ["icon-url"])
                ]),
                _: 1
              }, 8, ["lat-lng", "draggable"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoMap/RaizcoMap.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8236e849"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PropertyDetailLocation",
  __ssrInlineRender: true,
  setup(__props) {
    const propertyDetailStore = usePropertyDetailStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RaizcoMap = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "property-detail-location" }, _attrs))} data-v-3788f081><h2 class="property-detail-location__title" data-v-3788f081>${ssrInterpolate(_ctx.$t("location"))}</h2>`);
      _push(ssrRenderComponent(_component_RaizcoMap, {
        latitude: unref(propertyDetailStore).data.location.latitude,
        longitude: unref(propertyDetailStore).data.location.longitude
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyDetail/PropertyDetailLocation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3788f081"]]);
const NoImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAB1BAMAAABJ3ZU0AAAAA3NCSVQICAjb4U/gAAAAJ1BMVEX////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/X19fS0tLOzs7Kysr8EOVZAAAACXBIWXMAAAsSAAALEgHS3X78AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAABZ0RVh0Q3JlYXRpb24gVGltZQAxOC8xMC8xMbLkgf4AAAN7SURBVGiB7Zi/T9tQEMfPDiTgeEAVSyUGF5WpGahoNgbahk4ZItq3MVhVhVSJgT+AIeqcgT8gQ7q2HujQDiiDQyBKnPujene20/wgqXi2xPK+g+MX7n383t29bxIAjIyMjP4r28uTZh1/3MoRV1XqJD/aS0V6nRetoERePjQ7pqlPuaTPqia4fNK3p1SOvG01pczlsNWMvGw063gWl7Gbq2pOmdK3N09T6q0+bXuRptS+Ls1+iKaUZvrmy5CxHAtlyFSOBxOnXY7CcppGNy8pg2Y5rDe12pJKkGq1d49dHsB6rqUwOIMzOIN7fyBiyEGi4wy4xCarU0vayxdXNTiDMziDe3LcrOwXWWY7AyiEAEO6dRt0eY7YhwAR/Z8AxUgDV7wHa0y3dcKu4TiIYlzQ1MM5ERSRboNbWiFxP0Pg8/BOD+cilNEDQNpxK+Q3YxxuaeKOXGxAaUhLxIsp3LUW7hCbdbwCt9du2Cg/7Ch3HQjaQy3ceTdsByFVoh7atOlzqoLgvuAHHVz76y1WQuheuP0U5/MS/dZIB4dqPHT7Fp68GknughRXRi2ch313sEG9hkCb/oezdHA2Qjt0Ind0doZ+hfqum+LgUANHLVxvFpHPRCss0amQUkgCSxq4zTG4+wWkVoGdPnUN/oYUBzePxYmsqfuZ/y9a8DR6Nv/Dd3dyZz3C8RIXO6Xk8DDAqCFFbHGXyGAdcZDGBb6D+GdyiJNJU4pdrIRR3FMUMgaZdYMSD3CJAR+x5gTHo6U4cbHKgBZxxEN/Ha/pujMAm16KeGHTlNO7JI5wA2j1IG3EBcUuFlyDHAAOqZOZ+5V+POh2HFqtg2kc4yq3q3DsYmRvcJrg3CFd2YV5EHTce05fEie4drgCxy7GxsEPlRCHZ5U4/YFPO+W36e+x28W58ya56yzg2MUWcVRq2nPURUhx4naM+4G9FTh2sRlceSTR57hF8d8nOHE72aw7WrFZcTEu+Hmau4EEFrAZfKOn0JA/2OI4wcloKY5drEuVlZVTyGWyl25HXspUFDdK4gRXWoljF6vfwYZ8ynCrXdF1zQNaHcevUT+2+kmc4OrRShy5mEOnYghxeiOQRqFGi+MDOhXNJC6ubE8OhPfgqfDFxS6RW4/njo74zU3EX8njS4j3aZzghrAcx2IX251zlCmbm3yHeiq3MzIyMjIyWtBfOBPjrDQL9E4AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[name]-[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c, _d, _e;
    let __temp, __restore;
    const route = useRoute();
    const { $viewport } = useNuxtApp();
    const headerRef = ref(null);
    const headerIsVisible = ref(false);
    const propertyDetailStore = usePropertyDetailStore();
    [__temp, __restore] = withAsyncContext(() => propertyDetailStore.getPropertyById(route.params.id)), await __temp, __restore();
    const url = useRequestURL();
    const fullUrl = `${url.origin}${route.fullPath}`;
    if (Object.keys(propertyDetailStore.data).length) {
      useHead({
        title: ((_a = propertyDetailStore.data) == null ? void 0 : _a.name) || "",
        meta: [
          { name: "description", content: propertyDetailStore.data.description },
          { property: "og:title", content: propertyDetailStore.data.name },
          {
            property: "og:description",
            content: propertyDetailStore.data.description
          },
          {
            property: "og:image",
            content: ((_c = (_b = propertyDetailStore.data.images) == null ? void 0 : _b[0]) == null ? void 0 : _c.url) || NoImage
          },
          {
            property: "og:url",
            content: fullUrl
          },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: propertyDetailStore.data.name },
          {
            name: "twitter:description",
            content: propertyDetailStore.data.description
          },
          {
            name: "twitter:image",
            content: ((_e = (_d = propertyDetailStore.data.images) == null ? void 0 : _d[0]) == null ? void 0 : _e.url) || NoImage
          }
        ]
      });
      useSeoMeta({
        title: () => {
          var _a2;
          return `${(_a2 = propertyDetailStore.data) == null ? void 0 : _a2.name} | Raizco`;
        },
        ogTitle: () => {
          var _a2;
          return `${(_a2 = propertyDetailStore.data) == null ? void 0 : _a2.name} | Raizco`;
        },
        description: () => {
          var _a2;
          return (_a2 = propertyDetailStore.data) == null ? void 0 : _a2.description;
        },
        ogDescription: () => {
          var _a2;
          return (_a2 = propertyDetailStore.data) == null ? void 0 : _a2.description;
        },
        ogImage: () => {
          var _a2, _b2, _c2;
          return ((_c2 = (_b2 = (_a2 = propertyDetailStore.data) == null ? void 0 : _a2.images) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.url) || NoImage;
        },
        ogUrl: () => fullUrl,
        twitterTitle: () => {
          var _a2;
          return `${(_a2 = propertyDetailStore.data) == null ? void 0 : _a2.name} | Raizco`;
        },
        twitterDescription: () => {
          var _a2;
          return (_a2 = propertyDetailStore.data) == null ? void 0 : _a2.description;
        },
        twitterImage: () => {
          var _a2, _b2, _c2;
          return ((_c2 = (_b2 = (_a2 = propertyDetailStore.data) == null ? void 0 : _a2.images) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.url) || NoImage;
        }
      });
    }
    useIntersectionObserver(headerRef, ([entry]) => {
      headerIsVisible.value = entry == null ? void 0 : entry.isIntersecting;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PropertyDetailFooter = __nuxt_component_0$1;
      const _component_ContentWrapper = __nuxt_component_1$1;
      const _component_PropertyDetailHeader = __nuxt_component_2;
      const _component_PropertyImages = __nuxt_component_3;
      const _component_PropertyDetailMainFeatures = __nuxt_component_4;
      const _component_PropertyDetailFeatures = __nuxt_component_5;
      const _component_PropertyDetailContact = __nuxt_component_6;
      const _component_PropertyDetailAddress = __nuxt_component_7;
      const _component_RaizcoDivider = __nuxt_component_1$2;
      const _component_PropertyDetailVideo = __nuxt_component_9;
      const _component_PropertyDetailLocation = __nuxt_component_10;
      if (unref(propertyDetailStore).data) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-b6450568>`);
        _push(ssrRenderComponent(_component_PropertyDetailFooter, {
          show: !unref(headerIsVisible) && unref($viewport).isLessOrEquals("tablet")
        }, null, _parent));
        _push(ssrRenderComponent(_component_ContentWrapper, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2;
            if (_push2) {
              _push2(`<article class="property-detail-page" data-v-b6450568${_scopeId}><div data-v-b6450568${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PropertyDetailHeader, {
                ref_key: "headerRef",
                ref: headerRef
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PropertyImages, {
                images: unref(propertyDetailStore).data.images
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_PropertyDetailMainFeatures, null, null, _parent2, _scopeId));
              _push2(`<section class="property-information" data-v-b6450568${_scopeId}><div class="property-information-wrapper" data-v-b6450568${_scopeId}><section class="property-detail-section property-detail-section--description" data-v-b6450568${_scopeId}><h2 class="property-detail-section__title" data-v-b6450568${_scopeId}>${ssrInterpolate(_ctx.$t("description"))}</h2><div data-v-b6450568${_scopeId}>${(_a2 = unref(propertyDetailStore).data.description) != null ? _a2 : ""}</div></section>`);
              _push2(ssrRenderComponent(_component_PropertyDetailFeatures, null, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (unref($viewport).isGreaterOrEquals("desktop")) {
                _push2(`<div class="contact-wrapper" data-v-b6450568${_scopeId}><hr class="vertical-divider" data-v-b6450568${_scopeId}>`);
                _push2(ssrRenderComponent(_component_PropertyDetailContact, null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</section>`);
              if (unref(propertyDetailStore).data.location.address) {
                _push2(ssrRenderComponent(_component_PropertyDetailAddress, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent2, _scopeId));
              if (unref(propertyDetailStore).data.generalData.videoUrl || unref(propertyDetailStore).data.generalData.video360Url) {
                _push2(ssrRenderComponent(_component_PropertyDetailVideo, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_component_PropertyDetailLocation, null, null, _parent2, _scopeId));
              _push2(`</div></article>`);
            } else {
              return [
                createVNode("article", { class: "property-detail-page" }, [
                  createVNode("div", null, [
                    createVNode(_component_PropertyDetailHeader, {
                      ref_key: "headerRef",
                      ref: headerRef
                    }, null, 512),
                    createVNode(_component_PropertyImages, {
                      images: unref(propertyDetailStore).data.images
                    }, null, 8, ["images"]),
                    createVNode(_component_PropertyDetailMainFeatures),
                    createVNode("section", { class: "property-information" }, [
                      createVNode("div", { class: "property-information-wrapper" }, [
                        createVNode("section", { class: "property-detail-section property-detail-section--description" }, [
                          createVNode("h2", { class: "property-detail-section__title" }, toDisplayString(_ctx.$t("description")), 1),
                          createVNode("div", {
                            innerHTML: unref(propertyDetailStore).data.description
                          }, null, 8, ["innerHTML"])
                        ]),
                        createVNode(_component_PropertyDetailFeatures)
                      ]),
                      unref($viewport).isGreaterOrEquals("desktop") ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "contact-wrapper"
                      }, [
                        createVNode("hr", { class: "vertical-divider" }),
                        createVNode(_component_PropertyDetailContact)
                      ])) : createCommentVNode("", true)
                    ]),
                    unref(propertyDetailStore).data.location.address ? (openBlock(), createBlock(_component_PropertyDetailAddress, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_component_RaizcoDivider),
                    unref(propertyDetailStore).data.generalData.videoUrl || unref(propertyDetailStore).data.generalData.video360Url ? (openBlock(), createBlock(_component_PropertyDetailVideo, { key: 1 })) : createCommentVNode("", true),
                    createVNode(_component_PropertyDetailLocation)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/inmueble/[name]-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _name___id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6450568"]]);

export { _name___id_ as default };
//# sourceMappingURL=_name_-_id_-CQrQcxC3.mjs.map
