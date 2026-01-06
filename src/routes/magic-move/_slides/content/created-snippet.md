```ts
createRawSnippet(() => ({
   render: () => "<div></div>",
   setup: (div) => {
      const mark = div.parentNode;
      swapClass(element, mark)
      element.removeAttribute("id")
      div.appendChild(element);
      return () => {
         swapClass(mark, element)
         element.id = mark.id
      }
   }
}))
```
