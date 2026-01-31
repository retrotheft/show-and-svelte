

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BiHT87Zh.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/2QFx2vPn.js"];
export const stylesheets = [];
export const fonts = [];
