<script lang="ts">
   let mediaRecorder = null;
   let recordedChunks = [];
   let isRecording = false;

   // Handle R key press
   function handleKeydown(event) {
     if (event.key === 'r' || event.key === 'R') {
       if (isRecording) {
         stopRecording();
       } else {
         startRecording();
       }
     }
   }

   async function startRecording() {
     try {
       const stream = await navigator.mediaDevices.getDisplayMedia({
         video: {
           frameRate: 60,
           width: 1920,
           height: 1080
         },
         audio: false // Add true if you want audio
       });

       recordedChunks = [];
       mediaRecorder = new MediaRecorder(stream, {
         mimeType: 'video/webm;codecs=vp9'
       });

       mediaRecorder.ondataavailable = (event) => {
         if (event.data.size > 0) {
           recordedChunks.push(event.data);
         }
       };

       mediaRecorder.onstop = saveRecording;
       mediaRecorder.start();
       isRecording = true;

       // Stop when user stops sharing
       stream.getVideoTracks()[0].onended = () => {
         if (isRecording) stopRecording();
       };

     } catch (err) {
       console.error('Error starting recording:', err);
     }
   }

   function stopRecording() {
     if (mediaRecorder && isRecording) {
       mediaRecorder.stop();
       isRecording = false;
     }
   }

   function saveRecording() {
     const blob = new Blob(recordedChunks, { type: 'video/webm' });
     const url = URL.createObjectURL(blob);

     // Auto-download
     const a = document.createElement('a');
     a.href = url;
     a.download = `presentation-${Date.now()}.webm`;
     a.click();

     // Cleanup
     URL.revokeObjectURL(url);
     recordedChunks = [];
   }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- Optional UI indicator -->
{#if isRecording}
  <div class="recording-indicator">🔴 Recording</div>
{/if}
