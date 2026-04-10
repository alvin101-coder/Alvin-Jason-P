import React, { useState, useEffect, useRef } from "react";

const AudioToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const rafIdRef = useRef(null);
  const currentBarRef = useRef(0);

  useEffect(() => {
    if (playing) {
      const animateBars = () => {
        const bars = document.querySelectorAll(".bar");

        bars.forEach((bar, i) => {
          // Base oscillation for all bars (fast wave motion)
          let baseScale = 0.6 + Math.sin(Date.now() / 150 + i) * 0.2;

          // Active bar is tallest
          if (i === currentBarRef.current) {
            baseScale = 1.2;
          }

          bar.style.transform = `scaleY(${baseScale})`;
          bar.style.transition = "transform 0.1s ease"; // faster transition
        });

        // Move active bar to next one
        currentBarRef.current = (currentBarRef.current + 1) % bars.length;

        rafIdRef.current = setTimeout(() => requestAnimationFrame(animateBars), 100); // faster cycle
      };

      animateBars();
    } else {
      if (rafIdRef.current) {
        clearTimeout(rafIdRef.current);
        rafIdRef.current = null;
      }
      // Reset bars when stopped
      document.querySelectorAll(".bar").forEach(bar => {
        bar.style.transform = "scaleY(0.3)";
      });
    }
  }, [playing]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.error("Playback failed:", err));
    }
    setPlaying(!playing);
  };

  return (
    <>
      <audio ref={audioRef} src="/music/theme.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={toggleMusic}
        className={`size-12 grid place-content-center rounded-full audio ${
          playing ? "active" : ""
        }`}
        aria-label="Toggle background music"
      >
        <div className="w-6 h-20 flex justify-between items-center transition">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bar w-0.5 bg-white rounded-full"
              style={{ transformOrigin: "center", transform: "scaleY(0.6)" }}
            ></div>
          ))}
        </div>
      </button>
    </>
  );
};

export default AudioToggle;
