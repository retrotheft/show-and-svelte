###### createRawSnippet with new reactive element

```ts
let count = $state(0)

const mySnippet = createRawSnippet(() => ({
      render: () => `<div></div>`,
      setup: (div) => {
         $effect(() => {
            div.textContent = count
         })
      }
   })
)
```
