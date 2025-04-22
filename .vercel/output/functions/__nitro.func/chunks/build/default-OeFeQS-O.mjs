import { b as buildAssetsURL } from '../_/nitro.mjs';
import { useSSRContext, defineComponent, toRef, computed, mergeProps, unref, useId, ref, watch, isRef, withCtx, renderSlot, createVNode, toDisplayString, resolveComponent, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { b as usePropertiesStore, _ as _sfc_main$7 } from './properties-rhRhWshR.mjs';
import { q as mergeConfig, s as appConfig, u as useHead, A as __nuxt_component_1$1, g as useRoute, _ as _export_sfc, b as navigateTo } from './server.mjs';
import { P as PropertyManagementType } from './propertyManagement.type-D2tDZXBb.mjs';
import { Y as Ye, G as Ge, S as Se, h as he, u as useUI, s as s$4 } from './selectMenu-BD8lGyNx.mjs';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import '@fortawesome/fontawesome-svg-core';
import 'pinia';
import './asyncData-_Tu7Jwpj.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'tailwind-merge';
import '@iconify/vue';
import '@fortawesome/free-solid-svg-icons';

const slideover = {
  wrapper: "fixed inset-0 flex z-50",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-in-out duration-500",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  base: "relative flex-1 flex flex-col w-full focus:outline-none",
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "",
  padding: "",
  shadow: "shadow-xl",
  width: "w-screen max-w-md",
  height: "h-screen max-h-96",
  translate: {
    base: "translate-x-0",
    left: "-translate-x-full rtl:translate-x-full",
    right: "translate-x-full rtl:-translate-x-full",
    top: "-translate-y-full",
    bottom: "translate-y-full"
  },
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "transform transition ease-in-out duration-300",
    leave: "transform transition ease-in-out duration-200"
  }
};
const RaizcoLogo = "" + buildAssetsURL("raizco-logo.D4IEtP7i.png");
function useHeader() {
  const route = useRoute();
  const propertiesStore = usePropertiesStore();
  function onClickOption(management) {
    propertiesStore.resetFilters();
    propertiesStore.filters.propertyManagement = management;
    navigateTo(`/propiedades/${management}`);
  }
  function goHome() {
  }
  function validateChosenOption(value) {
    const currentManagement = route.params.business;
    return currentManagement === value;
  }
  return { onClickOption, goHome, validateChosenOption };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DesktopHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { onClickOption, validateChosenOption, goHome } = useHeader();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-header" }, _attrs))} data-v-5ff8b922><figure class="app-header-logo" data-v-5ff8b922><img class="app-header-logo__image"${ssrRenderAttr("src", unref(RaizcoLogo))} alt="" data-v-5ff8b922></figure><ul class="header-options" data-v-5ff8b922><li class="${ssrRenderClass([{
        "header-options__item--selected": unref(validateChosenOption)(
          unref(PropertyManagementType).SALE
        )
      }, "header-options__item"])}" data-v-5ff8b922>${ssrInterpolate(_ctx.$t("sale").toUpperCase())}</li><li class="${ssrRenderClass([{
        "header-options__item--selected": unref(validateChosenOption)(
          unref(PropertyManagementType).RENT
        )
      }, "header-options__item"])}" data-v-5ff8b922>${ssrInterpolate(_ctx.$t("rent").toUpperCase())}</li></ul></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/DesktopHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5ff8b922"]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.slideover, slideover);
