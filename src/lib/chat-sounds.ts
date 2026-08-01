// Lightweight chat sounds via the Web Audio API — no audio files, no network,
// fully SSR/production safe. Every call is wrapped so a blocked or missing
// AudioContext can never break the chat UI.

let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    const Ctor: typeof AudioContext | undefined =
      window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    if (!ctx) ctx = new Ctor();
    if (ctx.state === "suspended") void ctx.resume().catch(() => {});
    return ctx;
  } catch {
    return null;
  }
}

type Note = { freq: number; start: number; duration: number };

function playNotes(notes: Note[], peak: number) {
  try {
    const audio = getContext();
    if (!audio) return;
    const now = audio.currentTime;
    for (const note of notes) {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(note.freq, now + note.start);
      gain.gain.setValueAtTime(0.0001, now + note.start);
      gain.gain.exponentialRampToValueAtTime(peak, now + note.start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.duration);
      osc.connect(gain);
      gain.connect(audio.destination);
      osc.start(now + note.start);
      osc.stop(now + note.start + note.duration + 0.02);
    }
  } catch {
    // Sound is a nice-to-have — never surface errors.
  }
}

/** Soft upward blip when the customer sends a message. */
export function playSendSound() {
  playNotes(
    [
      { freq: 660, start: 0, duration: 0.08 },
      { freq: 990, start: 0.06, duration: 0.1 },
    ],
    0.05,
  );
}

/** Gentle two-tone chime when a reply arrives. */
export function playReceiveSound() {
  playNotes(
    [
      { freq: 880, start: 0, duration: 0.12 },
      { freq: 1320, start: 0.1, duration: 0.18 },
    ],
    0.045,
  );
}
