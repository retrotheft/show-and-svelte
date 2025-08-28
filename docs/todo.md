# Svelte Movie Maker Todo

## Next

- [ ] Create Tutorial Presentation
- [ ] Add docs to README

## Soon

- [ ] Player control overlay

## Done

- [x] finalise build settings for single-file js presentations
- [x] build Presentation component that receives the js file
- [x] update package.json with more metadata including repository url
- [x] simplify code-input
- [x] pass hljs into CodeEditor and Markdown
- [x] Remove dependencies
   - [x] hljs (pass object into CodeEditor and Markdown)
- [x] Add props for Stage component
- [x] Add props for Markdown component
- [x] Add props for CodeEditor component
- [x] Move teaser presentation to a separate project.
- [x] How to set marks up as transparently as possible?
- [x] Build and release.
- [x] Transition hooks! (probably worth having... not as useful as imagined though)
- [x] get styling as minimal as possible
- [x] convert AutoType to an attachment
- [x] Make interactive Video! Doesn't need to be very long. Just show the components.
- [x] figure out how to lose position: absolute from each slide (add it in stage.ts somewhere?)
- [x] remove <template> syntax and have persistence by default (or as an option)
- [x] install REPL toolkit (plugin-studio?)


- [ ] restoreMarks function unnecessary - some of it still useful as alternative mode
- [ ] figure out how to separate library stage from user stage

---

## Bugs

- [ ] Tooltips stay on screen if slide changes while active
- [ ] HMR still problematic when non-css changes

---

Is a bit annoying when designing each slide - having an easy way to view them with HMR would be ideal. It would be fine to just show them instead of the Stage but

Think I'd prefer elements stay where they are if no element present in next slide. This would allow persistence without
 syntax and encourage off screen placement of unused elements.

`pointer-events` are problematic to transfer, for multiple reasons.

It seems as though a significant number of styles, including `text-align`, don't make it onto the mark despite being set in the slides. This might suggest that we need to get more styles from the element onto the clone?

Could it be that because we haven't appended the elements to the DOM, the clones are missing styles?

`justify-content` on `[data-actor]` doesn't get overriden by styles in slides.

Need a solution where the scene element can fill
