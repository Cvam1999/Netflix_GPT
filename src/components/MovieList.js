import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (movies === null) return;
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide ">
        
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-48">
            <MovieCard poster_path={movie.poster_path} />
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default MovieList;
