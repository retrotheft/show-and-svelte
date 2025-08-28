<div id="subtitle">Quick Tips</div>
<div id="title">Use A and D or the arrow keys to change slides.</div>
<ul id="bullet-list">
   <li><strong>Always</strong> use IDs on component root elements.</li>
   <li>Root elements with the same ID will transition.</li>
   <li>Control transitions with before and after elements in surrounding slides.</li>
   <li>When styling, target root elements by <span>#id</span> in scoped components.</li>
   <li>Nested elements can be targeted by their tags or classes.</li>
   <li>Use Container units like <span>cqh</span> and <span>cqw</span>.</li>
   <li>For font-sizes, use <span>em</span> instead of <span>rem</span>, because container.</li>
   <!-- <li>Use <span>transform</span> for everything transform can be used for.</li> -->
   <!-- <li>If a transition looks broken, it could just be the content emptying immediately on slide change.</li> -->
   <!-- <li>Before screen recording, run through the presentation once or twice to improve performance.</li>
   <!-- <li>Advanced Usage Instructions in the github README</li> -->
   <li>Look at this tutorial's source code!</li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: lightgreen;
      transform: translateY(-30cqh) scale(8);
      transform-origin: center;
      text-align: center;
   }

   #bullet-list {
      transform: translateY(5cqh) scale(2.5);
      color: hsl(45, 80%, 60%);
      place-self: center;
      line-height: 1.5lh;
      transition: all 0.5s linear;
   }

   div#title {
      color: #ccc;
      place-self: center;
      transform: translateY(6cqh) scale(3);
      /*width: 13ch;*/
      text-align: center;
      opacity: 0;
   }

   span {
      color: white;
   }

   strong {
      color: orangered;
   }
</style>
