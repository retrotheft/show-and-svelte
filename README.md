# Show & Svelte

Create fully interactive presentations with Svelte.

- all transitions are handled automagically. Just place elements on slides.
- comes with **CodeEditor** and **MarkdownIt** components for convenience
- syntax highlighting for code and markdown, just BYO `highlight.js` and configure it (more below)

[See it in action](https://www.youtube.com/watch?v=Qgq7tLiWoco) (this is the tutorial video also linked below.)

## Installation

First, create a new vite project:

```sh
npm create vite@latest
```

Give it a name, select Svelte etc. Then install Show & Svelte:

```sh
npm install show-and-svelte
```

Make sure you're using at least Svelte 5.29, since Show & Svelte uses attachments.

If you just want to record your screen, you're good to go.

If you want to build presentation to js/css, so you can embed it, refer to **BUILD_SETUP.md**.

## Usage

Refer to [this quick 30s tutorial video](https://www.youtube.com/watch?v=Qgq7tLiWoco) to get started.

### Markdown Usage (no syntax highlighting)

You can use the included MarkdownIt component like this:

```svelte
<script lang="ts">
   import { MarkdownIt } from 'show-and-svelte'
   import content from './your-content?raw' // make sure you use ?raw
</script>

<!-- this id can be anything, it doesn't have to be "markdown" -->
<!-- Just make sure all root elements of components have IDs -->
<div id="markdown">
   <MarkdownIt {content} />
</div>

<style>
   /* Style it how you like, this is just an example */
   .markdown {
      place-self: center end;
      font-size: 3em;
      color: white;
      width: 40cqw;
   }
</style>
```

If you want syntax highlighting, you will need to install `highlight.js` and configure a **HighlightProvider** to set the `hljs` context. It sounds more difficult than it is.

### Syntax Highlighting

First, make sure you install `highlight.js`.

```sh
npm install highlight.js
```

Next, create a component named something like **HighlightProvider.svelte**, and add something like the following:

```svelte
<script lang="ts">
   import hljs from 'highlight.js/lib/core';
   import { type Snippet } from 'svelte';

   // import whichever languages you want to use
   import Javascript from "highlight.js/lib/languages/javascript"
   import Css from "highlight.js/lib/languages/css"
   import Xml from "highlight.js/lib/languages/xml"

   // this function will set the hljs context
   import { setHljsContext } from 'show-and-svelte';

   let { children }: { children: Snippet } = $props();

   // then just register the languages
   hljs.registerLanguage("css", Css)
   hljs.registerLanguage("html", Xml)
   hljs.registerLanguage("javascript", Javascript)

   setHljsContext(hljs) // set the context
</script>

<svelte:head>
   <!-- finally, make sure you set a theme for highlight.js -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css" />
</svelte:head>

{@render children()}
```

You can find a list of [highlight.js themes here](https://highlightjs.org/examples). Those theme names should work in the url provided in the code example.

The **HighlightProvider** works with named code blocks in the **MarkdownIt** component, as well as the **CodeEditor**.

## Code Editor

The **CodeEditor** component included in Show & Svelte is a modified version of [webcoder49's code-input](https://github.com/WebCoder49/code-input). I had constant headaches with it as a global, so I asked Claude to modify it to a Svelte component, and to update two of its plugins to typescript: `indent` and `auto-close-brackets`.

**CodeEditor** receives 3 props, only one of which is required:

- `code` is your code. This uses Svelte's `$bindable` rune, so use `bind:code` with a `$state` string.
- `language` corresponds to a `highlight.js` language. If you omit it, **CodeEditor** will use `hljs.highlightAuto`
- `placeholder` will set placeholder text for when your code string is empty.

---

## Common Problems

### A transition is broken!

First, check if the element is empty. Since slides update immediately on a slide change, sometimes it seems like a transition isn't working when the element's content is just disappearing.

### I'm seeing a Flash of Unstyled Content!

Yeah these are a pain. There are some measures in place that have prevented them for me, but if you encounter one, please let me know.
