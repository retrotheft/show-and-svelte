<template>
   <div id="svelte">This video was made with Svelte</div>
   <div id="view">No, it's not using view transitions.</div>
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
</style>
