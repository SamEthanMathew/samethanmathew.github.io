import { useEffect, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { initMuted, setMuted } from "../lib/sound";

/**
 * Global, fixed mute/unmute control for the site's UI sounds.
 * Styled as a translucent pill so it reads on both light and dark backgrounds.
 * Preference persists in localStorage.
 */
export function SoundToggle() {
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
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full border border-muted/20 bg-paper/70 px-3.5 py-2 font-mono text-[0.7rem] uppercase tracking-widest text-muted backdrop-blur transition-colors hover:border-muted/50 hover:text-ink"
    >
      {muted ? (
        <FaVolumeMute className="h-3.5 w-3.5" />
      ) : (
        <FaVolumeUp className="h-3.5 w-3.5" />
      )}
      <span className="hidden sm:inline">{muted ? "muted" : "sound"}</span>
    </button>
  );
}
