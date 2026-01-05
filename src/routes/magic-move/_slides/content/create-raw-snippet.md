###### createRawSnippet

```ts
function createRawSnippet<Params extends unknown[]>(
    fn: (...params: Getters<Params>) => {
        render: () => string;
        setup?: (element: Element) => void | (() => void);
    }
): Snippet<Params>;
```
