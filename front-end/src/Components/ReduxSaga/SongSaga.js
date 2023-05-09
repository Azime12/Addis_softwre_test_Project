import {call,put,all,fork,takeEvery} from 'redux-saga/effects'
import { addSong, getSongs,deleteSong } from '../ReduxToolKit/Features/SongSlice';
import axios from 'axios';
function* getSongActions(){
    const songs = yield call(()=> axios.get("http://localhost:7000/getSongs"));
    const formattedSongs = yield songs.json();
    yield put(getSongs(formattedSongs));
}

function* getSongSaga(){
    yield takeEvery('Song/getSongs',getSongActions())
}

function* addSongActions(){
    const songs = yield call(()=> fetch('http://localhost:7000/addSongs'));
    const formattedSongs = yield songs.json();
    yield put(addSong(formattedSongs));
}

function* addSongSaga(){
    yield takeEvery("Song/addSong",addSongActions())
}
function* deleteSongAction(action){
    console.log(action)
    const {data} = yield call(()=> axios.delete('http://localhost:7000/deleteSong/'+ action._id));
    yield put(deleteSong(data));
}

function* deleteSongSaga(){
    console.log('song delete')
    yield takeEvery("song/deleteSong",deleteSongAction())
}

export default function* songSagas(){
    yield all([
        fork(getSongSaga),
        fork(addSongSaga),
        fork(deleteSongSaga)
    ])
};