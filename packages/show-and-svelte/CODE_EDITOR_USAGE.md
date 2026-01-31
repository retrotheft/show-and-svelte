# CodeEditor Usage Guide

The CodeEditor component now works completely independently without requiring global script dependencies.

## Basic Usage

```svelte
<script>
  import { CodeEditor } from 'show-and-svelte';
  
  let code = '';
</script>

<CodeEditor 
  bind:code 
  language="javascript" 
  template="js-template" 
/>
```

## Advanced Usage

### Custom Placeholder

```svelte
<CodeEditor 
  bind:code 
  language="javascript" 
  template="js-template"
  placeholder="Enter your JavaScript code here..."
/>
```

### Custom Theme

You can override the default tokyo-night-dark theme:

```svelte
<CodeEditor 
  bind:code 
  language="javascript" 
  template="js-template"
  theme="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css"
/>
```

### Available Themes

Popular Highlight.js themes you can use:

- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.css`
- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/monokai.css`
- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.css`
- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs.css`
- `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css` (default)

## Features

- ✅ **Auto-indentation**: Smart indentation with Tab/Shift+Tab support
- ✅ **Auto-closing brackets**: Automatic closing of parentheses, brackets, and quotes  
- ✅ **Syntax highlighting**: Full highlight.js integration
- ✅ **Custom placeholders**: Override default placeholder text
- ✅ **Theme support**: Use any highlight.js theme
- ✅ **No global dependencies**: Everything is bundled and self-contained
- ✅ **SSR compatible**: Works with SvelteKit server-side rendering

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | `string` | Yes | `""` | The code content (bindable) |
| `language` | `string` | Yes | - | Programming language for syntax highlighting |
| `template` | `string` | Yes | - | Template name for the code editor |
| `placeholder` | `string` | No | `""` | Placeholder text when editor is empty |
| `theme` | `string` | No | tokyo-night-dark | URL to highlight.js theme CSS |