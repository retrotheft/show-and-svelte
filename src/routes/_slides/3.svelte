<template>
   <div id="svelte">This video was made with Svelte</div>
   <div id="view">No, it's not using view transitions.</div>
   <div id="code">This is the code viewer</div>
</template>

<style>
   * {
      position: absolute;
   }

   div#svelte {
      color: orangered;
      place-self: start center;
      transform: translateY(30vh);
      white-space: nowrap;
      width: 30ch;
   }

   div#view {
      place-self: end center;
      transform: translateY(-30vh);
      color: violet;
      width: 30ch;
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
