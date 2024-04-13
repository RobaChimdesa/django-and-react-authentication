// import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';
// import { setSongs, addSong, updateSong, deleteSong } from './songsSlice';

// function* fetchSongs() {
//   try {
//     const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/albums');
//     yield put(setSongs(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* addSongSaga(action) {
//   try {
//     const response = yield call(axios.post, 'https://jsonplaceholder.typicode.com/albums', action.payload);
//     yield put(addSong(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* updateSongSaga(action) {
//   try {
//     const response = yield call(axios.put, `https://jsonplaceholder.typicode.com/albums/${action.payload.id}`, action.payload);
//     yield put(updateSong(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* deleteSongSaga(action) {
//   try {
//     yield call(axios.delete, `https://jsonplaceholder.typicode.com/albums/${action.payload}`);
//     yield put(deleteSong(action.payload));
//   } catch (error) {
//     console.error(error);
//   }
// }

// export function* rootSaga() {
//   yield takeLatest('songs/fetchSongs', fetchSongs);
//   yield takeLatest('songs/addSong', addSongSaga);
//   yield takeLatest('songs/updateSong', updateSongSaga);
//   yield takeLatest('songs/deleteSong', deleteSongSaga);
// }