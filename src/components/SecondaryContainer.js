import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-52 relative pl-4 md:pl-8 z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
        <MovieList title={"New on Netflix"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Polular"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
