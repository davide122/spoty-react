import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let initialstate = {
    all:[],
singlebook:{
    title:'',
    author:'',
    genre:'',
    image:'',
    description:'',
}
}

export const songsslices = createSlice({
    name:'songs',
    initialState: initialstate,
    reducers: {changesongs: (state, action) => {
        return (state = {
            ...state,
            allsongs: action.payload.allsongs,
        });
    }}
})

export const { changesongs } = songsslices.actions;
export const selectsongs = (state) => state.allsongs.all;
export default songsslices.reducer;