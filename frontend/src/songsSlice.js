// import { createSlice } from '@reduxjs/toolkit';

// const songsSlice = createSlice({
//   name: 'songs',
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     setSongs: (state, action) => {
//       state.items = action.payload;
//     },
//     addSong: (state, action) => {
//       state.items.push(action.payload);
//     },
//     updateSong: (state, action) => {
//       const index = state.items.findIndex((song) => song.id === action.payload.id);
//       state.items[index] = action.payload;
//     },
//     deleteSong: (state, action) => {
//       state.items = state.items.filter((song) => song.id !== action.payload);
//     },
//   },
// });

// export const { setSongs, addSong, updateSong, deleteSong } = songsSlice.actions;
// export default songsSlice.reducer;