import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch trailer videos from TMDB API and dispatch them to the Redux store
  const getMovieVidoes = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    dispatch(addTrailer(trailer));
  };
  useEffect(() => {
    getMovieVidoes();
  }, []);
};

export default useMovieTrailer;
