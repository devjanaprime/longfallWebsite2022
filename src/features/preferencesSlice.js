import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    audioPlayer: 'Spotify' 
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers:
    {
        setAudioSpotify: ( state ) =>{
            state.audioPlayer = 'Spotify' ;
            console.log( 'in setAudioSpotify' );
        },
        setAudioAppleMusic: ( state ) =>{
            console.log( 'in setAudioAppleMusic' );
            state.audioPlayer = 'Apple Music' ;
        }
    }
})

export const { setAudioSpotify, setAudioAppleMusic } = preferencesSlice.actions;

export default preferencesSlice.reducer;