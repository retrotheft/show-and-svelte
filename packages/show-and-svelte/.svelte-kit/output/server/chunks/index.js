import { B as BROWSER } from "./false.js";
const DERIVED = 1 << 1;
const EFFECT = 1 << 2;
const BLOCK_EFFECT = 1 << 4;
const BRANCH_EFFECT = 1 << 5;
const ROOT_EFFECT = 1 << 6;
const BOUNDARY_EFFECT = 1 << 7;
const UNOWNED = 1 << 8;
const DISCONNECTED = 1 << 9;
const CLEAN = 1 << 10;
const DIRTY = 1 << 11;
const MAYBE_DIRTY = 1 << 12;
const INERT = 1 << 13;
const DESTROYED = 1 << 14;
const EFFECT_RAN = 1 << 15;
const EFFECT_TRANSPARENT = 1 << 16;
const INSPECT_EFFECT = 1 << 17;
const HEAD_EFFECT = 1 << 18;
const EFFECT_PRESERVED = 1 << 19;
const USER_EFFECT = 1 << 20;
const REACTION_IS_UPDATING = 1 << 21;
const ASYNC = 1 << 22;
const ERROR_VALUE = 1 << 23;
const STATE_SYMBOL = Symbol("$state");
const LEGACY_PROPS = Symbol("legacy props");
const STALE_REACTION = new class StaleReactionError extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
const COMMENT_NODE = 8;
function lifecycle_outside_component(name) {
  {
    throw new Error(`https://svelte.dev/e/lifecycle_outside_component`);
  }
}
const HYDRATION_START = "[";
const HYDRATION_END = "]";
const HYDRATION_ERROR = {};
const UNINITIALIZED = Symbol();
const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;
function escape_html(value, is_attr) {
  const str = String(value ?? "");
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped + str.substring(last);
}
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function to_style(value, styles) {
  return value == null ? null : String(value);
}
var current_component = null;
function getContext(key) {
  const context_map = get_or_init_context_map();
  const result = (
    /** @type {T} */
    context_map.get(key)
  );
  return result;
}
function setContext(key, context) {
  get_or_init_context_map().set(key, context);
  return context;
}
function get_or_init_context_map(name) {
  if (current_component === null) {
    lifecycle_outside_component();
  }
  return current_component.c ??= new Map(get_parent_context(current_component) || void 0);
}
function push(fn) {
  current_component = { p: current_component, c: null, d: null };
}
function pop() {
  var component = (
    /** @type {Component} */
    current_component
  );
  var ondestroy = component.d;
  if (ondestroy) {
    on_destroy.push(...ondestroy);
  }
  current_component = component.p;
}
function get_parent_context(component_context) {
  let parent = component_context.p;
  while (parent !== null) {
    const context_map = parent.c;
    if (context_map !== null) {
      return context_map;
    }
    parent = parent.p;
  }
  return null;
}
const BLOCK_OPEN = `<!--${HYDRATION_START}-->`;
const BLOCK_CLOSE = `<!--${HYDRATION_END}-->`;
class HeadPayload {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  /** @type {string[]} */
  out = [];
  uid = () => "";
  title = "";
  constructor(css = /* @__PURE__ */ new Set(), out = [], title = "", uid = () => "") {
    this.css = css;
    this.out = out;
    this.title = title;
    this.uid = uid;
  }
}
class Payload {
  /** @type {Set<{ hash: string; code: string }>} */
  css = /* @__PURE__ */ new Set();
  /** @type {string[]} */
  out = [];
  uid = () => "";
  select_value = void 0;
  head = new HeadPayload();
  constructor(id_prefix = "") {
    this.uid = props_id_generator(id_prefix);
    this.head.uid = this.uid;
  }
}
function props_id_generator(prefix) {
  let uid = 1;
  return () => `${prefix}s${uid++}`;
}
function reset_elements() {
  return () => {
  };
}
let controller = null;
function abort() {
  controller?.abort(STALE_REACTION);
  controller = null;
}
let on_destroy = [];
function render(component, options = {}) {
  try {
    const payload = new Payload(options.idPrefix ? options.idPrefix + "-" : "");
    const prev_on_destroy = on_destroy;
    on_destroy = [];
    payload.out.push(BLOCK_OPEN);
    let reset_reset_element;
    if (BROWSER) ;
    if (options.context) {
      push();
      current_component.c = options.context;
    }
    component(payload, options.props ?? {}, {}, {});
    if (options.context) {
      pop();
    }
    if (reset_reset_element) {
      reset_reset_element();
    }
    payload.out.push(BLOCK_CLOSE);
    for (const cleanup of on_destroy) cleanup();
    on_destroy = prev_on_destroy;
    let head2 = payload.head.out.join("") + payload.head.title;
    for (const { hash, code } of payload.css) {
      head2 += `<style id="${hash}">${code}</style>`;
    }
    const body = payload.out.join("");
    return {
      head: head2,
      html: body,
      body
    };
  } finally {
    abort();
  }
}
function head(payload, fn) {
  const head_payload = payload.head;
  head_payload.out.push(BLOCK_OPEN);
  fn(head_payload);
  head_payload.out.push(BLOCK_CLOSE);
}
function stringify(value) {
  return typeof value === "string" ? value : value == null ? "" : value + "";
}
function attr_style(value, directives) {
  var result = to_style(value);
  return result ? ` style="${escape_html(result, true)}"` : "";
}
function ensure_array_like(array_like_or_iterator) {
  if (array_like_or_iterator) {
    return array_like_or_iterator.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
  }
  return [];
}
export {
  ASYNC as A,
  BOUNDARY_EFFECT as B,
  CLEAN as C,
  DERIVED as D,
  ERROR_VALUE as E,
  attr_style as F,
  stringify as G,
  HYDRATION_ERROR as H,
  INERT as I,
  ensure_array_like as J,
  LEGACY_PROPS as L,
  MAYBE_DIRTY as M,
  ROOT_EFFECT as R,
  STATE_SYMBOL as S,
  UNOWNED as U,
  EFFECT_RAN as a,
  EFFECT as b,
  BLOCK_EFFECT as c,
  DIRTY as d,
  BRANCH_EFFECT as e,
  DESTROYED as f,
  INSPECT_EFFECT as g,
  UNINITIALIZED as h,
  EFFECT_PRESERVED as i,
  HEAD_EFFECT as j,
  EFFECT_TRANSPARENT as k,
  STALE_REACTION as l,
  USER_EFFECT as m,
  DISCONNECTED as n,
  REACTION_IS_UPDATING as o,
  COMMENT_NODE as p,
  HYDRATION_START as q,
  HYDRATION_END as r,
  render as s,
  push as t,
  setContext as u,
  pop as v,
  getContext as w,
  escape_html as x,
  head as y,
  attr as z
};
