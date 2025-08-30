<script lang="ts">
  let { code }: { code: string } = $props()

  let iframe: HTMLIFrameElement;
  let error: string | null = $state(null);

  function parseAndRender() {
    error = null;

    try {
      // Extract script, style, and template from Svelte code
      const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
      const styleMatch = code.match(/<style[^>]*>([\s\S]*?)<\/style>/);

      let template = code;
      let scriptContent = '';
      let styleContent = '';

      if (scriptMatch) {
        scriptContent = scriptMatch[1];
        template = template.replace(scriptMatch[0], '');
      }

      if (styleMatch) {
        styleContent = styleMatch[1];
        template = template.replace(styleMatch[0], '');
      }

      // Simple variable replacement for template
      let variables: Record<string, any> = {};

      // Parse variable declarations and create JavaScript variables
      const varMatches = scriptContent.match(/let\s+(\w+)\s*=\s*([^;]+);?/g);
      let jsVars = '';
      if (varMatches) {
        varMatches.forEach(match => {
          const varMatch = match.match(/let\s+(\w+)\s*=\s*([^;]+)/);
          if (varMatch) {
            const [, name, value] = varMatch;
            // Handle $state() wrapping
            const cleanValue = value.replace(/\$state\(([^)]+)\)/, '$1').trim();
            jsVars += `let ${name} = ${cleanValue};\n`;
            try {
              variables[name] = eval(cleanValue);
            } catch {
              variables[name] = value.replace(/['"]/g, '');
            }
          }
        });
      }

       // Handle onclick handlers first - convert Svelte syntax to data attributes
       let processedTemplate = template;
       processedTemplate = processedTemplate.replace(/onclick=\{[^}]*\}/g, (match) => {
         const handler = match.match(/onclick=\{([^}]*)\}/);
         if (handler) {
           let jsHandler = handler[1];
           // Convert arrow function to regular function call
           if (jsHandler.includes('=>')) {
             jsHandler = jsHandler.replace(/\(\) => (.+)/, '$1');
           }
           return `data-click="${jsHandler}"`;
         }
         return match;
       });

       // Replace {variable} in template with spans that can be updated
       Object.entries(variables).forEach(([name, value]) => {
         const regex = new RegExp(`\\{${name}\\}`, 'g');
         processedTemplate = processedTemplate.replace(regex, `<span id="${name}">${value}</span>`);
       });

      // Create simple HTML structure with reactive updates
      const otherScript = scriptContent.replace(/let\s+\w+\s*=\s*[^;]+;?/g, '');

      if (iframe) {
        iframe.srcdoc = [
          '<!DOCTYPE html><html><head><meta charset="utf-8"><style>',
          'body{margin:0;padding:16px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:white;}',
          styleContent,
          '</style></head><body>',
          processedTemplate,
          '<script>',
          jsVars,
          otherScript,
          'function updateDisplay(){',
          Object.keys(variables).map(name =>
            `const el${name}=document.getElementById("${name}");if(el${name})el${name}.textContent=${name};`
          ).join(''),
          '}',
           'document.addEventListener("click",function(e){',
           'if(e.target.hasAttribute("data-click")){',
           'e.preventDefault();',
           'e.stopPropagation();',
           'try{',
           'const handler = e.target.getAttribute("data-click");',
           'eval(handler);',
           'updateDisplay();',
           '}catch(err){console.error("Handler error:", err);}',
           '}',
           '});',
          '</' + 'script></body></html>'
        ].join('');
      }

    } catch (err: any) {
      error = err.message;
      console.error('Parse error:', err);
    }
  }

  $effect(() => {
    console.log('REPL: Code changed, length:', code.length);
    parseAndRender();
  });
</script>

<div class="repl-container">
  {#if error}
    <div class="error">
      <strong>Compilation Error:</strong><br>
      {error}
    </div>
  {/if}

  <iframe
    bind:this={iframe}
    title="Svelte REPL Output"
    sandbox="allow-scripts"
    frameborder="0"
  ></iframe>
</div>

<style>
  .repl-container {
    width: 100%;
    flex-grow: 1;
    position: relative;
  }

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    color: white;
  }

  .error {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #fee;
    color: #c00;
    padding: 12px;
    border: 1px solid #fcc;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
    z-index: 10;
  }
</style>
