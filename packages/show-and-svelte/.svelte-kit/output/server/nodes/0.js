

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const universal = {
  "ssr": false
};
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DB5EVfqI.js","_app/immutable/chunks/bhMCKKB8.js","_app/immutable/chunks/Bb3yDY_8.js","_app/immutable/chunks/BJOYO7hf.js","_app/immutable/chunks/1hXbowTx.js"];
export const stylesheets = ["_app/immutable/assets/app.D5Trh24l.css"];
export const fonts = [];
