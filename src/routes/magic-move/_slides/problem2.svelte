<script lang="ts">
   import { typewriter } from '$lib/index.js'
   import SlideContents from '../_components/SlideContents.svelte'
</script>

<div id="text-1" class="text" {@attach typewriter("How can we create an automatic transition between them...", 1)}></div>
<div id="text-2" class="text" {@attach typewriter("Based only on the fact that they share the same CSS ID?", 1)}></div>

<!-- <div id="text-1" class="text">How can we create an automatic transition between them...</div> -->
<!-- <div id="text-2" class="text">Based only on the fact that they share the same CSS ID?</div> -->

<div id="slide-1" class="slide"><SlideContents /></div>
<div id="slide-2" class="slide"><SlideContents /></div>

<div id="you-are-here">
   <img src="/you-are-here.png" />
   <span>You are here</span>
</div>

<style>
   .text {
      --translate-x: 20cqw;
      --translate-y: 25cqh;
   }

   .slide {
      --translate-x: -25cqw;
      --translate-y: 25cqh;
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
      transform: translate(-8cqw, 7cqh) scale(0.75) rotate(180deg);
      display: flex;
      flex-direction: column;

      & :global(img) {
         /*transform: rotate(180deg);*/
      }

      & span {
         color: #FFEE00;
         font-size: 2rem;
         transform: rotate(180deg);
      }
   }
</style>
