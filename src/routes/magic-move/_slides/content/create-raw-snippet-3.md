###### createRawSnippet using an existing element's reactivity

```ts
const mySnippet = createRawSnippet(() => ({
      render: () => `<div></div>`,
      setup: (div) => {
         div.appendChild(ourRootElement);
      }
   })
)
```
