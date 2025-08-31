<div id="subtitle">That's All!</div>
<div id="title">Thanks for watching</div>
<ul id="bullet-list">
   <li><strong>Simple parser</strong> beats complex bundling</li>
   <li><span>Perfect</span> for presentations and demos</li>
   <li><strong>Svelte 5 ready</strong> with $state() support</li>
   <li><span>Easy to embed</span> anywhere</li>
   <li>Try it at <strong>/repl-demo</strong></li>
   <li><span>Questions?</span></li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: #ff3e00;
      transform: translateY(-25cqh) scale(8);
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
      color: #ff3e00;
   }
</style>