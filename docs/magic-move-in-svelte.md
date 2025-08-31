# How I Recreated Keynote's Magic Move with Svelte Snippets

*A big thankyou to [epicenter](https://github.com/epicenter-so/epicenter) for sponsoring my open source work.*

Earlier this week, I woke up with a thought: would it be possible to automate transitions between components purely by using element IDs, in a similar way to how View Transitions or Magic Move work? The catch was, I specifically did not want to write ANY transition logic. At all.

First I figured that in order to transition an element through multiple scenes, it would need to have a persistent 'container' that never left the page, and I would need to somehow swap the relevant elements in and out. Let's call these persistent containers 'marks'.

My first plan was, I would insert all the scenes into a Stage component as a children snippet, and then instead of rendering the snippet, I would just extract all the elements and store them, appending and removing them from their marks when their scene came about. So challenge one: How do you get elements out of a Svelte snippet instead of rendering it?

Since you normally render snippets using `{@render children()}`, I figured, what if I just call children in my script tag? Well, if you try it, you get this: `Cannot read properties of undefined (reading 'before')`. So, the children snippet is expecting some object, which has a property called 'before'. Interesting.

```ts
children({ before: null })
// error: anchor.before is not a function
```

Ok, so `before` should be a function. Let's expect some arguments and see what we get.

```ts
children({ before: (...args) => console.dir(args) })
```

...and wouldn't you know it, this gives us a Node, or a DocumentFragment - exactly what we need. Easy!

From here, I scanned through every element, (helpfully separated per component by comment nodes, thanks Svelte) and added each id to a set. Then I created persistent marks from this set.

Here was the real challenge though: How do you swap elements in and out of your DOM while transferring their styles to a parent element and ensuring everything looks the way it ought to?

Well, you can do it manually if you want. I did. I even made Show & Svelte's first video this way. But it's incredibly brittle, it breaks some reactivity, and in general it's just a Rube Goldberg machine with an arsenal of edge cases to sting you with. So let's skip over the entire ordeal and keep this article on track. If you want to see what it looked like, [here you go.](https://github.com/retrotheft/show-and-svelte/blob/e82e8a1d41ee81338fb9595e7fd47aa517fabeb0/src/lib/functions/stage.ts)

Fast forward a couple of days, and I was still thinking about snippets. Since `createRawSnippet` exists, I thought, it must be possible to convert all those root elements into their own snippets, and then render them inside their marks.

Unfortunately, anyone who's tried using Svelte to this level has probably also noticed something. A lof of this stuff is fairly conservatively documented:

```ts
function createRawSnippet<Params extends unknown[]>(
	fn: (...params: Getters<Params>) => {
		render: () => string;
		setup?: (element: Element) => void | (() => void);
	}
): Snippet<Params>;
```

*You just read the entirety of the createRawSnippet documentation.*

For starters, what the above doesn't tell you is that the `element` parameter in `setup` will be the topmost element that you put inside render. Try to use `createRawSnippet` and pass an empty string to render, and all you'll get is: `Illegal invocation`, an uncharacteristically unhelpful error. Add an element though:

```ts
const mySnippet = createRawSnippet(() => ({
		render: () => "<div id='render-div'></div>",
		setup: (element) => console.log(element)
	}))

// this will log the div#render-div to the console.
```

Eventually, after reading through various discussions, issues and pull requests on the svelte github, and pasting svelte source code into Claude and asking him to dumb it down for me, I learned how to create reactive snippets with `createRawSnippet`:

```ts
let count = $state(0)

const mySnippet = createRawSnippet(() => ({
   	render: () => `<div></div>`,
   	setup: (div) => {
         // it would never have occurred to me to use effect here
   		$effect(() => {
   			div.textContent = count
   		})
   	}
   })
)
```

But actually, if we're not putting a reactive statement into our snippet, and are just performing a one time operation like appending an element to the DOM, we don't even need the `$effect`:

```ts
const article = document.createElement('article')

const mySnippet = createRawSnippet(() => ({
      render: () => `<div></div>`,
      setup: (div) => {
         div.appendChild(article);
      }
   })
)
```

So we know how to create a reactive snippet programmatically, and we have a bunch of elements that we want to render inside their marks. Feels like we're pretty close to a solution.

Now we need to render an element that we can manipulate in `setup`. This obviously can't be our mark, because that already exists and we need it to be persistent, so we need to create an intermediary. No problem. We'll just put a div there and use `display: contents`* to prevent it from bothering us, stylistically speaking. Then since we're rendering these snippets directly inside our marks, we can get our mark reference with `div.parentNode`. Easy.

Now we can transfer our scene element's styles to the mark. Which, embarrassingly, I was definitely doing the long way around in my first iteration\*\*.

Now, when the snippet sets itself up, it does the following:

1. Transfers the element's classes to the mark and removes them from the element.
2. Removes the element's ID so only the mark is styled.
3. Appends the element to the div we created in `render`.
4. Sets a cleanup function that restores the element's classes and ID.

```ts
createRawSnippet(() => ({
   render: () => "<div></div>",
   setup: (div) => {
      const mark = div.parentNode;
      swapClass(element, mark)
      element.removeAttribute("id")
      container.appendChild(element);
      return () => {
         swapClass(mark, element)
         element.id = mark.id
      }
   }
}))
```

*The final code, minus boring stuff like type checking.*

And with that, we have seamless transitions between elements in different components, without needing to write any transition logic at all. Pretty sweet! Our components are just a collection of root elements with IDs that we can style internally with scoped styles, and then pass as children into our Stage.

[Here's a short video](https://www.youtube.com/watch?v=Qgq7tLiWoco) of what all of that looks like, made with Show & Svelte of course.

## Final Thoughts

While trawling the Svelte github trying to wrap my head around snippets, I saw a lot of discourse about whether snippets are really all that different from components. Honestly, I felt pretty similarly when I started using Svelte 5. But now, after having done this... nah snippets are where it's at. With snippets, we got:

- Full reactivity intact
- Persistent state even after snippets are destroyed
- Pretty great dev ux actually.

Snippet gang rise up!

---

**Show & Svelte** is 100% open source, MIT Licensed, and available on [github](https://github.com/retrotheft/show-and-svelte) and [npm](https://www.npmjs.com/package/show-and-svelte). Comes with full markdown and code editing support, with syntax highlighting.

So far it's been a game changer for me making videos for YouTube, a process that I genuinely hated before. Check it out and let me know how it goes!


**[Discord](https://discord.gg/a2FCPAh8gz)** | **[Github](https://github.com/retrotheft)**

---

## Footnotes

\* Using `display:contents` is an absolutely foolproof plan with no possibility of ever [coming back to haunt us.](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

\*\* ...to save you a huge amount of trouble in future, remember this: if you want to transfer CSS styles from one element to another, you ONLY need to transfer the ID and the className. Not the, you know, actual styles. And you certainly don't need to render an entire offscreen stage element populated with clone elements from which you get computed styles, and then sift through which styles actually get included in computed styles, not to mention that you're now dealing with the results of the CSS calculations instead of the actual CSS and... well... ID and className. That's. All. You. Need.
