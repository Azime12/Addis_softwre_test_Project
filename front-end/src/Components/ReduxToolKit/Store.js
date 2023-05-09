import { configureStore, } from "@reduxjs/toolkit";
import SongSlice from "./Features/SongSlice";
import createSagaMiddleware from 'redux-saga'
import songSagas from "../ReduxSaga/SongSaga";
const SagaMiddleware = createSagaMiddleware()
export const Store = configureStore({
    reducer: {
        Songs:SongSlice
    },
    middleware:[SagaMiddleware]
}) 
SagaMiddleware.run(songSagas);