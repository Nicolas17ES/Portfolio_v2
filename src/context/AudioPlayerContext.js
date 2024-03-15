// Create a file named AudioPlayerContext.js

import React, { createContext, useContext, useState } from 'react';

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export const AudioPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPlayingId, setCurrentPlayingId] = useState(null);

    const playTrack = (id) => {
        setIsPlaying(true);
        setCurrentPlayingId(id);
    };

    const stopTrack = () => {
        setIsPlaying(false);
        setCurrentPlayingId(null);
    };

    return (
        <AudioPlayerContext.Provider value={{ isPlaying, currentPlayingId, playTrack, stopTrack }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};
