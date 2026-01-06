##### Stage Component *<script>* tag

```ts
let { children } = $props()

children({ before: (...args) => console.dir(args) })

// logs either Nodes or a DocumentFragment
```
