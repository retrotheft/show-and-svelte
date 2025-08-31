<div id="subtitle">What is a REPL?</div>
<div id="title">Read-Eval-Print Loop</div>
<ul id="bullet-list">
   <li><strong>Interactive</strong> code playground</li>
   <li>Write code → See results <strong>immediately</strong></li>
   <li>Perfect for <span>learning</span> and <span>prototyping</span></li>
   <li>Popular in languages like Python, JavaScript, Ruby</li>
   <li>But Svelte components need <strong>compilation</strong>...</li>
</ul>

<style>
   #subtitle {
      place-self: center;
      color: violet;
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
      color: #ff3e00;
   }
</style>