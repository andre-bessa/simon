let audioCtx;
let mainVolume;
const mainVolumeControl = document.getElementById('volume');

export const initAudio = () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  mainVolume = audioCtx.createGain();
  mainVolume.connect(audioCtx.destination);
  mainVolume.gain.value = mainVolumeControl.valueAsNumber;
  mainVolumeControl.addEventListener('change', function() {
    mainVolume.gain.setValueAtTime(this.valueAsNumber, audioCtx.currentTime);
  });
};

export const playSound = pitch => {
  const oscillator = audioCtx.createOscillator();
  const amp = audioCtx.createGain();
  oscillator.connect(amp);
  amp.connect(mainVolume);

  oscillator.type = 'square';
  oscillator.frequency.value = pitch;
  amp.gain.value = 0;

  amp.gain.setTargetAtTime(1, audioCtx.currentTime, 0.1);
  oscillator.start(audioCtx.currentTime);

  return () => oscillator.stop();
};
