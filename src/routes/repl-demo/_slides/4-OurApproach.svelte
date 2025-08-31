<div id="subtitle">Our Approach</div>
<div id="title">Parse, don't compile</div>
<ul id="bullet-list">
   <li><strong>Custom parser</strong> for Svelte syntax</li>
   <li>Convert to <span>vanilla HTML/JS/CSS</span></li>
   <li>No real compiler needed!</li>
   <li><strong>Simple</strong> but surprisingly effective</li>
   <li>Works for basic Svelte 5 features</li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: lightgreen;
      transform: translateY(-25cqh) scale(7);
      text-align: center;
   }

   #title {
      color: #ccc;
      place-self: center;
      transform: translateY(-15cqh) scale(3);
      text-align: center;
   }

   #bullet-list {
      transform: translateY(8cqh) scale(2.5);
      color: hsl(45, 80%, 60%);
      place-self: center;
      line-height: 1.5lh;
      transition: all 0.5s linear;
   }

   span {
      color: white;
   }

   strong {
      color: lightgreen;
   }
</style>