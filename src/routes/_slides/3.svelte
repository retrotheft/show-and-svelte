<div id="svelte">This presentation was made with Svelte.</div>
<div id="view">Here's how it works.</div>
<div id="code" data-inset="0" data-display="flex" data-align-items="center"></div>

<style>
   div#svelte {
      color: orangered;
      place-self: start center;
      transform: translateY(30vh);
      white-space: nowrap;
      width: 34ch;
   }

   div#view {
      place-self: end center;
      transform: translateY(-30vh);
      color: violet;
      width: 34ch;
   }

   div#code {
      top: 1ch;
      bottom: 1ch;
      right: 1ch;
      width: 50%;
      border: 1px solid grey;
      color: white;
      font-size: 3rem;
      text-align: left;
      padding-inline: 2rem;
      transform: translateX(100vw);
   }
</style>
