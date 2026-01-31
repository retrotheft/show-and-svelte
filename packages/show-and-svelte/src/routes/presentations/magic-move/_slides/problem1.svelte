<script lang="ts">
   import SlideContents from '../_components/SlideContents.svelte'
</script>

<template>
   <p>If you've used Keynote, you might be aware of Magic Move, a feature that transitions objects between two different slides.</p>
   <p>After using that, I wondered: can it be done on the web?</p>
   <p>That is, could you assign the same ID to elements in two different components, and have them transition when the component changes?</p>
   <p>First I tried View Transition API, however I found the results unsatisfying. I wanted something a bit more robust.</p>
</template>

<div id="text-1" class='text'>Suppose I have one slide that looks like this...</div>
<div id="text-2" class="text">And another that looks like this.</div>

<div id="slide-1" class="slide"><SlideContents /></div>
<div id="slide-2" class="slide"><SlideContents /></div>

<div id="you-are-here">
   <img src="/you-are-here.png" />
   <span>You are here</span>
</div>

<style>
   .text {
      --translate-x: -20cqw;
      --translate-y: 25cqh;
   }

   .slide {
      --translate-x: 25cqw;
      --translate-y: 25cqh;
      transform-origin: center;
   }

   #slide-1:hover {
      transform: translate(var(--translate-x), calc(var(--translate-y) * -1)) scale(1.2);
   }

   #text-1, #slide-1 {
      transform: translate(var(--translate-x), calc(var(--translate-y) * -1));
   }

   #text-2, #slide-2 {
      transform: translate(var(--translate-x), var(--translate-y));
   }

   #slide-2 {
      direction: rtl;
   }

   #you-are-here {
      transform: translate(8cqw, -7cqh) scale(0.75);
      display: flex;
      flex-direction: column;

      & :global(img) {
         transform: rotate(0deg);
      }

      & span {
         color: #FFEE00;
         font-size: 2rem;
      }
   }
</style>
