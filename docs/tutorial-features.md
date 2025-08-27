# Tutorial Features

- [ ] provide way to override next slide button until slide is satisfied
   - user can add svelte window onkeydown listener and block propagation until satisfied

- [ ] Custom style properties
   - [ ] could check and not remove custom properties on styles
   - [ ] could use an attachment to add custom properties (would likely do this anyway)

## Internal Scenes and custom properties

- transferStyles isn't going to run if the scene doesn't change
- which means
