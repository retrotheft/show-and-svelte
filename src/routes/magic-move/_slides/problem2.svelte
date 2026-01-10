<div id="text-1" class="text">How can we create an automatic transition between them...</div>
<div id="text-2" class="text">Based only on the fact that they share the same CSS ID?</div>

<div id="slide-1" class="slide"></div>
<div id="slide-2" class="slide"></div>

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

</style>
