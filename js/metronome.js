// CPR Metronome Tool - Web Audio API (100–120 BPM)
export class CPRMetronome {
  constructor(onBeatCallback) {
    this.audioCtx = null;
    this.bpm = 105;
    this.isRunning = false;
    this.timerId = null;
    this.beatCount = 0;
    this.onBeat = onBeatCallback || (() => {});
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playClick(isMajor) {
    if (!this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(isMajor ? 880 : 600, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {
      console.warn("AudioContext error", e);
    }
  }

  start() {
    this.initAudio();
    if (this.isRunning) return;
    this.isRunning = true;
    this.beatCount = 0;

    const intervalMs = (60 / this.bpm) * 1000;

    const tick = () => {
      if (!this.isRunning) return;
      this.beatCount++;
      const isMajor = (this.beatCount % 30 === 1) || (this.beatCount === 1);
      this.playClick(isMajor);
      this.onBeat(this.beatCount, this.bpm);
      this.timerId = setTimeout(tick, intervalMs);
    };

    tick();
  }

  stop() {
    this.isRunning = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.beatCount = 0;
  }

  setBpm(newBpm) {
    this.bpm = Math.max(100, Math.min(120, newBpm));
  }
}
