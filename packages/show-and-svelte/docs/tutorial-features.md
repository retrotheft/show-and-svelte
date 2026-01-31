# Tutorial Features

- [x] provide way to override next slide button until slide is satisfied
   - user can add svelte window onkeydown listener and block propagation until satisfied
- [x] Reactive Style Properties
   - `reactiveProperties` attachment directly sets parent (mark) styles
- [ ] Scene progress indicator (part of overlay API, along with controls)
- [ ] Convenient way to declare a multi-stage slide?
   - [ ] mechanism to handle internal slide state and slide inputs - `<SlideLock {boolean} {prev} {next}>`
- [ ] tooltips
   - [x] active tooltip system for notes, tie to element
   - [ ] line numbers for markdown / code to attach tooltips too (maybe without [text] or empty [])
- [ ] `FlyInText` for easy bullet points
- [ ] Stage should remember slide number so size changes don't reset