const _sfc_main$5 = defineComponent({
  components: {
    HDialog: Ye,
    HDialogPanel: Ge,
    TransitionRoot: Se,
    TransitionChild: he
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    appear: {
      type: Boolean,
      default: false
    },
    side: {
      type: String,
      default: "right",
      validator: (value) => ["left", "right", "top", "bottom"].includes(value)
    },
    overlay: {
      type: Boolean,
      default: true
    },
    transition: {
      type: Boolean,
      default: true
    },
    preventClose: {
      type: Boolean,
      default: false
    },
    class: {
      type: [String, Object, Array],
      default: () => ""
    },
    ui: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "close", "close-prevented", "after-leave"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("slideover", toRef(props, "ui"), config, toRef(props, "class"));
    const isOpen = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const transitionClass = computed(() => {
      if (!props.transition) {
        return {};
      }
      let enterFrom, leaveTo;
      switch (props.side) {
        case "left":
          enterFrom = ui.value.translate.left;
          leaveTo = ui.value.translate.left;
          break;
        case "right":
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
          break;
        case "top":
          enterFrom = ui.value.translate.top;
          leaveTo = ui.value.translate.top;
          break;
        case "bottom":
          enterFrom = ui.value.translate.bottom;
          leaveTo = ui.value.translate.bottom;
          break;
        default:
          enterFrom = ui.value.translate.right;
          leaveTo = ui.value.translate.right;
      }
      return {
        ...ui.value.transition,
        enterFrom,
        enterTo: ui.value.translate.base,
        leaveFrom: ui.value.translate.base,
        leaveTo
      };
    });
    const sideType = computed(() => {
      switch (props.side) {
        case "left":
          return "horizontal";
        case "right":
          return "horizontal";
        case "top":
          return "vertical";
        case "bottom":
          return "vertical";
        default:
          return "right";
      }
    });
    function close(value) {
      if (props.preventClose) {
        emit("close-prevented");
        return;
      }
      isOpen.value = value;
      emit("close");
    }
    const onAfterLeave = () => {
      emit("after-leave");
    };
    s$4(() => useId("$zSEivjycv8"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      sideType,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    as: "template",
    appear: _ctx.appear,
    show: _ctx.isOpen,
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
        }, _ctx.attrs, { onClose: _ctx.close }), {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if (_ctx.overlay) {
                _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="${ssrRenderClass([_ctx.ui.overlay.base, _ctx.ui.overlay.background])}"${_scopeId3}></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                        }, null, 2)
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(`<!---->`);
              }
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                        } else {
                          return [
                            renderSlot(_ctx.$slots, "default")
                          ];
                        }
                      }),
                      _: 3
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_HDialogPanel, {
                        class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ];
                  }
                }),
                _: 3
              }, _parent3, _scopeId2));
            } else {
              return [
                _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                  key: 0,
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.ui.overlay.transition, {
                  class: _ctx.ui.overlay.transition.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                    }, null, 2)
                  ]),
                  _: 1
                }, 16, ["appear", "class"])) : createCommentVNode("", true),
                createVNode(_component_TransitionChild, mergeProps({
                  as: "template",
                  appear: _ctx.appear
                }, _ctx.transitionClass, {
                  class: _ctx.transitionClass.enterFrom
                }), {
                  default: withCtx(() => [
                    createVNode(_component_HDialogPanel, {
                      class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default")
                      ]),
                      _: 3
                    }, 8, ["class"])
                  ]),
                  _: 3
                }, 16, ["appear", "class"])
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: [_ctx.ui.wrapper, { "justify-end": _ctx.side === "right" }, { "items-end": _ctx.side === "bottom" }]
          }, _ctx.attrs, { onClose: _ctx.close }), {
            default: withCtx(() => [
              _ctx.overlay ? (openBlock(), createBlock(_component_TransitionChild, mergeProps({
                key: 0,
                as: "template",
                appear: _ctx.appear
              }, _ctx.ui.overlay.transition, {
                class: _ctx.ui.overlay.transition.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode("div", {
                    class: [_ctx.ui.overlay.base, _ctx.ui.overlay.background]
                  }, null, 2)
                ]),
                _: 1
              }, 16, ["appear", "class"])) : createCommentVNode("", true),
              createVNode(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx(() => [
                  createVNode(_component_HDialogPanel, {
                    class: [_ctx.ui.base, _ctx.sideType === "horizontal" ? [_ctx.ui.width, "h-full"] : [_ctx.ui.height, "w-full"], _ctx.ui.background, _ctx.ui.ring, _ctx.ui.rounded, _ctx.ui.padding, _ctx.ui.shadow]
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              }, 16, ["appear", "class"])
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Slideover.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CollapseSidebar",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "closed"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const modalVisibility = ref(false);
    watch(
      () => props.modelValue,
      (newValue) => {
        modalVisibility.value = newValue;
      }
    );
    watch(
      () => modalVisibility.value,
      () => {
        emits("update:modelValue", modalVisibility.value);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_USlideover = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_USlideover, mergeProps({
        modelValue: unref(modalVisibility),
        "onUpdate:modelValue": ($event) => isRef(modalVisibility) ? modalVisibility.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CollapseSidebar/CollapseSidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const RaizcoLogoVertical = "" + buildAssetsURL("LOGOB4.4YkLHDkH.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ResponsiveHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { onClickOption, validateChosenOption, goHome } = useHeader();
    const openSidebar = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$7;
      const _component_CollapseSidebar = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-header" }, _attrs))} data-v-dc308ac6><figure class="app-header-logo" data-v-dc308ac6><img class="app-header-logo__image"${ssrRenderAttr("src", unref(RaizcoLogo))} alt="raizco-logo" data-v-dc308ac6></figure><button class="header-menu-button" data-v-dc308ac6>`);
      _push(ssrRenderComponent(_component_font_awesome, { icon: ["fas", "bars"] }, null, _parent));
      _push(`</button>`);
      _push(ssrRenderComponent(_component_CollapseSidebar, {
        modelValue: unref(openSidebar),
        "onUpdate:modelValue": ($event) => isRef(openSidebar) ? openSidebar.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="header-menu-logo" data-v-dc308ac6${_scopeId}><img class="header-menu-logo__image"${ssrRenderAttr("src", unref(RaizcoLogoVertical))} alt="raizco-logo" data-v-dc308ac6${_scopeId}></div><ul class="header-options" data-v-dc308ac6${_scopeId}><li class="${ssrRenderClass([{
              "header-options__item--selected": unref(validateChosenOption)(
                unref(PropertyManagementType).SALE
              )
            }, "header-options__item"])}" data-v-dc308ac6${_scopeId}>${ssrInterpolate(_ctx.$t("sale").toUpperCase())}</li><li class="${ssrRenderClass([{
              "header-options__item--selected": unref(validateChosenOption)(
                unref(PropertyManagementType).RENT
              )
            }, "header-options__item"])}" data-v-dc308ac6${_scopeId}>${ssrInterpolate(_ctx.$t("rent").toUpperCase())}</li></ul>`);
          } else {
            return [
              createVNode("div", { class: "header-menu-logo" }, [
                createVNode("img", {
                  class: "header-menu-logo__image",
                  src: unref(RaizcoLogoVertical),
                  alt: "raizco-logo"
                }, null, 8, ["src"])
              ]),
              createVNode("ul", { class: "header-options" }, [
                createVNode("li", {
                  class: ["header-options__item", {
                    "header-options__item--selected": unref(validateChosenOption)(
                      unref(PropertyManagementType).SALE
                    )
                  }],
                  onClick: ($event) => (unref(onClickOption)(unref(PropertyManagementType).SALE), openSidebar.value = false)
                }, toDisplayString(_ctx.$t("sale").toUpperCase()), 11, ["onClick"]),
                createVNode("li", {
                  class: ["header-options__item", {
                    "header-options__item--selected": unref(validateChosenOption)(
                      unref(PropertyManagementType).RENT
                    )
                  }],
                  onClick: ($event) => (unref(onClickOption)(unref(PropertyManagementType).RENT), openSidebar.value = false)
                }, toDisplayString(_ctx.$t("rent").toUpperCase()), 11, ["onClick"])
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/ResponsiveHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dc308ac6"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_DesktopHeader = __nuxt_component_0$2;
  const _component_ResponsiveHeader = __nuxt_component_1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_DesktopHeader, { class: "header__desktop" }, null, _parent));
  _push(ssrRenderComponent(_component_ResponsiveHeader, { class: "header__responsive" }, null, _parent));
  _push(`</header>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome = _sfc_main$7;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-af0de633><section class="footer-content" data-v-af0de633><article class="contact-info" data-v-af0de633><h4 class="contact-info__title" data-v-af0de633>Informaci\xF3n de Contacto</h4><ul class="contact-info-list" data-v-af0de633><li class="contact-info-list__item" data-v-af0de633>`);
  _push(ssrRenderComponent(_component_font_awesome, {
    class: "property-location__icon",
    icon: ["fas", "location-pin"]
  }, null, _parent));
  _push(`<span data-v-af0de633>Calle 7 #54-56 Medell\xEDn (Campo Amor)</span></li><li class="contact-info-list__item" data-v-af0de633>`);
  _push(ssrRenderComponent(_component_font_awesome, {
    class: "property-location__icon",
    icon: ["fas", "phone"]
  }, null, _parent));
  _push(`<span data-v-af0de633>310 522 7265</span></li><li class="contact-info-list__item" data-v-af0de633>`);
  _push(ssrRenderComponent(_component_font_awesome, {
    class: "property-location__icon",
    icon: ["fas", "clock"]
  }, null, _parent));
  _push(`<span data-v-af0de633>Lun - Sab 9AM - 6PM</span></li></ul></article></section><section class="footer-brand" data-v-af0de633><div class="col-12" data-v-af0de633><p class="text-center text-white" data-v-af0de633> \xA9 2025 todos los derechos reservados por RaizCo </p></div></section></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-af0de633"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      htmlAttrs: {
        class: "light-mode"
      },
      link: [
        { rel: "icon", type: "image/png", href: "/raizco-logo-192.png" }
      ]
    });
    const propertiesStore = usePropertiesStore();
    propertiesStore.getPicklists();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1$1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-layout" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      if (Object.keys(unref(propertiesStore).picklists).length) {
        _push(`<section class="main-content">`);
        _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-OeFeQS-O.mjs.map
