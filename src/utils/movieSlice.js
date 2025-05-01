import { createSlice } from "@reduxjs/toolkit";

const movieSilce = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        upcomingMovies: null
    },
    reducers:{
        addMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer = action.payload;
        },
        addPopularMovies:(state, action) =>{
            state.popularMovies = action.payload
        },
        addUpcomingMovies:(state, action) =>{
            state.upcomingMovies = action.payload
        }
    },
});

export const { addMovies, addTrailer, addPopularMovies, addUpcomingMovies } = movieSilce.actions;
export default movieSilce.reducer;