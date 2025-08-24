# Show & Svelte Design

## Solutions to attachment/event listener problems

- data-style overrides for the scene element

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
