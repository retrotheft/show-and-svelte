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

You can also just make presentations in a Svelte project and build the whole thing together.

In either of the latter two cases, be aware the PresentationViewer very basic right now.

## Usage

Refer to [this quick 30s tutorial video](https://www.youtube.com/watch?v=Qgq7tLiWoco) to get started.

### Markdown Usage (without syntax highlighting)

You can use the included **MarkdownIt** component like this:

```svelte
<script lang="ts">
   import { MarkdownIt } from 'show-and-svelte'
   import content from './your-content.md?raw' // make sure you use ?raw
</script>

<!-- this id can be anything, it doesn't have to be "markdown" -->
<!-- Just make sure all root elements of components have IDs -->
<div id="markdown">
   <MarkdownIt {content} />
</div>

<style>
   /* Style it how you like, this is just an example */
   #markdown {
      place-self: center end;
      font-size: 3em;
      color: white;
      width: 40cqw;
   }
</style>
```

If you want syntax highlighting, you will need to install `highlight.js` and set up the `hljs` context.

### Syntax Highlighting

First, make sure you install `highlight.js`.

```sh
npm install highlight.js
```

Next, create a component such as **HighlightProvider.svelte**, and do the following:

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

The **CodeEditor** component included in Show & Svelte is a modified version of [webcoder49's code-input](https://github.com/WebCoder49/code-input). I had constant headaches with it as a global, so I asked Claude to modify it to a Svelte component, and to update two of its plugins to typescript: `indent` and `auto-close-brackets`. These are included. If you wanted to use any other plugins, they'd probably need to be similarly converted. Let me know if so.

**CodeEditor** receives 3 props; `code` is required, the other two are optional:

- `code` is your code. This uses Svelte's `$bindable` rune, so use `bind:code` with a `$state` string.
- `language` corresponds to a `highlight.js` language. If you omit it, **CodeEditor** will use `hljs.highlightAuto`
- `placeholder` will set placeholder text for when your code string is empty.

```svelte
<script lang="ts">
   import { CodeEditor } from 'show-and-svelte'

   let code = $state(`const message = "Hello"`)
</script>


<div id="code">
   <CodeEditor bind:code />
</div>

<style>
   #code {
      border: 1px solid grey;
      background-color: #111;
      place-self: start end;
      height: 100%;
      font-size: 3em;
      color: white;
      width: 40cqw;
   }
</style>
```

---

## How it works

When the **Stage** component loads the slides in the children snippet, it immediately extracts all the nodes instead of rendering the snippet. Since Svelte very helpfully divides these nodes by component using comment nodes, it's easy to group them.

Next, a set of 'mark' elements are created in the stage. These are the elements that actually perform the transitions, and they never leave the stage. One mark is created for each unique id across all slides.

Finally, a snippet is created for each root element in each component using `createRawSnippet`. These snippets perform some setup when they are rendered, such as transferring the element's ID and scope class to the mark. When the snippet is destroyed, these attributes are removed. Snippets are loaded and unloaded using the current slide index and the element id.

Using this system, Show & Svelte manages to keep your component's reactivity while also automating all transitions, which is great, but it does come with some quirks.

---

## Best Practices

- Always use IDs on component root elements.
- Root elements with the same ID will transition.
- Control transitions with before and after elements in surrounding slides. (for now)
- When styling, target root elements by **#id** in scoped components.
- Nested elements can be targeted by their tags or classes.
- Use Container units like **cqh** and **cqw**.
- For font-sizes, use **em** instead of **rem**, because container.

---

## Common Problems

### A transition is broken!

First, check if the element is empty. Since slides update immediately on a slide change, sometimes it seems like a transition isn't working when the element's content is just disappearing.

### I'm seeing a Flash of Unstyled Content!

Yeah these are a pain. There are some measures in place that have prevented them for me, but if you encounter one, please let me know.

### Performance

Show & Svelte is performant enough on my M1 to get good results when recording my screen, though I have noticed some hiccups, particularly if recording in 4K.

First, always give the presentation a complete run through and back before recording, after every page reload. This seems to keep things running a lot smoother than trying to record immediately after a reload.

Next, ideally use **transform** for spatial movements. These prevent the browser from needing to recalculate a bunch of elements positions on the page. Similarly, use **opacity** for fades and for hiding things, rather than **visibility** or **display**.

If you want to know more about this topic (Layout Thrashing), and what triggers **reflows** and **repaints**, [start here](https://gist.github.com/paulirish/5d52fb081b3570c81e3a).

Also, there is most likely some more I can do inside Show & Svelte to improve things further; any suggestions or advice are welcome!

In **Chrome** and **Firefox**, you can use transform: scale for font sizes, but I wouldn't do that in **Safari**.
