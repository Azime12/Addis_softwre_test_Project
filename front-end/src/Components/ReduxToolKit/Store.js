import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import SongSlice from "./Features/SongSlice";

export const Store = configureStore({
    reducer: {
        Songs:SongSlice
    }
}) 
