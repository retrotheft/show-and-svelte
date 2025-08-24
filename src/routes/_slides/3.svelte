<template>
   <div id="svelte">This presentation was made with Svelte</div>
   <div id="view">Here's how it works.</div>
   <div id="code"></div>
</template>

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
      top: 5ch;
      bottom: 5ch;
      right: 5ch;
      width: 10ch;
      border: 1px solid grey;
      transform: translateX(150%);
      opacity: 0;
      /*display: none;*/
   }
</style>
