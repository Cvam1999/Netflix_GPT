import { createSlice } from "@reduxjs/toolkit";

const movieSilce = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
    },
    reducers:{
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
    },
});

export const { addMovies, addTrailer } = movieSilce.actions;
export default movieSilce.reducer;