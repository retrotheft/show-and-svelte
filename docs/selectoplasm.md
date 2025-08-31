# Selectoplasm Experiments

- there's a getComputedStyle bug that happens on ... marks? Not sure. Doesn't happen on #stage
- `place-self` causes shakiness when editing spatial properties
- styling presentations is definitely a great sandbox for building plugins
- transitions are lame when editing in realtime - need a way to turn off in Show & Svelte.
- slideLock prevents E bringing up the Element Menu
- Selectoplasm takes over the title

## Notes

Rather than using it to edit existing elements, which I can also use `attach-this` for a little, I might be able to use Selectoplasm to add images to the presentation. Though I won't be able to add elements themselves... I can front load all the images in Selectoplasm and assign them using css if I just add the containers to the presentation slides. If I can design a seamless UX to do that, the Selectoplasm / Show & Svelte combo becomes even more attractive for videos.

Could add `attach-this` to selectoplasm too. I wonder if it could replace the window manager? (Probably not.)

## Image elements

Add image contianer in IDE. Then run presentation. Image plugin has images loaded. Ideally we'd like to be able to drag and drop the image onto the element and update the CSS. Then control attributes in the plugin, or the component. Wouldn't want to fuss around with classes and typing probably.

## Environment

How to set up a dev version of Selectoplasm with Show & Svelte that I can test? Is that necessary? Just need to somehow replicate the bugs below really.

---

## styleObserver bugs:

The `getComputedStyle` bug is interesting. On a scoped class selector, combo input won't return. On

Failed to execute 'getComputedStyle' on 'Window': parameter 1 is not of type 'Element'. This happens when opening the component builder with a `#id.scoped-class` selector.

Happens in `updateComputedStyle`: this.computedStyles.set(A, `getComputedStyle(A)`) second parameter.

Also get `I.append is not a function` when applying `#id.scoped-class` with selector builder. This happens on line 4 of updateElement(A, B, E)

Both of these are likely related to trying to run methods on `window` maybe?
