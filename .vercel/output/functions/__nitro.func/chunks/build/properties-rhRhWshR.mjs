import { useSSRContext, defineComponent, computed, mergeProps, toValue, reactive } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { parse, icon, config } from '@fortawesome/fontawesome-svg-core';
import { defineStore } from 'pinia';
import { G as hash } from '../_/nitro.mjs';
import { c as useNuxtApp, d as useRuntimeConfig, k as fetchDefaults, l as useRequestFetch } from './server.mjs';
import { u as useAsyncData } from './asyncData-_Tu7Jwpj.mjs';
import { P as PropertyManagementType } from './propertyManagement.type-D2tDZXBb.mjs';

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
function useAPI(url, options) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$api
  }, "$uv0kGgft5L");
}
function useAPIFetch(url, options) {
  const resolvedUrl = url;
  const nuxtApp = useNuxtApp();
  const $api = nuxtApp.$api;
  return $api(resolvedUrl, {
    ...options,
    baseURL: useRuntimeConfig().public.apiBaseUrl
  });
}
function useAPIAsyncData(url) {
  return useAsyncData(
    url,
    () => $fetch(url, {
      baseURL: useRuntimeConfig().public.apiBaseUrl
    }),
    "$3KV1NXeSSW"
  );
}
const usePropertiesService = () => {
  const fetchProperties = async (filters) => {
    try {
      const response = await useAPIFetch(`/properties/landing`, {
        params: { ...filters, property_status: "active" }
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };
  const fetchPropertiesWithFilters = async (filters) => {
    try {
      const response = await useAPIFetch(`/properties/landing`, {
        method: "GET",
        params: { ...filters, property_status: "active" }
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error(String(error));
      }
    }
  };
  const fetchPropertyById = async (id) => {
    const { data, error } = await useAPIAsyncData(`/properties/${id}`);
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value;
  };
  const fetchPicklists = async () => {
    const { data, error } = await useAPI(`/properties/picklists`);
    if (error.value) {
      throw new Error(error.value.message);
    }
    return data.value;
  };
  return {
    fetchProperties,
    fetchPropertiesWithFilters,
    fetchPropertyById,
    fetchPicklists
  };
};
const useGeneralDataMapper = () => {
  const mapGeneralData2 = (data) => ({
    management: data.management,
    saleValue: data.sale_value || null,
    rentValue: data.rent_value || null,
    feeValue: data.fee_value || null,
    condition: data.property_condition,
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    garage: data.garage,
    stratum: data.stratum,
    floor: data.floor,
    totalArea: data.total_area,
    videoUrl: data.video_url,
    video360Url: data.video_360_url
  });
  return { mapGeneralData: mapGeneralData2 };
};
const useLocationMapper = () => {
  const mapLocation2 = (location) => ({
    stateName: location.state_name,
    cityName: location.city_name,
    zoneName: location.zone_name,
    address: location.address,
    latitude: location.latitude,
    longitude: location.longitude
  });
  return { mapLocation: mapLocation2 };
};
const useFeaturesMapper = () => {
  const mapFeatures2 = (features) => ({
    internalFeatures: mapFeaturesList(features.internal_features),
    externalFeatures: mapFeaturesList(features.external_features)
  });
  const mapFeature = (item) => ({
    id: item.id || null,
    label: item.name || "",
    value: item.value || ""
  });
  const mapFeaturesList = (features) => features.map((item) => mapFeature(item));
  return { mapFeatures: mapFeatures2 };
};
const { mapGeneralData } = useGeneralDataMapper();
const { mapLocation } = useLocationMapper();
const { mapFeatures } = useFeaturesMapper();
const usePropertyMapper = () => {
  const mapProperty = (property) => ({
    id: property.property_id,
    name: property.general_data.property_name,
    advisorPhoneNumber: property.advisor_phone_number,
    description: property.description.description,
    generalData: mapGeneralData(property.general_data),
    location: mapLocation(property.location),
    features: mapFeatures(property.features),
    images: property.images
  });
  const mapProperties = (properties) => {
    return properties.map(mapProperty);
  };
  return { mapProperty, mapProperties };
};
function transformIsMeaningful(transform) {
  const meaninglessTransform = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: false,
    flipY: false
  };
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  __ssrInlineRender: true,
  props: {
    border: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false,
      validator: (value) => [true, false, "horizontal", "vertical", "both"].includes(value)
    },
    icon: {
      type: [Object, Array, String],
      required: true
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: void 0
    },
    listItem: {
      type: Boolean,
      default: false
    },
    pull: {
      type: String,
      default: void 0,
      validator: (value) => ["right", "left"].includes(value)
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotation: {
      type: [String, Number],
      default: void 0,
      validator: (value) => [90, 180, 270].includes(Number.parseInt(value, 10))
    },
    swapOpacity: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].includes(
        value
      )
    },
    spin: {
      type: Boolean,
      default: false
    },
    transform: {
      type: [String, Object],
      default: void 0
    },
    symbol: {
      type: [Boolean, String],
      default: false
    },
    title: {
      type: String,
      default: void 0
    },
    titleId: {
      type: String,
      default: void 0
    },
    inverse: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Boolean,
      default: false
    },
    shake: {
      type: Boolean,
      default: false
    },
    beat: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    beatFade: {
      type: Boolean,
      default: false
    },
    spinPulse: {
      type: Boolean,
      default: false
    },
    spinReverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const icon$1 = computed(() => normalizeIconArgs(props.icon));
    const mask = computed(() => normalizeIconArgs(props.mask));
    const transform = computed(() => {
      if (props.transform) {
        const transform2 = typeof props.transform !== "object" ? parse.transform(props.transform) : props.transform;
        if (transform2 && transformIsMeaningful(transform2)) {
          return transformForSvg(transform2);
        }
      }
      return void 0;
    });
    const parsedIcon = computed(() => {
      return icon(icon$1.value, {
        classes: classes.value,
        title: props.title,
        titleId: props.titleId
      });
    });
    const parsedMask = computed(() => icon(mask.value));
    const properties = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      const properties2 = {
        "aria-hidden": true,
        "data-prefix": (_a = parsedIcon.value) == null ? void 0 : _a.prefix,
        "data-icon": (_b = parsedIcon.value) == null ? void 0 : _b.iconName,
        class: classes.value,
        focusable: false,
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${(_c = parsedIcon.value) == null ? void 0 : _c.icon[0]} ${(_d = parsedIcon.value) == null ? void 0 : _d.icon[1]}`
      };
      if (props.symbol) {
        properties2.id = [(_e = parsedIcon.value) == null ? void 0 : _e.prefix, "fa", (_f = parsedIcon.value) == null ? void 0 : _f.iconName].join("-");
      }
      if (props.title) {
        properties2["aria-labelledby"] = uniqueId.value;
      }
      return properties2;
    });
    const htmlTag = computed(() => {
      const svg = getSVG();
      if (parsedMask.value) {
        const id = props.maskId || parsedMask.value.iconName;
        return `<defs>
      <clipPath id="clip-${id}">
        <path fill="currentColor" d="${parsedMask.value.icon[4]}"></path>
      </clipPath>
      <mask id="mask-${id}" x="0" y="0" width="100%" height="100%" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
        <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
        ${svg}
      </mask>
    </defs>
    <rect fill="currentColor" clip-path="url(#clip-${id})" mask="url(#mask-${id})" x="0" y="0" width="100%" height="100%"></rect>`;
      }
      return svg;
    });
    const classes = computed(() => {
      const classes2 = {
        "fa-spin": props.spin,
        "fa-pulse": props.pulse,
        "fa-fw": props.fixedWidth,
        "fa-border": props.border,
        "fa-li": props.listItem,
        "fa-inverse": props.inverse,
        "fa-flip": props.flip === true,
        "fa-flip-horizontal": props.flip === "horizontal" || props.flip === "both",
        "fa-flip-vertical": props.flip === "vertical" || props.flip === "both",
        [`fa-${props.size}`]: props.size !== void 0,
        [`fa-rotate-${props.rotation}`]: props.rotation !== void 0,
        [`fa-pull-${props.pull}`]: props.pull !== void 0,
        "fa-swap-opacity": props.swapOpacity,
        "fa-bounce": props.bounce,
        "fa-shake": props.shake,
        "fa-beat": props.beat,
        "fa-fade": props.fade,
        "fa-beat-fade": props.beatFade,
        "fa-spin-pulse": props.spinPulse,
        "fa-spin-reverse": props.spinReverse
      };
      const active = Object.keys(classes2).map((key) => classes2[key] ? key : null).filter((key) => key);
      return [config.replacementClass, ...active];
    });
    const uniqueId = computed(() => {
      return config.replacementClass + "-title-" + (props.titleId || nextUniqueId());
    });
    function normalizeIconArgs(icon2) {
      if (icon2) {
        if (typeof icon2 === "string") {
          const styles = {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab"
          };
          let prefix = styles[config.styleDefault] || "fas";
          let iconName = icon2.replace(/\bfa-/g, "");
          if (iconName.includes(" ")) {
            const tmp = iconName.split(/\s+/);
            if (tmp[0] in styles) {
              prefix = styles[tmp[0]];
            }
            iconName = tmp[1];
          }
          return { prefix, iconName };
        }
        if (Array.isArray(icon2) && icon2.length === 2) {
          return { prefix: icon2[0], iconName: icon2[1] };
        }
        if (typeof icon2 === "object" && "prefix" in icon2 && "iconName" in icon2) {
          return icon2;
        }
      }
      return void 0;
    }
    function transformForSvg(transform2) {
      var _a;
      const containerWidth = 512;
      const iconWidth = ((_a = parsedIcon.value) == null ? void 0 : _a.icon[0]) || 512;
      const x = transform2.x || 0;
      const y = transform2.y || 0;
      const size = transform2.size || 0;
      const rotate = transform2.rotate || 0;
      const flipX = transform2.flipX || 0;
      const flipY = transform2.flipY || 0;
      const outer = "translate(".concat(String(containerWidth / 2), " 256)");
      const innerTranslate = "translate(".concat(String(x * 32), ", ").concat(String(y * 32), ") ");
      const innerScale = "scale(".concat(String(size / 16 * (flipX ? -1 : 1)), ", ").concat(String(size / 16 * (flipY ? -1 : 1)), ") ");
      const innerRotate = "rotate(".concat(String(rotate), " 0 0)");
      const inner = "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate);
      const path = "translate(".concat(String(iconWidth / 2 * -1), " -256)");
      return { outer, inner, path };
    }
    function nextUniqueId() {
      const idPool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let size = 12;
      let id = "";
      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }
      return id;
    }
    function getSVG() {
      const fill = parsedMask.value ? "black" : "currentColor";
      const svg = [];
      let path = parsedIcon.value.icon[4];
      if (!Array.isArray(path)) {
        path = [path];
      }
      path.forEach((i) => {
        svg.push(
          `<path fill="${fill}"${transform.value ? ' transform="' + transform.value.path + '"' : ""} d="${i}"></path>`
        );
      });
      if (transform.value) {
        svg.unshift(`<g transform="${transform.value.outer}">`, `<g transform="${transform.value.inner}">`);
        svg.push("</g>", "</g>");
      }
      if (props.title) {
        svg.unshift(`<title id="${uniqueId.value}">${props.title}</title>`);
      }
      return svg.join("");
    }
    if (props.icon && !parsedIcon.value) {
      console.info("Could not find main icon", icon$1.value);
    }
    if (props.mask && !parsedMask.value) {
      console.info("Could not find mask icon", mask.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      if (parsedIcon.value && __props.symbol) {
        _push(`<svg${ssrRenderAttrs(mergeProps({ style: { "display": "none" } }, _attrs))}><symbol${ssrRenderAttrs(properties.value)}>${(_a = htmlTag.value) != null ? _a : ""}</symbol></svg>`);
      } else if (parsedIcon.value) {
        _push(`<svg${ssrRenderAttrs(mergeProps(properties.value, _attrs))}>${(_b = htmlTag.value) != null ? _b : ""}</svg>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@vesp/nuxt-fontawesome/dist/runtime/components/icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usePicklistsMapper = () => {
  const mapPicklists = (data) => ({
    propertyType: mapPicklistsList(data.property_type),
    status: mapPicklistsList(data.status),
    management: mapPicklistsList(data.management),
    condition: mapPicklistsList(data.condition),
    rentType: mapPicklistsList(data.rent_type),
    areaUnits: mapPicklistsList(data.area_units),
    features: {
      internalFeatures: mapPicklistsList(data.features.internal_features),
      externalFeatures: mapPicklistsList(data.features.external_features)
    }
  });
  const mapPicklistItem = (item) => ({
    id: item.id || null,
    label: item.name || "",
    value: item.value || ""
  });
  const mapPicklistsList = (list) => list.map((item) => mapPicklistItem(item));
  return { mapPicklists };
};
class PropertiesFiltersDto {
  constructor(queryParams, picklists) {
    __publicField(this, "skip");
    __publicField(this, "limit", 20);
    __publicField(this, "property_name");
    __publicField(this, "property_management");
    __publicField(this, "property_type");
    __publicField(this, "rent_value_from");
    __publicField(this, "rent_value_to");
    __publicField(this, "sale_value_from");
    __publicField(this, "sale_value_to");
    __publicField(this, "area_from");
    __publicField(this, "area_to");
    __publicField(this, "bedrooms");
    __publicField(this, "bathrooms");
    __publicField(this, "garages");
    __publicField(this, "property_status");
    __publicField(this, "internal_features");
    __publicField(this, "external_features");
    const {
      page,
      propertyName,
      propertyManagement,
      propertyType,
      valueFrom,
      valueTo,
      bedrooms,
      bathrooms,
      garages,
      totalAreaFrom,
      totalAreaTo,
      internalFeatures,
      externalFeatures
    } = queryParams;
    this.skip = this.setSkip(page || 1);
    if (propertyName) this.property_name = propertyName;
    if (totalAreaFrom) this.area_from = Number(totalAreaFrom);
    if (totalAreaTo) this.area_to = Number(totalAreaTo);
    if (valueFrom) this.setValueFrom(propertyManagement, Number(valueFrom));
    if (valueTo) this.setValueTo(propertyManagement, Number(valueTo));
    if (propertyManagement)
      this.property_management = this.setPropertyManagement(
        propertyManagement,
        picklists
      );
    if (propertyType) this.property_type = this.setArrayOfIds(propertyType);
    if (internalFeatures)
      this.internal_features = this.setArrayOfIds(internalFeatures);
    if (externalFeatures)
      this.external_features = this.setArrayOfIds(externalFeatures);
    if (bedrooms) this.bedrooms = this.setQuantityArray(bedrooms);
    if (bathrooms) this.bathrooms = this.setQuantityArray(bathrooms);
    if (garages) this.garages = this.setQuantityArray(garages);
  }
  static create(queryParams, picklists) {
    return new PropertiesFiltersDto(queryParams, picklists);
  }
  setSkip(value) {
    if (value === 1) {
      return 0;
    }
    const skip = (value - 1) * this.limit;
    return skip;
  }
  setPropertyManagement(value, picklists) {
    var _a;
    const management = (_a = picklists.management.find(
      (item) => item.label.toLowerCase() === value.toLowerCase()
    )) == null ? void 0 : _a.value;
    return management;
  }
  setValueFrom(propertyManagement, value) {
    if (propertyManagement === PropertyManagementType.RENT) {
      this.rent_value_from = value;
      return;
    }
    this.sale_value_from = value;
  }
  setValueTo(propertyManagement, value) {
    if (propertyManagement === PropertyManagementType.RENT) {
      this.rent_value_to = value;
      return;
    }
    this.sale_value_to = value;
  }
  setArrayOfIds(data) {
    return data.map((item) => item.id);
  }
  setQuantityArray(data) {
    return data.map((item) => Number(item.value));
  }
}
const usePropertiesStore = defineStore("properties", {
  state: () => ({
    properties: [],
    picklists: {},
    filters: {},
    page: 1,
    itemsPerPage: 20,
    totalItems: 0
  }),
  actions: {
    async getProperties() {
      const { fetchProperties } = usePropertiesService();
      const { mapProperties } = usePropertyMapper();
      const filters = PropertiesFiltersDto.create(
        { propertyManagement: this.filters.propertyManagement },
        this.picklists
      );
      const response = await fetchProperties(filters);
      this.properties = mapProperties(response.data);
      this.totalItems = response.total;
    },
    async getPropertiesWithFilters() {
      const { fetchPropertiesWithFilters } = usePropertiesService();
      const { mapProperties } = usePropertyMapper();
      const filters = PropertiesFiltersDto.create(
        {
          ...this.filters,
          page: this.page
        },
        this.picklists
      );
      const response = await fetchPropertiesWithFilters(filters);
      this.properties = mapProperties(response.data);
      this.totalItems = response.total;
    },
    async getPicklists() {
      const { fetchPicklists } = usePropertiesService();
      const { mapPicklists } = usePicklistsMapper();
      const response = await fetchPicklists();
      this.picklists = mapPicklists(response);
    },
    resetFilters() {
      this.filters = {};
    }
  }
});

export { _sfc_main as _, usePropertyMapper as a, usePropertiesStore as b, usePropertiesService as u };
//# sourceMappingURL=properties-rhRhWshR.mjs.map
