/**
 * Minimal UI sound, synthesized with the Web Audio API (no audio assets).
 * A light "tick" as the wheel revolves, a fuller "click" when a section opens.
 * Only ever triggered by user interaction, throttled, and mutable (persisted).
 */

let ctx: AudioContext | null = null;
let lastTick = 0;
let muted = false;

const STORAGE_KEY = "sound-muted";

/** Read the saved preference (call once on the client). */
export function initMuted(): boolean {
  if (typeof window !== "undefined") {
    muted = window.localStorage.getItem(STORAGE_KEY) === "1";
  }
  return muted;
}

export function setMuted(next: boolean) {
  muted = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
  }
}

export function getMuted(): boolean {
  return muted;
}

function audioCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  // Browsers start the context suspended until a user gesture — resume on use.
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/** A single short blip: a triangle tone sweeping down with a fast decay. */
function blip(freqFrom: number, freqTo: number, peak: number, dur: number) {
  const c = audioCtx();
  if (!c) return;
  const t = c.currentTime;
  const osc = c.createOscillator();
  const gain = c.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(freqFrom, t);
  osc.frequency.exponentialRampToValueAtTime(freqTo, t + dur);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(peak, t + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

/** Light click as the wheel settles on a new option (throttled for fast scrolls). */
export function playTick() {
  if (muted) return;
  const now = performance.now();
  if (now - lastTick < 55) return;
  lastTick = now;
  blip(1900, 1200, 0.05, 0.026);
}

/** Fuller click when a section is opened. */
export function playSelect() {
  if (muted) return;
  blip(1150, 680, 0.09, 0.06);
}
