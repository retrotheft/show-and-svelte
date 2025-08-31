<div id="subtitle">The Challenge</div>
<div id="title">Svelte needs compilation, not interpretation</div>
<ul id="bullet-list">
   <li>Official REPL uses <strong>complex bundling</strong></li>
   <li>Rollup, workers, module resolution...</li>
   <li>Dependencies: <span>zimmerframe</span>, <span>@rollup/browser</span></li>
   <li>Hard to embed in <strong>presentations</strong></li>
   <li>We needed something <span>simpler</span></li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: orange;
      transform: translateY(-25cqh) scale(7);
      text-align: center;
   }

   #title {
      color: #ccc;
      place-self: center;
      transform: translateY(-15cqh) scale(2.5);
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
      color: orangered;
   }
</style>