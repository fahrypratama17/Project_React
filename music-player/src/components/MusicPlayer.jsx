import { useMusic } from "../hooks/use-music.js";

const MusicPlayer = () => {
  const { currentTrack } = useMusic();

  return (
    <div className="music-player">
      <audio />

      <div className="track-info">
        <h3>{currentTrack.artist}</h3>
      </div>
    </div>
  );
};

export default MusicPlayer;
