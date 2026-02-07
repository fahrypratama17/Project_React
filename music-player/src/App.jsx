import MusicPlayer from "./components/MusicPlayer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import AllSong from "./components/AllSong.jsx";
import Playlist from "./components/Playlist.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <main className="app-main">
          <div className="player-section">
            <MusicPlayer />
          </div>
          <div className="content-section">
            <Routes>
              <Route path="/" element={<AllSong />} />
              <Route path="/Playlist" element={<Playlist />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
