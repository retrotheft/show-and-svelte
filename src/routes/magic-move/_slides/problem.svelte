<h1 id="title">Problem</h1>

<template>
   <p>If you've used Keynote, you might be aware of Magic Move, a feature that transitions objects between two different slides.</p>
   <p>After using that, I wondered: can it be done on the web?</p>
   <p>That is, could you assign the same ID to elements in two different components, and have them transition when the component changes?</p>
   <p>First I tried View Transition API, however I found the results unsatisfying. I wanted something a bit more robust.</p>
</template>

<style>
   #title {
      opacity: 1;
      color: white;
   }
</style>
