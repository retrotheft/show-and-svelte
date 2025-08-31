<div id="subtitle">Limitations</div>
<div id="title">What we don't support (yet)</div>
<ul id="bullet-list">
   <li><strong>Complex reactivity</strong> - derived, effect</li>
   <li><span>Component imports</span> and composition</li>
   <li><strong>Advanced syntax</strong> - {"{#each}"}, {"{#if}"} blocks</li>
   <li><span>TypeScript</span> compilation</li>
   <li><strong>Real Svelte compiler</strong> optimizations</li>
   <li><span>But...</span> it's perfect for <strong>demos!</strong></li>
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
      color: orange;
   }
</style>