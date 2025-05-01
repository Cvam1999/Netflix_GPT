import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// Ftech now playing movies from TMDB API and dispatch them to the Redux store
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?page=1`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addMovies(json.results));
    };
    useEffect(() => {
      getNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;
