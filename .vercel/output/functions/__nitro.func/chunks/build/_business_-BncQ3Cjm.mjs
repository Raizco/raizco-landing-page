import { g as generateComponentId, b as __nuxt_component_0$6, c as __nuxt_component_1$2, _ as __nuxt_component_2$2, a as __nuxt_component_1$1$1 } from './RaizcoDivider-DIP3PRU2.mjs';
import { b as usePropertiesStore, _ as _sfc_main$g } from './properties-rhRhWshR.mjs';
import { useSSRContext, defineComponent, toRef, computed, useId, ref, mergeProps, watch, unref, isRef, withCtx, openBlock, createBlock, createVNode, toDisplayString, createCommentVNode, renderSlot, resolveDirective, getCurrentInstance, provide, inject, Fragment, renderList, resolveDynamicComponent, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { q as mergeConfig, s as appConfig, _ as _export_sfc, a as useRouter, c as useNuxtApp, g as useRoute, i as useSeoMeta } from './server.mjs';
import { Y as Ye, G as Ge, S as Se, h as he, u as useUI, s as s$4 } from './selectMenu-BD8lGyNx.mjs';
import { _ as __nuxt_component_0$7 } from './nuxt-link-B9G7Wlt6.mjs';
import { A as isEqual, F as diff } from '../_/nitro.mjs';
import __nuxt_component_0$8 from './index-Bg46Vx3Y.mjs';
import { twMerge, twJoin } from 'tailwind-merge';
import '@fortawesome/fontawesome-svg-core';
import 'pinia';
import './asyncData-_Tu7Jwpj.mjs';
import './propertyManagement.type-D2tDZXBb.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import '@fortawesome/free-solid-svg-icons';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';
import '@iconify/utils/lib/css/icon';

const nuxtLinkProps = {
  to: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  href: {
    type: [String, Object],
    default: void 0,
    required: false
  },
  // Attributes
  target: {
    type: String,
    default: void 0,
    required: false
  },
  rel: {
    type: String,
    default: void 0,
    required: false
  },
  noRel: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Prefetching
  prefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  noPrefetch: {
    type: Boolean,
    default: void 0,
    required: false
  },
  // Styling
  activeClass: {
    type: String,
    default: void 0,
    required: false
  },
  exactActiveClass: {
    type: String,
    default: void 0,
    required: false
  },
  prefetchedClass: {
    type: String,
    default: void 0,
    required: false
  },
  // Vue Router's `<RouterLink>` additional props
  replace: {
    type: Boolean,
    default: void 0,
    required: false
  },
  ariaCurrentValue: {
    type: String,
    default: void 0,
    required: false
  },
  // Edge cases handling
  external: {
    type: Boolean,
    default: void 0,
    required: false
  }
};
const getNuxtLinkProps = (props) => {
  const keys = Object.keys(nuxtLinkProps);
  return keys.reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "RaizcoInput",
  __ssrInlineRender: true,
  props: {
    id: {},
    label: {},
    type: { default: "text" },
    placeholder: {},
    class: {},
    modelValue: {},
    icon: {},
    iconColor: {},
    disabled: { type: Boolean }
  },
  emits: [
    "update:modelValue",
    "change",
    "input",
    "blur",
    "focus",
    "enter"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    props.id || generateComponentId({ prefix: "input" });
    ref(props.modelValue || "");
    const inputFormatOptions = {
      currency: {
        separator: ".",
        prefix: "$ ",
        masked: false
      },
      thousands: {
        separator: ".",
        masked: false
      }
    };
    ref(
      inputFormatOptions[props.type]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_font_awesome = _sfc_main$g;
      const _component_ClientOnly = __nuxt_component_0$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "raizco-input" }, _attrs))} data-v-3bc415d7>`);
      if (_ctx.label) {
        _push(`<div class="raizco-input-label" data-v-3bc415d7><label class="raizco-input-label__label" htmlFor="{inputId}" data-v-3bc415d7>${ssrInterpolate(_ctx.label)}</label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "raizco-input-container--disabled": _ctx.disabled }, "raizco-input-container"])}" data-v-3bc415d7>`);
      if (_ctx.icon) {
        _push(`<span class="raizco-input__icon" data-v-3bc415d7>`);
        _push(ssrRenderComponent(_component_font_awesome, {
          icon: _ctx.icon,
          style: { color: _ctx.iconColor }
        }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoInput/RaizcoInput.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-3bc415d7"]]);
const button = {
  base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0",
  font: "font-medium",
  rounded: "rounded-md",
  truncate: "text-left break-all line-clamp-1",
  block: "w-full flex justify-center items-center",
  inline: "inline-flex items-center",
  size: {
    "2xs": "text-xs",
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-sm",
    "lg": "text-sm",
    "xl": "text-base"
  },
  gap: {
    "2xs": "gap-x-1",
    "xs": "gap-x-1.5",
    "sm": "gap-x-1.5",
    "md": "gap-x-2",
    "lg": "gap-x-2.5",
    "xl": "gap-x-2.5"
  },
  padding: {
    "2xs": "px-2 py-1",
    "xs": "px-2.5 py-1.5",
    "sm": "px-2.5 py-1.5",
    "md": "px-3 py-2",
    "lg": "px-3.5 py-2.5",
    "xl": "px-3.5 py-2.5"
  },
  square: {
    "2xs": "p-1",
    "xs": "p-1.5",
    "sm": "p-1.5",
    "md": "p-2",
    "lg": "p-2.5",
    "xl": "p-2.5"
  },
  color: {
    white: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 dark:aria-disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    gray: {
      solid: "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      ghost: "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    },
    black: {
      solid: "shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 aria-disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white dark:aria-disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
      link: "text-gray-900 dark:text-white underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400"
    }
  },
  variant: {
    solid: "shadow-sm text-white dark:text-gray-900 bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 aria-disabled:bg-{color}-500 dark:bg-{color}-400 dark:hover:bg-{color}-500 dark:disabled:bg-{color}-400 dark:aria-disabled:bg-{color}-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 dark:focus-visible:outline-{color}-400",
    outline: "ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    soft: "text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 aria-disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 dark:aria-disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    ghost: "text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent aria-disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400",
    link: "text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 aria-disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 dark:aria-disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400"
  },
  icon: {
    base: "flex-shrink-0",
    loading: "animate-spin",
    size: {
      "2xs": "h-4 w-4",
      "xs": "h-4 w-4",
      "sm": "h-5 w-5",
      "md": "h-5 w-5",
      "lg": "h-5 w-5",
      "xl": "h-6 w-6"
    }
  },
  default: {
    size: "sm",
    variant: "solid",
    color: "primary",
    loadingIcon: "i-heroicons-arrow-path-20-solid"
  }
};
const pagination = {
  wrapper: "flex items-center -space-x-px",
  base: "",
  rounded: "first:rounded-s-md last:rounded-e-md",
  default: {
    size: "sm",
    activeButton: {
      color: "primary"
    },
    inactiveButton: {
      color: "white"
    },
    firstButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-double-left-20-solid"
    },
    lastButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-double-right-20-solid"
    },
    prevButton: {
      color: "white",
      class: "rtl:[&_span:first-child]:rotate-180",
      icon: "i-heroicons-chevron-left-20-solid"
    },
    nextButton: {
      color: "white",
      class: "rtl:[&_span:last-child]:rotate-180",
      icon: "i-heroicons-chevron-right-20-solid"
    }
  }
};
const modal = {
  wrapper: "relative z-50",
  inner: "fixed inset-0 overflow-y-auto",
  container: "flex min-h-full items-end sm:items-center justify-center text-center",
  padding: "p-4 sm:p-0",
  margin: "sm:my-8",
  base: "relative text-left rtl:text-right flex flex-col",
  overlay: {
    base: "fixed inset-0 transition-opacity",
    background: "bg-gray-200/75 dark:bg-gray-800/75",
    // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
    transition: {
      enter: "ease-out duration-300",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }
  },
  background: "bg-white dark:bg-gray-900",
  ring: "",
  rounded: "rounded-lg",
  shadow: "shadow-xl",
  width: "w-full sm:max-w-lg",
  height: "",
  fullscreen: "w-screen h-screen",
  // Syntax for `<TransitionRoot>` component https://headlessui.com/v1/vue/transition#basic-example
  transition: {
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
    enterTo: "opacity-100 translate-y-0 sm:scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
    leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  }
};
const config$2 = mergeConfig(appConfig.ui.strategy, appConfig.ui.modal, modal);
const _sfc_main$e = defineComponent({
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
    fullscreen: {
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
    const { ui, attrs } = useUI("modal", toRef(props, "ui"), config$2, toRef(props, "class"));
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
      return {
        ...ui.value.transition
      };
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
    s$4(() => useId("$HAJMhYDoe7"));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isOpen,
      transitionClass,
      onAfterLeave,
      close
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TransitionRoot = resolveComponent("TransitionRoot");
  const _component_HDialog = resolveComponent("HDialog");
  const _component_TransitionChild = resolveComponent("TransitionChild");
  const _component_HDialogPanel = resolveComponent("HDialogPanel");
  _push(ssrRenderComponent(_component_TransitionRoot, mergeProps({
    appear: _ctx.appear,
    show: _ctx.isOpen,
    as: "template",
    onAfterLeave: _ctx.onAfterLeave
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_HDialog, mergeProps({
          class: _ctx.ui.wrapper
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
              _push3(`<div class="${ssrRenderClass(_ctx.ui.inner)}"${_scopeId2}><div class="${ssrRenderClass([_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding])}"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_TransitionChild, mergeProps({
                as: "template",
                appear: _ctx.appear
              }, _ctx.transitionClass, {
                class: _ctx.transitionClass.enterFrom
              }), {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_HDialogPanel, {
                      class: [
                        _ctx.ui.base,
                        _ctx.ui.background,
                        _ctx.ui.ring,
                        _ctx.ui.shadow,
                        _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                      ]
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
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
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
              _push3(`</div></div>`);
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
                createVNode("div", {
                  class: _ctx.ui.inner
                }, [
                  createVNode("div", {
                    class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                  }, [
                    createVNode(_component_TransitionChild, mergeProps({
                      as: "template",
                      appear: _ctx.appear
                    }, _ctx.transitionClass, {
                      class: _ctx.transitionClass.enterFrom
                    }), {
                      default: withCtx(() => [
                        createVNode(_component_HDialogPanel, {
                          class: [
                            _ctx.ui.base,
                            _ctx.ui.background,
                            _ctx.ui.ring,
                            _ctx.ui.shadow,
                            _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                          ]
                        }, {
                          default: withCtx(() => [
                            renderSlot(_ctx.$slots, "default")
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    }, 16, ["appear", "class"])
                  ], 2)
                ], 2)
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_HDialog, mergeProps({
            class: _ctx.ui.wrapper
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
              createVNode("div", {
                class: _ctx.ui.inner
              }, [
                createVNode("div", {
                  class: [_ctx.ui.container, !_ctx.fullscreen && _ctx.ui.padding]
                }, [
                  createVNode(_component_TransitionChild, mergeProps({
                    as: "template",
                    appear: _ctx.appear
                  }, _ctx.transitionClass, {
                    class: _ctx.transitionClass.enterFrom
                  }), {
                    default: withCtx(() => [
                      createVNode(_component_HDialogPanel, {
                        class: [
                          _ctx.ui.base,
                          _ctx.ui.background,
                          _ctx.ui.ring,
                          _ctx.ui.shadow,
                          _ctx.fullscreen ? _ctx.ui.fullscreen : [_ctx.ui.width, _ctx.ui.height, _ctx.ui.rounded, _ctx.ui.margin]
                        ]
                      }, {
                        default: withCtx(() => [
                          renderSlot(_ctx.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  }, 16, ["appear", "class"])
                ], 2)
              ], 2)
            ]),
            _: 3
          }, 16, ["class", "onClose"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/overlays/Modal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "RaizcoModal",
  __ssrInlineRender: true,
  props: {
    modelValue: { type: Boolean },
    closeButton: { type: Boolean },
    header: { type: Boolean },
    title: {},
    fullscreen: { type: Boolean }
  },
  emits: ["update:modelValue", "closed"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const modalVisibility = ref(false);
    watch(
      () => props.modelValue,
      () => {
        modalVisibility.value = props.modelValue;
      }
    );
    watch(
      () => modalVisibility.value,
      () => {
        emits("update:modelValue", modalVisibility.value);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UModal = __nuxt_component_0$5;
      const _component_ClientOnly = __nuxt_component_0$6;
      const _component_font_awesome = _sfc_main$g;
      const _component_RaizcoDivider = __nuxt_component_1$2;
      _push(ssrRenderComponent(_component_UModal, mergeProps({
        modelValue: unref(modalVisibility),
        "onUpdate:modelValue": ($event) => isRef(modalVisibility) ? modalVisibility.value = $event : null,
        fullscreen: _ctx.fullscreen
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.header) {
              _push2(`<header class="raizco-modal-header" data-v-d3e54cb4${_scopeId}><div class="raizco-modal-header__content-wrapper" data-v-d3e54cb4${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
              _push2(`</div>`);
              if (_ctx.header) {
                _push2(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</header>`);
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.header ? (openBlock(), createBlock("header", {
                key: 0,
                class: "raizco-modal-header"
              }, [
                createVNode("div", { class: "raizco-modal-header__content-wrapper" }, [
                  createVNode(_component_ClientOnly, null, {
                    default: withCtx(() => [
                      _ctx.title ? (openBlock(), createBlock("h2", {
                        key: 0,
                        class: "raizco-modal-header__title"
                      }, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
                      _ctx.closeButton ? (openBlock(), createBlock("button", {
                        key: 1,
                        class: "raizco-modal-header__close-button",
                        onClick: ($event) => modalVisibility.value = !unref(modalVisibility)
                      }, [
                        createVNode(_component_font_awesome, { icon: ["fas", "xmark"] })
                      ], 8, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _ctx.header ? (openBlock(), createBlock(_component_RaizcoDivider, { key: 0 })) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoModal/RaizcoModal.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-d3e54cb4"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RaizcoSelect",
  __ssrInlineRender: true,
  props: {
    id: {},
    tabindex: {},
    options: {},
    class: {},
    modelValue: {},
    placeholder: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    computed(() => {
      var _a;
      return ((_a = selected.value) == null ? void 0 : _a.label) || props.placeholder || "Seleccionar";
    });
    computed(() => {
      if (!selectedMultiple.value.length) {
        return props.placeholder || "Seleccionar";
      }
      return selectedMultiple.value.map((item) => item.label).join(", ");
    });
    props.id || generateComponentId({ prefix: "select" });
    const selected = ref(setDefaultValue());
    const selectedMultiple = ref(setDefaultMultipleValue());
    ref(false);
    function setDefaultMultipleValue() {
      if (!props.modelValue) {
        return [];
      }
      return props.modelValue;
    }
    function setDefaultValue() {
      let defaultValue = void 0;
      if (!props.modelValue) {
        return defaultValue;
      }
      defaultValue = props.options.find(
        (option) => option.value === props.modelValue.value
      );
      return defaultValue;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$6;
      resolveDirective("click-outside");
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoSelect/RaizcoSelect.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-5917dae3"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "PropertyValueFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const propertiesStore = usePropertiesStore();
    function onValueFromChange(value) {
      propertiesStore.filters.valueFrom = value;
    }
    function onValueToChange(value) {
      propertiesStore.filters.valueTo = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RaizcoInput = __nuxt_component_1$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "filter-item" }, _attrs))} data-v-243bb3ba><h3 class="filter-item__title" data-v-243bb3ba>${ssrInterpolate(_ctx.$t("propertyValue"))}:</h3><div class="filter-item__property-value" data-v-243bb3ba>`);
      _push(ssrRenderComponent(_component_RaizcoInput, {
        onChange: onValueFromChange,
        placeholder: _ctx.$t("priceFrom"),
        type: "currency",
        modelValue: unref(propertiesStore).filters.valueFrom,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.valueFrom = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_RaizcoInput, {
        onChange: onValueToChange,
        placeholder: _ctx.$t("priceTo"),
        type: "currency",
        modelValue: unref(propertiesStore).filters.valueTo,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.valueTo = $event
      }, null, _parent));
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filters/PropertyValueFilter.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-243bb3ba"]]);
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RaizcoMultipleSelector",
  __ssrInlineRender: true,
  props: {
    id: {},
    options: {},
    modelValue: {},
    disabled: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    props.id || generateComponentId({ prefix: "input" });
    ref(setDefaultValue());
    function setDefaultValue() {
      const defaultOptions = props.options.filter(
        (option) => {
          var _a;
          return (_a = props.modelValue) == null ? void 0 : _a.some((item) => item.value === option.value);
        }
      );
      return defaultOptions;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$6;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoMultipleSelector/RaizcoMultipleSelector.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-9c712cf7"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PropertyAreaFilter",
  __ssrInlineRender: true,
  setup(__props) {
    const propertiesStore = usePropertiesStore();
    function onAreaFromChange(value) {
      propertiesStore.filters.totalAreaFrom = value;
    }
    function onAreaToChange(value) {
      propertiesStore.filters.totalAreaTo = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RaizcoInput = __nuxt_component_1$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "filter-item" }, _attrs))} data-v-58989cbc><h3 class="filter-item__title" data-v-58989cbc>${ssrInterpolate(_ctx.$t("propertyArea"))}:</h3><div class="filter-item__property-area" data-v-58989cbc>`);
      _push(ssrRenderComponent(_component_RaizcoInput, {
        onChange: onAreaFromChange,
        type: "number",
        placeholder: _ctx.$t("areaFrom"),
        modelValue: unref(propertiesStore).filters.totalAreaFrom,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.totalAreaFrom = $event
      }, null, _parent));
      _push(ssrRenderComponent(_component_RaizcoInput, {
        onChange: onAreaToChange,
        type: "number",
        placeholder: _ctx.$t("areaTo"),
        modelValue: unref(propertiesStore).filters.totalAreaTo,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.totalAreaTo = $event
      }, null, _parent));
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filters/PropertyAreaFilter.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-58989cbc"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Filters",
  __ssrInlineRender: true,
  emits: ["filtersApplied"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const propertiesStore = usePropertiesStore();
    function onPropertyTypeChange(data) {
      propertiesStore.filters.propertyType = data;
    }
    function onInternalFeaturesChange(data) {
      propertiesStore.filters.internalFeatures = data;
    }
    function onExternalFeaturesChange(data) {
      propertiesStore.filters.externalFeatures = data;
    }
    function onChangeRooms(value) {
      propertiesStore.filters.bedrooms = value;
    }
    function onChangeBathrooms(value) {
      propertiesStore.filters.bathrooms = value;
    }
    function onChangeGarages(value) {
      propertiesStore.filters.garages = value;
    }
    function onApplyFilters() {
      propertiesStore.page = 1;
      propertiesStore.getPropertiesWithFilters();
      emits("filtersApplied");
    }
    const multipleSelectorOptions = [
      {
        label: "1",
        value: "1"
      },
      {
        label: "2",
        value: "2"
      },
      {
        label: "3",
        value: "3"
      },
      {
        label: "4",
        value: "4"
      },
      {
        label: "5+",
        value: "5"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RaizcoSelect = __nuxt_component_0$4;
      const _component_RaizcoDivider = __nuxt_component_1$2;
      const _component_PropertyValueFilter = __nuxt_component_2$1;
      const _component_RaizcoMultipleSelector = __nuxt_component_3$1;
      const _component_PropertyAreaFilter = __nuxt_component_4$1;
      const _component_RaizcoButton = __nuxt_component_2$2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "filters" }, _attrs))} data-v-2911cd81><h2 class="filters__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("filters"))}</h2><section class="filters__content" data-v-2911cd81><div class="filters-wrapper" data-v-2911cd81><article data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("propertyType"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoSelect, {
        options: unref(propertiesStore).picklists.propertyType,
        multiple: "",
        onChange: onPropertyTypeChange,
        modelValue: unref(propertiesStore).filters.propertyType,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.propertyType = $event
      }, null, _parent));
      _push(`</article></div>`);
      _push(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent));
      _push(`<div class="filters-wrapper" data-v-2911cd81>`);
      _push(ssrRenderComponent(_component_PropertyValueFilter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent));
      _push(`<div class="filters-wrapper" data-v-2911cd81><article class="filter-item" data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("rooms"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoMultipleSelector, {
        options: multipleSelectorOptions,
        modelValue: unref(propertiesStore).filters.bedrooms,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.bedrooms = $event,
        onChange: onChangeRooms
      }, null, _parent));
      _push(`</article><article class="filter-item" data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("bathrooms"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoMultipleSelector, {
        options: multipleSelectorOptions,
        modelValue: unref(propertiesStore).filters.bathrooms,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.bathrooms = $event,
        onChange: onChangeBathrooms
      }, null, _parent));
      _push(`</article><article class="filter-item" data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("garage"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoMultipleSelector, {
        options: multipleSelectorOptions,
        modelValue: unref(propertiesStore).filters.garages,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.garages = $event,
        onChange: onChangeGarages
      }, null, _parent));
      _push(`</article>`);
      _push(ssrRenderComponent(_component_PropertyAreaFilter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_RaizcoDivider, null, null, _parent));
      _push(`<article data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("internalFeatures"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoSelect, {
        multiple: "",
        options: unref(propertiesStore).picklists.features.internalFeatures,
        placeholder: _ctx.$t("internalFeatures"),
        onChange: onInternalFeaturesChange,
        modelValue: unref(propertiesStore).filters.internalFeatures,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.internalFeatures = $event
      }, null, _parent));
      _push(`</article><article data-v-2911cd81><h3 class="filter-item__title" data-v-2911cd81>${ssrInterpolate(_ctx.$t("externalFeatures"))}:</h3>`);
      _push(ssrRenderComponent(_component_RaizcoSelect, {
        multiple: "",
        options: unref(propertiesStore).picklists.features.externalFeatures,
        placeholder: _ctx.$t("externalFeatures"),
        onChange: onExternalFeaturesChange,
        modelValue: unref(propertiesStore).filters.externalFeatures,
        "onUpdate:modelValue": ($event) => unref(propertiesStore).filters.externalFeatures = $event
      }, null, _parent));
      _push(`</article><div class="apply-filters" data-v-2911cd81>`);
      _push(ssrRenderComponent(_component_RaizcoButton, {
        text: _ctx.$t("applyFilters"),
        onClick: onApplyFilters
      }, null, _parent));
      _push(`</div></section></nav>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filters/Filters.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-2911cd81"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "FiltersBar",
  __ssrInlineRender: true,
  setup(__props) {
    const propertiesStore = usePropertiesStore();
    const filtersMovalVisibility = ref(false);
    function onClickFiltersButton() {
      filtersMovalVisibility.value = !filtersMovalVisibility.value;
    }
    function fetchPropertiesByName(value) {
      propertiesStore.page = 1;
      propertiesStore.filters.propertyName = value;
      propertiesStore.getPropertiesWithFilters();
    }
    function onChangeInput(value) {
      propertiesStore.filters.propertyName = value;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentWrapper = __nuxt_component_1$1$1;
      const _component_RaizcoInput = __nuxt_component_1$1;
      const _component_RaizcoButton = __nuxt_component_2$2;
      const _component_RaizcoModal = __nuxt_component_3$2;
      const _component_Filters = __nuxt_component_2;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "filters-bar" }, _attrs))} data-v-aa9c727f>`);
      _push(ssrRenderComponent(_component_ContentWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="filters-bar__content" data-v-aa9c727f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RaizcoInput, {
              placeholder: _ctx.$t("searchByKeyWord"),
              icon: ["fas", "magnifying-glass"],
              iconColor: "#f6b800",
              onEnter: fetchPropertiesByName,
              onChange: onChangeInput
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_RaizcoButton, {
              class: "filters-button",
              text: _ctx.$t("filters"),
              prefixIcon: ["fas", "sliders"],
              onClick: onClickFiltersButton
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", { class: "filters-bar__content" }, [
                createVNode(_component_RaizcoInput, {
                  placeholder: _ctx.$t("searchByKeyWord"),
                  icon: ["fas", "magnifying-glass"],
                  iconColor: "#f6b800",
                  onEnter: fetchPropertiesByName,
                  onChange: onChangeInput
                }, null, 8, ["placeholder"]),
                createVNode(_component_RaizcoButton, {
                  class: "filters-button",
                  text: _ctx.$t("filters"),
                  prefixIcon: ["fas", "sliders"],
                  onClick: onClickFiltersButton
                }, null, 8, ["text"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_RaizcoModal, {
        modelValue: unref(filtersMovalVisibility),
        "onUpdate:modelValue": ($event) => isRef(filtersMovalVisibility) ? filtersMovalVisibility.value = $event : null,
        header: "",
        title: _ctx.$t("filters"),
        closeButton: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Filters, {
              onFiltersApplied: ($event) => filtersMovalVisibility.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Filters, {
                onFiltersApplied: ($event) => filtersMovalVisibility.value = false
              }, null, 8, ["onFiltersApplied"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Filters/FiltersBar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-aa9c727f"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PropertyCard",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$6;
      _push(ssrRenderComponent(_component_ClientOnly, _attrs, {}, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyCard/PropertyCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-881bc2e1"]]);
const _sfc_main$5 = defineComponent({
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    as: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: null
    },
    active: {
      type: Boolean,
      default: void 0
    },
    exact: {
      type: Boolean,
      default: false
    },
    exactQuery: {
      type: [Boolean, String],
      default: false
    },
    exactHash: {
      type: Boolean,
      default: false
    },
    inactiveClass: {
      type: String,
      default: void 0
    }
  },
  setup(props) {
    function isPartiallyEqual(item1, item2) {
      const diffedKeys = diff(item1, item2).reduce((filtered, q) => {
        if (q.type === "added") {
          filtered.push(q.key);
        }
        return filtered;
      }, []);
      return isEqual(item1, item2, { excludeKeys: (key) => diffedKeys.includes(key) });
    }
    function resolveLinkClass(route, $route, { isActive, isExactActive }) {
      if (props.exactQuery === "partial") {
        if (!isPartiallyEqual(route.query, $route.query)) return props.inactiveClass;
      } else if (props.exactQuery === true) {
        if (!isEqual(route.query, $route.query)) return props.inactiveClass;
      }
      if (props.exactHash && route.hash !== $route.hash) {
        return props.inactiveClass;
      }
      if (props.exact && isExactActive) {
        return props.activeClass;
      }
      if (!props.exact && isActive) {
        return props.activeClass;
      }
      return props.inactiveClass;
    }
    return {
      resolveLinkClass
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$7;
  if (!_ctx.to) {
    ssrRenderVNode(_push, createVNode(resolveDynamicComponent(_ctx.as), mergeProps({
      type: _ctx.type,
      disabled: _ctx.disabled
    }, _ctx.$attrs, {
      class: _ctx.active ? _ctx.activeClass : _ctx.inactiveClass
    }, _attrs), {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active }, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default", { isActive: _ctx.active })
          ];
        }
      }),
      _: 3
    }), _parent);
  } else {
    _push(ssrRenderComponent(_component_NuxtLink, mergeProps(_ctx.$props, { custom: "" }, _attrs), {
      default: withCtx(({ route, href, target, rel, navigate, isActive, isExactActive, isExternal }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<a${ssrRenderAttrs(mergeProps(_ctx.$attrs, {
            href: !_ctx.disabled ? href : void 0,
            "aria-disabled": _ctx.disabled ? "true" : void 0,
            role: _ctx.disabled ? "link" : void 0,
            rel,
            target,
            class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
            tabindex: _ctx.disabled ? -1 : void 0
          }))}${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive }, null, _push2, _parent2, _scopeId);
          _push2(`</a>`);
        } else {
          return [
            createVNode("a", mergeProps(_ctx.$attrs, {
              href: !_ctx.disabled ? href : void 0,
              "aria-disabled": _ctx.disabled ? "true" : void 0,
              role: _ctx.disabled ? "link" : void 0,
              rel,
              target,
              class: _ctx.active !== void 0 ? _ctx.active ? _ctx.activeClass : _ctx.inactiveClass : _ctx.resolveLinkClass(route, _ctx.$route, { isActive, isExactActive }),
              tabindex: _ctx.disabled ? -1 : void 0,
              onClick: (e) => !isExternal && !_ctx.disabled && navigate(e)
            }), [
              renderSlot(_ctx.$slots, "default", { isActive: _ctx.active !== void 0 ? _ctx.active : _ctx.exact ? isExactActive : isActive })
            ], 16, ["href", "aria-disabled", "role", "rel", "target", "tabindex", "onClick"])
          ];
        }
      }),
      _: 3
    }, _parent));
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Link.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: null
    },
    size: {
      type: [Number, String],
      required: false,
      default: null
    },
    customize: {
      type: Function,
      required: false,
      default: null
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$8;
  _push(ssrRenderComponent(_component_Icon, mergeProps(_ctx.$props, _attrs), null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Icon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
function useInjectButtonGroup({ ui, props }) {
  const instance = getCurrentInstance();
  provide("ButtonGroupContextConsumer", true);
  const isParentPartOfGroup = inject("ButtonGroupContextConsumer", false);
  if (isParentPartOfGroup) {
    return {
      size: computed(() => props.size),
      rounded: computed(() => ui.value.rounded)
    };
  }
  let parent = instance.parent;
  let groupContext;
  while (parent && !groupContext) {
    if (parent.type.name === "ButtonGroup") {
      groupContext = inject(`group-${parent.uid}`);
      break;
    }
    parent = parent.parent;
  }
  const positionInGroup = computed(() => groupContext == null ? void 0 : groupContext.value.children.indexOf(instance));
  return {
    size: computed(() => {
      var _a;
      if (!(groupContext == null ? void 0 : groupContext.value)) return props.size;
      return (_a = groupContext == null ? void 0 : groupContext.value.size) != null ? _a : ui.value.default.size;
    }),
    rounded: computed(() => {
      if (!groupContext || positionInGroup.value === -1) return ui.value.rounded;
      if (groupContext.value.children.length === 1) return groupContext.value.ui.rounded;
      if (positionInGroup.value === 0) return groupContext.value.rounded.start;
      if (positionInGroup.value === groupContext.value.children.length - 1) return groupContext.value.rounded.end;
      return "rounded-none";
    })
  };
}
const config$1 = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$3 = defineComponent({
  components: {
    UIcon: __nuxt_component_1,
    ULink: __nuxt_component_0$2
  },
  inheritAttrs: false,
  props: {
    ...nuxtLinkProps,
    type: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => config$1.default.size,
      validator(value) {
        return Object.keys(config$1.size).includes(value);
      }
    },
    color: {
      type: String,
      default: () => config$1.default.color,
      validator(value) {
        return [...appConfig.ui.colors, ...Object.keys(config$1.color)].includes(value);
      }
    },
    variant: {
      type: String,
      default: () => config$1.default.variant,
      validator(value) {
        return [
          ...Object.keys(config$1.variant),
          ...Object.values(config$1.color).flatMap((value2) => Object.keys(value2))
        ].includes(value);
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => config$1.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
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
  setup(props, { slots }) {
    const { ui, attrs } = useUI("button", toRef(props, "ui"), config$1);
    const { size, rounded } = useInjectButtonGroup({ ui, props });
    const isLeading = computed(() => {
      return props.icon && props.leading || props.icon && !props.trailing || props.loading && !props.trailing || props.leadingIcon;
    });
    const isTrailing = computed(() => {
      return props.icon && props.trailing || props.loading && props.trailing || props.trailingIcon;
    });
    const isSquare = computed(() => props.square || !slots.default && !props.label);
    const buttonClass = computed(() => {
      var _a, _b;
      const variant = ((_b = (_a = ui.value.color) == null ? void 0 : _a[props.color]) == null ? void 0 : _b[props.variant]) || ui.value.variant[props.variant];
      return twMerge(twJoin(
        ui.value.base,
        ui.value.font,
        rounded.value,
        ui.value.size[size.value],
        ui.value.gap[size.value],
        props.padded && ui.value[isSquare.value ? "square" : "padding"][size.value],
        variant == null ? void 0 : variant.replaceAll("{color}", props.color),
        props.block ? ui.value.block : ui.value.inline
      ), props.class);
    });
    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }
      return props.leadingIcon || props.icon;
    });
    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }
      return props.trailingIcon || props.icon;
    });
    const leadingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && ui.value.icon.loading
      );
    });
    const trailingIconClass = computed(() => {
      return twJoin(
        ui.value.icon.base,
        ui.value.icon.size[size.value],
        props.loading && !isLeading.value && ui.value.icon.loading
      );
    });
    const linkProps = computed(() => getNuxtLinkProps(props));
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
      linkProps
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ULink = __nuxt_component_0$2;
  const _component_UIcon = __nuxt_component_1;
  _push(ssrRenderComponent(_component_ULink, mergeProps({
    type: _ctx.type,
    disabled: _ctx.disabled || _ctx.loading,
    class: _ctx.buttonClass
  }, { ..._ctx.linkProps, ..._ctx.attrs }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "leading", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isLeading && _ctx.leadingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          if (_ctx.label) {
            _push2(`<span class="${ssrRenderClass([_ctx.truncate ? _ctx.ui.truncate : ""])}"${_scopeId}>${ssrInterpolate(_ctx.label)}</span>`);
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
        ssrRenderSlot(_ctx.$slots, "trailing", {
          disabled: _ctx.disabled,
          loading: _ctx.loading
        }, () => {
          if (_ctx.isTrailing && _ctx.trailingIconName) {
            _push2(ssrRenderComponent(_component_UIcon, {
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        }, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "leading", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isLeading && _ctx.leadingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.leadingIconName,
              class: _ctx.leadingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.label ? (openBlock(), createBlock("span", {
              key: 0,
              class: [_ctx.truncate ? _ctx.ui.truncate : ""]
            }, toDisplayString(_ctx.label), 3)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "trailing", {
            disabled: _ctx.disabled,
            loading: _ctx.loading
          }, () => [
            _ctx.isTrailing && _ctx.trailingIconName ? (openBlock(), createBlock(_component_UIcon, {
              key: 0,
              name: _ctx.trailingIconName,
              class: _ctx.trailingIconClass,
              "aria-hidden": "true"
            }, null, 8, ["name", "class"])) : createCommentVNode("", true)
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/elements/Button.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const config = mergeConfig(appConfig.ui.strategy, appConfig.ui.pagination, pagination);
const buttonConfig = mergeConfig(appConfig.ui.strategy, appConfig.ui.button, button);
const _sfc_main$2 = defineComponent({
  components: {
    UButton: __nuxt_component_0$1
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    pageCount: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 7,
      validate(value) {
        return value >= 5 && value < Number.MAX_VALUE;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: () => config.default.size,
      validator(value) {
        return Object.keys(buttonConfig.size).includes(value);
      }
    },
    to: {
      type: Function,
      default: null
    },
    activeButton: {
      type: Object,
      default: () => config.default.activeButton
    },
    inactiveButton: {
      type: Object,
      default: () => config.default.inactiveButton
    },
    showFirst: {
      type: Boolean,
      default: false
    },
    showLast: {
      type: Boolean,
      default: false
    },
    firstButton: {
      type: Object,
      default: () => config.default.firstButton
    },
    lastButton: {
      type: Object,
      default: () => config.default.lastButton
    },
    prevButton: {
      type: Object,
      default: () => config.default.prevButton
    },
    nextButton: {
      type: Object,
      default: () => config.default.nextButton
    },
    divider: {
      type: String,
      default: "\u2026"
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
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { ui, attrs } = useUI("pagination", toRef(props, "ui"), config, toRef(props, "class"));
    const currentPage = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      }
    });
    const pages = computed(() => Array.from({ length: Math.ceil(props.total / props.pageCount) }, (_, i) => i + 1));
    const displayedPages = computed(() => {
      const totalPages = pages.value.length;
      const current = currentPage.value;
      const maxDisplayedPages = Math.max(props.max, 5);
      const r = Math.floor((Math.min(maxDisplayedPages, totalPages) - 5) / 2);
      const r1 = current - r;
      const r2 = current + r;
      const beforeWrapped = r1 - 1 > 1;
      const afterWrapped = r2 + 1 < totalPages;
      const items = [];
      if (totalPages <= maxDisplayedPages) {
        for (let i = 1; i <= totalPages; i++) {
          items.push(i);
        }
        return items;
      }
      items.push(1);
      if (beforeWrapped) items.push(props.divider);
      if (!afterWrapped) {
        const addedItems = current + r + 2 - totalPages;
        for (let i = current - r - addedItems; i <= current - r - 1; i++) {
          items.push(i);
        }
      }
      for (let i = Math.max(2, r1); i <= Math.min(totalPages, r2); i++) {
        items.push(i);
      }
      if (!beforeWrapped) {
        const addedItems = 1 - (current - r - 2);
        for (let i = current + r + 1; i <= current + r + addedItems; i++) {
          items.push(i);
        }
      }
      if (afterWrapped) items.push(props.divider);
      if (r2 < totalPages) {
        items.push(totalPages);
      }
      if (items.length >= 3 && items[1] === props.divider && items[2] === 3) {
        items[1] = 2;
      }
      if (items.length >= 3 && items[items.length - 2] === props.divider && items[items.length - 1] === items.length) {
        items[items.length - 2] = items.length - 1;
      }
      return items;
    });
    const canGoFirstOrPrev = computed(() => currentPage.value > 1);
    const canGoLastOrNext = computed(() => currentPage.value < pages.value.length);
    function onClickFirst() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value = 1;
    }
    function onClickLast() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value = pages.value.length;
    }
    function onClickPage(page) {
      if (typeof page === "string") {
        return;
      }
      currentPage.value = page;
    }
    function onClickPrev() {
      if (!canGoFirstOrPrev.value) {
        return;
      }
      currentPage.value--;
    }
    function onClickNext() {
      if (!canGoLastOrNext.value) {
        return;
      }
      currentPage.value++;
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      currentPage,
      pages,
      displayedPages,
      canGoLastOrNext,
      canGoFirstOrPrev,
      onClickPrev,
      onClickNext,
      onClickPage,
      onClickFirst,
      onClickLast
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UButton = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.ui.wrapper
  }, _ctx.attrs, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "first", {
    onClick: _ctx.onClickFirst,
    canGoFirst: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.firstButton && _ctx.showFirst) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.firstButton || {}, ..._ctx.firstButton }, {
        ui: { rounded: "" },
        "aria-label": "First",
        onClick: _ctx.onClickFirst
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "prev", {
    onClick: _ctx.onClickPrev,
    canGoPrev: _ctx.canGoFirstOrPrev
  }, () => {
    var _a;
    if (_ctx.prevButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage - 1),
        disabled: !_ctx.canGoFirstOrPrev || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.prevButton || {}, ..._ctx.prevButton }, {
        ui: { rounded: "" },
        "aria-label": "Prev",
        onClick: _ctx.onClickPrev
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`<!--[-->`);
  ssrRenderList(_ctx.displayedPages, (page, index) => {
    var _a;
    _push(ssrRenderComponent(_component_UButton, mergeProps({
      key: `${page}-${index}`,
      to: typeof page === "number" ? (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, page) : null,
      size: _ctx.size,
      disabled: _ctx.disabled,
      label: `${page}`,
      ref_for: true
    }, page === _ctx.currentPage ? { ..._ctx.ui.default.activeButton || {}, ..._ctx.activeButton } : { ..._ctx.ui.default.inactiveButton || {}, ..._ctx.inactiveButton }, {
      class: [{ "pointer-events-none": typeof page === "string", "z-[1]": page === _ctx.currentPage }, _ctx.ui.base, _ctx.ui.rounded],
      ui: { rounded: "" },
      onClick: () => _ctx.onClickPage(page)
    }), null, _parent));
  });
  _push(`<!--]-->`);
  ssrRenderSlot(_ctx.$slots, "next", {
    onClick: _ctx.onClickNext,
    canGoNext: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.nextButton) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.currentPage + 1),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.nextButton || {}, ..._ctx.nextButton }, {
        ui: { rounded: "" },
        "aria-label": "Next",
        onClick: _ctx.onClickNext
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  ssrRenderSlot(_ctx.$slots, "last", {
    onClick: _ctx.onClickLast,
    canGoLast: _ctx.canGoLastOrNext
  }, () => {
    var _a;
    if (_ctx.lastButton && _ctx.showLast) {
      _push(ssrRenderComponent(_component_UButton, mergeProps({
        size: _ctx.size,
        to: (_a = _ctx.to) == null ? void 0 : _a.call(_ctx, _ctx.pages.length),
        disabled: !_ctx.canGoLastOrNext || _ctx.disabled,
        class: [_ctx.ui.base, _ctx.ui.rounded]
      }, { ..._ctx.ui.default.lastButton || {}, ..._ctx.lastButton }, {
        ui: { rounded: "" },
        "aria-label": "Last",
        onClick: _ctx.onClickLast
      }), null, _parent));
    } else {
      _push(`<!---->`);
    }
  }, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/ui/dist/runtime/components/navigation/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RaizcoPaginator",
  __ssrInlineRender: true,
  props: {
    total: {},
    disabled: { type: Boolean },
    pageCount: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const page = ref(props.modelValue || 1);
    watch(
      () => props.modelValue,
      (newVal) => {
        page.value = newVal || 1;
      }
    );
    watch(page, () => {
      emits("update:modelValue", page.value);
      emits("change", page.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPagination = __nuxt_component_0;
      _push(ssrRenderComponent(_component_UPagination, mergeProps({
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        "page-count": _ctx.pageCount,
        total: _ctx.total
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/RaizcoPaginator/RaizcoPaginator.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c684ee99"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[business]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $viewport } = useNuxtApp();
    const route = useRoute();
    useSeoMeta({
      title: `Propiedades en ${route.params.business}`,
      description: `Propiedades en ${route.params.business}`,
      keywords: "Propiedades"
    });
    const propertiesStore = usePropertiesStore();
    init();
    async function init() {
      validateManagamentTypeInPath();
      propertiesStore.getProperties();
    }
    function validateManagamentTypeInPath() {
      const managementTypeFromPath = route.params.business;
      propertiesStore.filters.propertyManagement = managementTypeFromPath;
    }
    async function onChangePagination() {
      await propertiesStore.getPropertiesWithFilters();
      (void 0).scrollTo(0, 0);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FiltersBar = __nuxt_component_0$3;
      const _component_ContentWrapper = __nuxt_component_1$1$1;
      const _component_Filters = __nuxt_component_2;
      const _component_PropertyCard = __nuxt_component_3;
      const _component_RaizcoPaginator = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-93f6f500>`);
      _push(ssrRenderComponent(_component_FiltersBar, null, null, _parent));
      _push(ssrRenderComponent(_component_ContentWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="main-content-wrapper" data-v-93f6f500${_scopeId}><section class="properties-section" data-v-93f6f500${_scopeId}>`);
            if (unref($viewport).isGreaterThan("tablet")) {
              _push2(`<article class="filters-wrapper" data-v-93f6f500${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Filters, null, null, _parent2, _scopeId));
              _push2(`</article>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<article class="property-cards-list" data-v-93f6f500${_scopeId}><!--[-->`);
            ssrRenderList(unref(propertiesStore).properties, (property) => {
              _push2(ssrRenderComponent(_component_PropertyCard, {
                key: property.id,
                data: property
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]--></article></section><div class="paginator-wrapper" data-v-93f6f500${_scopeId}>`);
            _push2(ssrRenderComponent(_component_RaizcoPaginator, {
              modelValue: unref(propertiesStore).page,
              "onUpdate:modelValue": ($event) => unref(propertiesStore).page = $event,
              total: unref(propertiesStore).totalItems,
              pageCount: unref(propertiesStore).itemsPerPage,
              onChange: onChangePagination
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "main-content-wrapper" }, [
                createVNode("section", { class: "properties-section" }, [
                  unref($viewport).isGreaterThan("tablet") ? (openBlock(), createBlock("article", {
                    key: 0,
                    class: "filters-wrapper"
                  }, [
                    createVNode(_component_Filters)
                  ])) : createCommentVNode("", true),
                  createVNode("article", { class: "property-cards-list" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(propertiesStore).properties, (property) => {
                      return openBlock(), createBlock(_component_PropertyCard, {
                        key: property.id,
                        data: property
                      }, null, 8, ["data"]);
                    }), 128))
                  ])
                ]),
                createVNode("div", { class: "paginator-wrapper" }, [
                  createVNode(_component_RaizcoPaginator, {
                    modelValue: unref(propertiesStore).page,
                    "onUpdate:modelValue": ($event) => unref(propertiesStore).page = $event,
                    total: unref(propertiesStore).totalItems,
                    pageCount: unref(propertiesStore).itemsPerPage,
                    onChange: onChangePagination
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "total", "pageCount"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/propiedades/[business].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _business_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93f6f500"]]);

export { _business_ as default };
//# sourceMappingURL=_business_-BncQ3Cjm.mjs.map
