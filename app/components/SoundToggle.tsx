import { useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { initMuted, setMuted } from "../lib/sound";

/** Small, subtle control to mute/unmute the UI sounds (persisted in localStorage). */
export function SoundToggle({ className = "" }: { className?: string }) {
  const [muted, setLocalMuted] = useState(false);

  useEffect(() => {
    setLocalMuted(initMuted());
  }, []);

  const toggle = () => {
    const next = !muted;
    setMuted(next);
    setLocalMuted(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={muted ? "Unmute sounds" : "Mute sounds"}
      aria-pressed={muted}
      className={`pointer-events-auto flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-line/40 hover:text-line transition-colors ${className}`}
    >
      {muted ? <FaVolumeMute className="h-3.5 w-3.5" /> : <FaVolumeUp className="h-3.5 w-3.5" />}
      <span>{muted ? "sound off" : "sound on"}</span>
    </button>
  );
}
