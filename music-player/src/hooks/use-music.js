import { useState } from "react";

const songs = [
  {
    id: 1,
    title: "Adu Rayu",
    artist: "Glenn Fredly",
    url: "/songs/Adu Rayu.wav",
    duration: "3:24",
  },
  {
    id: 2,
    title: "Alamak",
    artist: "Rizky Febian",
    url: "/songs/Alamak.wav",
    duration: "4:18",
  },
  {
    id: 3,
    title: "Birds of a Feather",
    artist: "Billie Eilish",
    url: "/songs/Birds of a Feather.wav",
    duration: "3:31",
  },
  {
    id: 4,
    title: "Bukan Cinta Biasa",
    artist: "Afghan",
    url: "/songs/Bukan Cinta Biasa.wav",
    duration: "3:45",
  },
  {
    id: 5,
    title: "Jatuh Suka",
    artist: "Tulus",
    url: "/songs/Jatuh Suka.wav",
    duration: "3:57",
  },
  {
    id: 6,
    title: "Kota Ini Tak Sama Tanpamu",
    artist: " Nadhif Basalamah",
    url: "/songs/Kota Ini Tak Sama Tanpamuu.wav",
    duration: "4:36",
  },
  {
    id: 7,
    title: "Talking To The Moon",
    artist: "Bruno Mars",
    url: "/songs/Talking To The Moon.wav",
    duration: "3:34",
  },
  {
    id: 8,
    title: "Wildflower",
    artist: "Billie Eilish",
    url: "/songs/Wildflower.wav",
    duration: "4:47",
  },
];

export const useMusic = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;

      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const prevIndex = prev === 0 ? allSongs.length - 1 : prev - 1;

      setCurrentTrack(allSongs[prevIndex]);
      return prevIndex;
    });
  };

  const formatTime = (time) => {
    if (isNaN(time) || undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return {
    allSongs,
    handlePlaySong,
    currentTrack,
    currentTrackIndex,
    currentTime,
    setCurrentTime,
    formatTime,
    duration,
    setDuration,
    nextTrack,
    prevTrack,
    play,
    pause,
    isPlaying,
  };
};
