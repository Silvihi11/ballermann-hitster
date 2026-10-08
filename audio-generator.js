// Erzeugt einfache Oom-Pah-Pah Sounds mit Web Audio API
class BallermanAudioGenerator {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  playOomPahPah() {
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    
    // Oom (tiefe Note)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.frequency.value = 80;
    osc1.type = 'sine';
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc1.start(now);
    osc1.stop(now + 0.2);
    
    // Pah (höhere Note)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.frequency.value = 200;
    osc2.type = 'sine';
    gain2.gain.setValueAtTime(0.2, now + 0.25);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
    osc2.start(now + 0.25);
    osc2.stop(now + 0.4);
    
    // Pah (nochmal)
    const osc3 = ctx.createOscillator();
    const gain3 = ctx.createGain();
    osc3.connect(gain3);
    gain3.connect(ctx.destination);
    osc3.frequency.value = 180;
    osc3.type = 'sine';
    gain3.gain.setValueAtTime(0.2, now + 0.5);
    gain3.gain.exponentialRampToValueAtTime(0.01, now + 0.65);
    osc3.start(now + 0.5);
    osc3.stop(now + 0.65);
  }

  playSongPreview(title, artist) {
    // Spiele 3x Oom-Pah-Pah
    for (let i = 0; i < 3; i++) {
      setTimeout(() => this.playOomPahPah(), i * 800);
    }
  }
}
