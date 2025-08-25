# Show & Svelte Design

## Separation of core library

Ideally the user can install whichever libraries they want, so their vfx can be separate from `show-and-svelte`. This should be fine as long as they understand to override some styles when necessary.

I would like the record feature using svelte-mainloop, but it's not urgent.



## Solutions to attachment/event listener problems

- data-style overrides for the scene element (these might be better as a style string)

```ts
for (const key in element.dataset) {
   if (key in element.style) element.style[key] = element.dataset[key]
}
```

- function callbacks for event listeners, called on the mark before the scene element

```ts
mark.onmousedown = (event: MouseEvent) => {
   console.log("Mark mousedown", event)
   element.onmousedown?.(event)
}
```

## Attachments

Instead of using stageState updates to trigger, is there a way of auto-triggering an element so that the attachment reruns?

Or rather, can I just modify typewriter to detect when the element is on the screen?

Or maybe I can wrap attachments in some fashion.
