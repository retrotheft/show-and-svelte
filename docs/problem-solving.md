# Problem Solving

Now that it's possible to subdivide a collection of components in children into root element snippets, it should be trivial to render each snippet at its correct mark, though it might still require some work matching them up in a clean way.

The main thing to solve now is styling. Ideally styling could be achieved through ids and classes, and their manipulation, rather than manipulating element.style directly. It would still be nice to set styles in svelte components though, but the scoping might prove to be difficult to work with in this regard, since the mark isn't in scope.

The problem: successfully transfer styles from the scene element to the mark. It's worth noting that we only need to transfer animatable properties, so some understanding of [CSS Animated Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties) is going to be helpful.

The best solution is likely to provide clear guidelines on when users should style by id, class, in scope or in external files.
