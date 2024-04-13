// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchSongs, addSong, updateSong, deleteSong } from './songsSlice';
// import styled from '@emotion/styled';
// import { css } from '@emotion/react';

// const SongList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
// `;

// const SongItem = styled.li`
//   margin-bottom: 10px;
// `;

// const SongTitle = styled.h3`
//   margin: 0;
// `;

// const SongActions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const Button = styled.button`
//   background-color: #4CAF50;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   cursor: pointer;
//   margin-right: 10px;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const Input = styled.input`
//   padding: 10px;
// `;

// const initialFormValues = {
//   id: '',
//   title: '',
// };

// const SongComponent = () => {
//   const songs = useSelector((state) => state.songs.items);
//   const dispatch = useDispatch();
//   const [formValues, setFormValues] = React.useState(initialFormValues);

//   React.useEffect(() => {
//     dispatch(fetchSongs());
//   }, [dispatch]);

//   const handleChange = (event) => {
//     setFormValues({
//       ...formValues,
//       id: event.target.value || '',
//     });
//   };

//   const handleChangeTitle = (event) => {
//     setFormValues({
//       ...formValues,
//       title: event.target.value || '',
//     });
//   };

//   const handleReset = () => {
//     setFormValues(initialFormValues);
//   };

//   const handleAddSong = () => {
//     if (formValues.id && formValues.title) {
//       dispatch(addSong(formValues));
//       handleReset();
//     }
//   };

//   const handleUpdateSong = (song) => {
//     const updatedSong = {
//       id: song.id,
//       title: formValues.title,
//     };
//     dispatch(updateSong(updatedSong));
//     handleReset();
//   };

//   const handleDeleteSong = (songId) => {
//     dispatch(deleteSong(songId));
//   };

//   return (
//     <div>
//       <SongList>
//         {songs.map((song) => (
//           <SongItem key={song.id}>
//             <SongTitle>{song.title}</SongTitle>
//             <SongActions>
//               <Input
//                 type="text"
//                 value={formValues.title}
//                 onChange={handleChangeTitle}
//               />
//               <Button onClick={() => handleUpdateSong(song)}>Update</Button>
//               <Button onClick={() => handleDeleteSong(song.id)}>Delete</Button>
//             </SongActions>
//           </SongItem>
//         ))}
//       </SongList>
//       <div>
//         <Input
//           type="text"
//           placeholder="Song ID"
//           value={formValues.id}
//           onChange={handleChange}
//         />
//         <Input
//           type="text"
//           placeholder="Song Title"
//           value={formValues.title}
//           onChange={handleChangeTitle}
//         />
//         <Button onClick={handleAddSong}>Add Song</Button>
//         <Button onClick={handleReset}>Reset</Button>
//       </div>
//     </div>
//   );
// };

// export default SongComponent;