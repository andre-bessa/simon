export const audioCtx = new AudioContext();
export const masterVolume = audioCtx.createGain();

const volumeControl = document.getElementById('volume');
masterVolume.gain.setValueAtTime(volumeControl.valueAsNumber, audioCtx.currentTime); // Set default volume in html
masterVolume.connect(audioCtx.destination);
volumeControl.addEventListener('change', function() {
  masterVolume.gain.setValueAtTime(this.valueAsNumber, audioCtx.currentTime);
});
