import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

// Ftech now playing movies from TMDB API and dispatch them to the Redux store
const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;
