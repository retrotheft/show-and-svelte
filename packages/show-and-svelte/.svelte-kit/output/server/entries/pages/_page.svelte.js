import { u as setContext, w as getContext, t as push, y as head, v as pop, z as attr, F as attr_style, G as stringify, J as ensure_array_like } from "../../chunks/index.js";
import hljs from "highlight.js/lib/core";
import Javascript from "highlight.js/lib/languages/javascript";
import Css from "highlight.js/lib/languages/css";
import Xml from "highlight.js/lib/languages/xml";
import "markdown-it";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
const key = {};
function setHljsContext(hljs2) {
  setContext(key, hljs2);
}
function getHljsContext() {
  return getContext(key);
}
function HighlightProvider($$payload, $$props) {
  push();
  let { children } = $$props;
  hljs.registerLanguage("css", Css);
  hljs.registerLanguage("html", Xml);
  hljs.registerLanguage("javascript", Javascript);
  setHljsContext(hljs);
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/tokyo-night-dark.css"/>`);
  });
  children($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
function Mark($$payload, $$props) {
  push();
  let { id } = $$props;
  $$payload.out.push(`<div${attr("id", id)} data-mark="true" data-ready="true"${attr_style(`transition: ${stringify(
    // Firefox often needs an extra frame
    // this also works for firefox instead of double RAF
    // document.body.offsetHeight;
    "none"
  )}`)}>`);
  $$payload.out.push(`<!----></div>`);
  pop();
}
function extract(children) {
  let result = null;
  children({ before: (array) => result = array });
  return result;
}
let cachedProcessedNodes = null;
function processNodes(children) {
  if (!children) return { commentGroups: [], allElements: [] };
  const extracted = extract(children);
  let nodes = [];
  if (extracted && extracted.childNodes) {
    nodes = Array.from(extracted.childNodes);
  } else if (Array.isArray(extracted)) {
    nodes = extracted;
  }
  if (nodes.length === 0) {
    console.warn("Could not extract any nodes");
    return { commentGroups: [], allElements: [] };
  }
  const commentGroups = [];
  let currentGroup = [];
  for (const node of nodes) {
    if (node.nodeType === Node.COMMENT_NODE) {
      if (currentGroup.length > 0) {
        commentGroups.push([...currentGroup]);
        currentGroup = [];
      }
    } else {
      currentGroup.push(node);
    }
  }
  if (currentGroup.length > 0) commentGroups.push(currentGroup);
  const filteredCommentGroups = commentGroups.filter(
    (group) => group.some((node) => node.nodeType === Node.ELEMENT_NODE)
  );
  const allElements = [];
  filteredCommentGroups.forEach((group, groupIndex) => {
    const elements = group.filter((node) => node.nodeType === Node.ELEMENT_NODE);
    elements.forEach((element, elementIndex) => {
      allElements.push({
        element,
        groupIndex,
        elementIndex,
        globalIndex: allElements.length
      });
    });
  });
  return { commentGroups: filteredCommentGroups, allElements };
}
function extractMarkIds(children) {
  if (!children) return [/* @__PURE__ */ new Set(), 0];
  cachedProcessedNodes = processNodes(children);
  const markIds = /* @__PURE__ */ new Set();
  cachedProcessedNodes.allElements.forEach(({ element }) => {
    if (element.id) {
      markIds.add(element.id);
    }
  });
  const slideCount = cachedProcessedNodes.commentGroups.length;
  return [markIds, slideCount];
}
function Stage($$payload, $$props) {
  push();
  let {
    children,
    width = "1940",
    height = "1100"
  } = $$props;
  const [markIds, slideCount] = extractMarkIds(children);
  const each_array = ensure_array_like(
    // $effect(() => {
    //    // prevents FOUC
    //    setTimeout(() => transitionsReady = !!snippetMap, transitionTimeout)
    // })
    markIds
  );
  $$payload.out.push(`<div id="stage-container"${attr_style(`--width: ${width}px; --height: ${height}px;`)}><div id="stage"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let id = each_array[$$index];
    Mark($$payload, { id });
  }
  $$payload.out.push(`<!--]--></div></div>`);
  pop();
}
function MarkdownIt($$payload, $$props) {
  push();
  let { content: content2 } = $$props;
  getHljsContext();
  let markdown = void 0;
  $$payload.out.push(`<div class="markdown-it svelte-12mmk7l">${html(markdown)}</div>`);
  pop();
}
function __Title($$payload, $$props) {
  push();
  const custom = { opacity: 0 };
  head($$payload, ($$payload2) => {
    $$payload2.out.push(`${html(`<style>
      :root {
         --subtitle-opacity: ${custom.opacity};
      }
   </style>`)}`);
  });
  $$payload.out.push(`<div id="title" class="svelte-rs3fjz">Show &amp; Svelte</div> <div id="subtitle" class="svelte-rs3fjz">Tutorial (v0.0.3)</div> <div id="markdown" class="svelte-rs3fjz">`);
  MarkdownIt($$payload, { content: "" });
  $$payload.out.push(`<!----></div>`);
  pop();
}
const content$2 = '###### 1-BabysFirstSlide.svelte\n\n```html\n<div id="subtitle">\n   Baby\'s First Slide\n</div>\n```\n---\n```css\n#subtitle {\n   place-self: center;\n   color: violet;\n}\n```\n';
function __BabysFirstSlide($$payload) {
  $$payload.out.push(`<div id="subtitle" class="svelte-n45qob">Baby's First Slide</div> <div id="markdown" class="markdown svelte-n45qob">`);
  MarkdownIt($$payload, { content: content$2 });
  $$payload.out.push(`<!----></div>`);
}
const content$1 = '###### 2-Twins.svelte\n\n```html\n<div id="subtitle">\n   Copy and edit\n</div>\n```\n\n---\n\n```css\n#subtitle {\n   place-self: center;\n   color: cornflowerblue;\n}\n```\n';
function __Twins($$payload) {
  $$payload.out.push(`<div id="subtitle" class="svelte-6a7oh1">Copy and edit</div> <div id="markdown" class="svelte-6a7oh1">`);
  MarkdownIt($$payload, { content: content$1 });
  $$payload.out.push(`<!----></div>`);
}
const content = "###### App.svelte (or wherever you like)\n\n```js\nimport { Stage } from 'show-and-svelte'\n// import your components\n```\n\n---\n\n```html\n<Stage>\n   <BabysFirstSlide />\n   <Twins />\n</Stage>\n```\n";
function __StageSlide($$payload) {
  $$payload.out.push(`<div id="subtitle" class="svelte-18zfpeh">Now set it up</div> <div id="title" class="svelte-18zfpeh">Use A and D or the arrow keys to change slides.</div> <div id="markdown" class="svelte-18zfpeh">`);
  MarkdownIt($$payload, { content });
  $$payload.out.push(`<!----></div>`);
}
function __ThatsIt($$payload) {
  $$payload.out.push(`<div id="subtitle" class="svelte-1qquwht">That's it!</div> <div id="title" class="svelte-1qquwht">Use A and D or the arrow keys to change slides.</div> <div id="markdown" class="svelte-1qquwht">`);
  MarkdownIt($$payload, { content });
  $$payload.out.push(`<!----></div> <ul id="bullet-list" class="svelte-1qquwht"><li>Always use IDs. Keep styles in scoped components.</li> <li>Elements with the same ID will transition.</li> <li>Control transitions with before and after elements in surrounding slides.</li> <li>Use Container units like cqh and cqw.</li> <li>Externalising styles can be unpredictable, especially transforms.</li> <li>Advanced Usage Instructions in the github README</li> <li>Look at this tutorial's source code!</li></ul>`);
}
function __QuickTips($$payload) {
  $$payload.out.push(`<div id="subtitle" class="svelte-1b21dmi">Quick Tips</div> <div id="title" class="svelte-1b21dmi">Use A and D or the arrow keys to change slides.</div> <ul id="bullet-list" class="svelte-1b21dmi"><li><strong class="svelte-1b21dmi">Always</strong> use IDs on component root elements.</li> <li>Root elements with the same ID will transition.</li> <li>Control transitions with before and after elements in surrounding slides.</li> <li>When styling, target root elements by <span class="svelte-1b21dmi">#id</span> in scoped components.</li> <li>Nested elements can be targeted by their tags or classes.</li> <li>Use Container units like <span class="svelte-1b21dmi">cqh</span> and <span class="svelte-1b21dmi">cqw</span>.</li> <li>For font-sizes, use <span class="svelte-1b21dmi">em</span> instead of <span class="svelte-1b21dmi">rem</span>, because container.</li>  <li>Look at this tutorial's source code!</li></ul>`);
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div><!---->`);
  {
    Stage($$payload, {
      children: ($$payload2) => {
        HighlightProvider($$payload2, {
          children: ($$payload3) => {
            __Title($$payload3);
            $$payload3.out.push(`<!----> `);
            __BabysFirstSlide($$payload3);
            $$payload3.out.push(`<!----> `);
            __Twins($$payload3);
            $$payload3.out.push(`<!----> `);
            __StageSlide($$payload3);
            $$payload3.out.push(`<!----> `);
            __ThatsIt($$payload3);
            $$payload3.out.push(`<!----> `);
            __QuickTips($$payload3);
            $$payload3.out.push(`<!---->`);
          }
        });
      }
    });
  }
  $$payload.out.push(`<!----></div>`);
  pop();
}
export {
  _page as default
};
