<h1 id="what-stage-does">What Stage Does</h1>

<p id="current-slide">currentSlide = 0</p>

<ul id="mark-list">Marks
   <li>title</li>
   <li>subtitle</li>
   <li>etc...</li>
</ul>

<ul id="snippet-map">Snippet Map
   <li>0#title -> h1</li>
   <li>1#title -> h1</li>
   <li>1#subtitle -> h2</li>
   <li>etc...</li>
</ul>

<p id="create-raw-snippet">createRawSnippet</p>

<template>
   <p>When Stage mounts, it scans all the slides and creates a Mark for each unique ID that it finds.</p>
   <p>Then it maps each element that it finds with a key containing the slide number and ID of the element.</p>
   <p>However, it doesn't map the raw element. Instead, it creates a snippet with createRawSnippet.</p>
   <p>And this is the mechanism that is responsible for appending and removing the elements from their Marks.</p>
</template>

<style>
   #what-stage-does {
      font-size: 2rem;
      color: violet;
      transform: translateY(-15cqh);
   }

   #current-slide {
      font-size: 2rem;
      color: goldenrod;
   }

   #create-raw-snippet {
      font-size: 2rem;
      color: lightcoral;
      transform: translate(0, 30cqh);
   }

   #snippet-map {
      display: grid;
      font-size: 2rem;
      transform: translate(15cqw, 15cqh);
   }

   #mark-list {
      display: grid;
      font-size: 2rem;
      transform: translate(-15cqw, 15cqh);
   }

   ul {
      padding-inline-start: 0;
      color: white;
   }

   li {
      list-style-type: none;
      color: yellow;
   }
</style>
