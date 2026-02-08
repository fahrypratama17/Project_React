import { useMusic } from "../hooks/use-music.js";
import { useEffect, useRef } from "react";
import { StepBack, StepForward, Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const {
    currentTrack,
    formatTime,
    currentTime,
    setCurrentTime,
    duration,
    setDuration,
    prevTrack,
    nextTrack,
    isPlaying,
    play,
    pause,
  } = useMusic();
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error(err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      console.log(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {};

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleTimeUpdate);
    };
  }, [setDuration, setCurrentTime, currentTrack]);

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentTrack.url}
        preload="metadata"
        crossOrigin="anonymous"
      />

      <div className="track-info">
        <h3 className="track-title">{currentTrack.title}</h3>
        <p className="track-artist">{currentTrack.artist}</p>
      </div>

      <div className="progress-container">
        <span className="time">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime || 0}
          className="progress-bar"
          style={{}}
        />
        <span className="time">{formatTime(duration)}</span>
      </div>

      <div className="controls">
        <button className="control-btn" onClick={prevTrack}>
          <StepBack />
        </button>
        <button
          className="control-btn play-btn"
          onClick={() => (isPlaying ? pause() : play())}
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <button className="control-btn" onClick={nextTrack}>
          <StepForward />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
