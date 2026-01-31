const fs = require('fs');
const path = require('path');

// Get the Svelte source directory
const svelteDir = path.dirname(require.resolve('svelte/package.json'));
const srcDir = path.join(svelteDir, 'src');

// Create a simple bundler function
function bundleRuntime() {
  const clientIndex = path.join(srcDir, 'internal', 'client', 'index.js');
  
  if (!fs.existsSync(clientIndex)) {
    throw new Error('Svelte client runtime not found');
  }
  
  // For now, let's just create a simple bundle that exports all the main functions
  // This is a simplified approach - a real bundler would resolve all imports
  
  const bundle = `
// Simplified Svelte 5 runtime bundle
// This contains the core functions needed for compiled components

window.svelteRuntime = {
  // Minimal implementation of key Svelte internals
  // Based on what we see in compiled output
  
  // State management  
  mutable_source: (value) => ({ value, update: (v) => value = v }),
  state: (value) => ({ value }),
  get: (source) => source?.value,
  update: (source, value) => {
    if (source) source.value = value;
  },
  
  // DOM utilities
  from_html: (html) => () => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div;
  },
  first_child: (el) => el?.firstElementChild,
  append: (parent, child) => parent?.appendChild(child),
  set_text: (el, text) => { if (el) el.textContent = text; },
  
  // Component lifecycle
  check_target: () => {},
  push: () => {},
  pop: () => ({ legacy_api: () => ({}) }),
  legacy_api: () => ({}),
  
  // CSS
  append_styles: (target, css) => {
    if (css?.code) {
      const style = document.createElement('style');
      style.textContent = css.code;
      document.head.appendChild(style);
    }
  },
  
  // Effects
  template_effect: (fn) => fn(),
  
  // Event handling
  delegate: () => {},
  
  // Debugging
  add_locations: (node) => node,
  FILENAME: Symbol('filename')
};

// Map $ to our runtime
window.$ = window.svelteRuntime;
`;

  return bundle;
}

// Generate the bundle
const bundle = bundleRuntime();
console.log(bundle);