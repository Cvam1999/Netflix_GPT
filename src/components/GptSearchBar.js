import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to GPT api to get search results

    // const gptQuery =
    //   "Act as a movie recommendation system and suggest some movies for the query: " +
    //   searchText.current.value +
    //   ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: inception, article 370, squid game, deva, chhaava";
    // const gptResults = await openai.chat.completions.create({
    //   model: "gpt-4o",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // if (!gptResults.choices) {
    //   console.log("error while searching");
    // }
    // console.log(gptResults.choices[0]?.message?.content.split(","));
    //const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    const gptMovies = ["Raaz", "Bhoot", "1920", "Talash", "Roohi"];
    //for each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className=" pt-[35%] md:pt-[8%] justify-center flex">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-6 border col-span-9 bg-gray-950 text-white"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 py-2 px-4 m-4 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
