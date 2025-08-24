# Svelte Movie Maker Todo

- [x] get styling as minimal as possible
- [x] convert AutoType to an attachment
- [x] Make interactive Video! Doesn't need to be very long. Just show the components.
- [x] figure out how to lose position: absolute from each slide (add it in stage.ts somewhere?)
- [x] remove <template> syntax and have persistence by default (or as an option)


- [ ] figure out how to separate library stage from user stage
- [ ] restoreMarks function unnecessary - some of it still useful as alternative mode
- [ ] install REPL toolkit (plugin-studio?)


---

## Bugs

Is a bit annoying when designing each slide - having an easy way to view them with HMR would be ideal. It would be fine to just show them instead of the Stage but

Think I'd prefer elements stay where they are if no element present in next slide. This would allow persistence without
 syntax and encourage off screen placement of unused elements.
