import React from 'react'
import { createSlice } from '@reduxjs/toolkit'


export const SongSlice = createSlice({
    name:'Song',
    initialState:{
        songs:null,
        currentSong:{},
        selected:''
    },
    reducers:{
        getSongs:(state,action)=>{
            state.songs = action.payload
        },
        addSong:(state,action)=>{
            state.songs = [action.payload,...state.songs]
        },
        deleteSong:(state,action)=>{
            state.songs = state.songs.filter((song)=> song._id !== action.payload._id)
        },
        updateSong:(state)=>{},

        playCurrent:(state,action)=>{
            state.currentSong = action.payload
        },
        single:(state,action)=>{
            state.selected = action.payload
        },
    }
}) 
export const {getSongs,addSong,deleteSong,updateSong,playCurrent,single} = SongSlice.actions;

export default SongSlice.reducer