<script lang="ts">
  let { code }: { code: string } = $props()

  let iframe: HTMLIFrameElement;
  let error: string | null = $state(null);
  let lastValidHtml: string | null = $state(null);

  function isValidSvelteCode(code: string): boolean {
    // Basic validation - check for unmatched brackets/braces
    const openBraces = (code.match(/\{/g) || []).length;
    const closeBraces = (code.match(/\}/g) || []).length;
    const openParens = (code.match(/\(/g) || []).length;
    const closeParens = (code.match(/\)/g) || []).length;
    
    // Check for incomplete script/style tags
    const scriptTags = (code.match(/<script[^>]*>/g) || []).length;
    const closeScriptTags = (code.match(/<\/script>/g) || []).length;
    const styleTags = (code.match(/<style[^>]*>/g) || []).length;
    const closeStyleTags = (code.match(/<\/style>/g) || []).length;
    
    // Check for incomplete variable declarations like "let count = $sta"
    const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    if (scriptMatch) {
      const script = scriptMatch[1];
      // Look for incomplete $state() calls or incomplete variable declarations
      if (script.includes('$sta') && !script.includes('$state(')) {
        return false;
      }
      if (script.match(/let\s+\w+\s*=\s*[^;]*$/m)) { // line ending without semicolon
        return false;
      }
    }
    
    return openBraces === closeBraces && 
           openParens === closeParens && 
           scriptTags === closeScriptTags && 
           styleTags === closeStyleTags;
  }

  function parseAndRender() {
    error = null;

    try {
      // First validate HTML structure
      // Check for incomplete HTML tags
      const incompleteTagMatch = code.match(/<[a-zA-Z][^>]*$/m);
      if (incompleteTagMatch) {
        console.log('REPL: Incomplete HTML tag detected:', incompleteTagMatch[0]);
        return;
      }

      // Check for unmatched angle brackets in template area
      let tempCode = code;
      // Remove script and style content to check template
      tempCode = tempCode.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '');
      tempCode = tempCode.replace(/<style[^>]*>[\s\S]*?<\/style>/g, '');
      
      // Remove JavaScript expressions in attributes that might contain > or <
      tempCode = tempCode.replace(/\{[^}]*\}/g, '{}');
      
      const openBrackets = (tempCode.match(/</g) || []).length;
      const closeBrackets = (tempCode.match(/>/g) || []).length;
      if (openBrackets !== closeBrackets) {
        console.log('REPL: Unmatched HTML brackets detected');
        return;
      }

      // First, try to validate the code by attempting to parse it
      let testVariables: Record<string, any> = {};
      let hasValidationError = false;

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

      if (styleMatch) {
        styleContent = styleMatch[1];
        template = template.replace(styleMatch[0], '');
      }

      // First pass: validate all variables can be parsed
      const varMatches = scriptContent.match(/let\s+(\w+)\s*=\s*([^;]+);?/g);
      if (varMatches) {
        for (const match of varMatches) {
          const varMatch = match.match(/let\s+(\w+)\s*=\s*([^;]+)/);
          if (varMatch) {
            const [, name, value] = varMatch;
            // Handle $state() wrapping
            const cleanValue = value.replace(/\$state\(([^)]+)\)/, '$1').trim();
            try {
              testVariables[name] = eval(cleanValue);
            } catch (err) {
              console.log(`REPL: Invalid variable detected: ${name} = ${cleanValue}`, err);
              hasValidationError = true;
              break;
            }
          }
        }
      }

      // If any variable failed validation, don't update the output
      if (hasValidationError) {
        console.log('REPL: Validation failed, keeping last valid output');
        return;
      }

      // Second pass: actually build the variables now that we know they're all valid
      let jsVars = '';
      const variables = testVariables;
      if (varMatches) {
        varMatches.forEach(match => {
          const varMatch = match.match(/let\s+(\w+)\s*=\s*([^;]+)/);
          if (varMatch) {
            const [, name, value] = varMatch;
            const cleanValue = value.replace(/\$state\(([^)]+)\)/, '$1').trim();
            jsVars += `let ${name} = ${cleanValue};\n`;
          }
        });
      }

       // Handle onclick handlers first - convert Svelte syntax to data attributes
       let processedTemplate = template;
       processedTemplate = processedTemplate.replace(/onclick=\{[^}]*\}/g, (match) => {
         const handler = match.match(/onclick=\{([^}]*)\}/);
         if (handler) {
           let jsHandler = handler[1].trim();
           // Convert arrow function to regular function call
           if (jsHandler.includes('=>')) {
             jsHandler = jsHandler.replace(/\(\) => (.+)/, '$1');
           } else if (!jsHandler.includes('(')) {
             // If it's just a function name without parentheses, add them
             jsHandler = jsHandler + '()';
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

       const newHtml = [
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

       // Store as last valid HTML and update iframe
       lastValidHtml = newHtml;
       if (iframe) {
         iframe.srcdoc = newHtml;
       }

    } catch (err: any) {
      error = err.message;
      console.log('REPL: Parse error, keeping last valid output:', err.message);
      // Don't update iframe on error - keep showing last valid HTML
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
