interface HasCode {
   code: string
}

export function createHtmlString(compiled: { js: HasCode, css: HasCode | null }) {
   // Remove import statements and replace with inline runtime
   let jsCode = compiled.js.code;
   
   // Remove all import statements
   jsCode = jsCode.replace(/import '.*?';?\n?/g, '');
   jsCode = jsCode.replace(/import \* as \$ from '.*?';?\n?/g, '');
   
   // Replace the $ runtime with a minimal mock
   const cssCode = compiled.css?.code || '';
   
   return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
        margin: 0;
        padding: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      }
      ${cssCode}
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script>
      // Minimal Svelte 5 runtime mock
      const $ = {
        mutable_source: (value) => ({ value, subscribers: [] }),
        get: (source) => source.value,
        update: (source, value) => { 
          if (typeof value === 'function') source.value = value(source.value);
          else source.value = value;
          // Re-render on update (simple approach)
          setTimeout(() => location.reload(), 0);
        },
        from_html: (html) => () => {
          const div = document.createElement('div');
          div.innerHTML = html;
          return div;
        },
        first_child: (el) => el.firstElementChild,
        child: (el) => el.firstChild,
        sibling: (el, n) => {
          let curr = el;
          for(let i = 0; i < n; i++) curr = curr.nextSibling;
          return curr;
        },
        reset: () => {},
        template_effect: (fn) => fn(),
        set_text: (el, text) => { if (el) el.textContent = text; },
        append: (parent, child) => { if (parent && child) parent.appendChild(child); }
      };
      
      try {
        ${jsCode}
        
        // Mount the component
        const target = document.getElementById('app');
        if (typeof default === 'function') {
          default(target, {});
        } else {
          target.innerHTML = '<p style="color: red;">No component found</p>';
        }
      } catch (err) {
        console.error('Runtime error:', err);
        document.getElementById('app').innerHTML = 
          '<div style="color: red; font-family: monospace; padding: 16px; background: #fee; border: 1px solid #fcc; border-radius: 4px;">' +
          '<strong>Runtime Error:</strong><br>' + 
          (err.message || err.toString()) +
          '</div>';
      }
    </script>
  </body>
</html>`;
}
