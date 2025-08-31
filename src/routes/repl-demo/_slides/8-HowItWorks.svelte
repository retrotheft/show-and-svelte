<div id="subtitle">How It Works</div>
<div id="title">The parsing pipeline</div>
<div id="pipeline">
   <div class="step">
      <div class="step-number">1</div>
      <div class="step-title">Parse</div>
      <div class="step-desc">Extract script, style, template</div>
   </div>
   <div class="arrow">→</div>
   <div class="step">
      <div class="step-number">2</div>
      <div class="step-title">Transform</div>
      <div class="step-desc">Convert $state(), {"{vars}"}, onclick</div>
   </div>
   <div class="arrow">→</div>
   <div class="step">
      <div class="step-number">3</div>
      <div class="step-title">Generate</div>
      <div class="step-desc">Create HTML with vanilla JS</div>
   </div>
   <div class="arrow">→</div>
   <div class="step">
      <div class="step-number">4</div>
      <div class="step-title">Render</div>
      <div class="step-desc">iframe.srcdoc = result</div>
   </div>
</div>

<style>
   #subtitle {
      place-self: center;
      color: yellow;
      transform: translateY(-30cqh) scale(6);
      text-align: center;
   }

   #title {
      color: #ccc;
      place-self: center;
      transform: translateY(-20cqh) scale(2.5);
      text-align: center;
   }

   #pipeline {
      place-self: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5cqw;
      transform: translateY(5cqh) scale(1.2);
      width: 80cqw;
   }

   .step {
      text-align: center;
      padding: 1em;
      border: 2px solid #555;
      border-radius: 8px;
      background: #222;
   }

   .step-number {
      font-size: 2em;
      color: yellow;
      font-weight: bold;
   }

   .step-title {
      font-size: 1.2em;
      color: white;
      margin: 0.5em 0;
   }

   .step-desc {
      font-size: 0.9em;
      color: #aaa;
   }

   .arrow {
      font-size: 2em;
      color: #ff3e00;
   }
</style>