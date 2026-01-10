<template>
   <p>If you've used Keynote, you might be aware of Magic Move, a feature that transitions objects between two different slides.</p>
   <p>After using that, I wondered: can it be done on the web?</p>
   <p>That is, could you assign the same ID to elements in two different components, and have them transition when the component changes?</p>
   <p>First I tried View Transition API, however I found the results unsatisfying. I wanted something a bit more robust.</p>
</template>

<div id="text-1" class='text'>Suppose I have one slide that looks like this...</div>
<div id="text-2" class="text">And another that looks like this.</div>

<div id="slide-1" class="slide"></div>
<div id="slide-2" class="slide"></div>

<style>
   .text {
      --translate-x: -20cqw;
      --translate-y: 25cqh;
   }

   .slide {
      --translate-x: 25cqw;
      --translate-y: 25cqh;
   }

   #text-1, #slide-1 {
      transform: translate(var(--translate-x), calc(var(--translate-y) * -1));
   }

   #text-2, #slide-2 {
      transform: translate(var(--translate-x), var(--translate-y));
   }
</style>
