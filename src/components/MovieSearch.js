import React, { useState } from "react";
import MovieCard from "./MovieCard";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">
          Search movie{" "}
        </label>
        <input
          className="input"
          name="query"
          type="text"
          placeholder="Write here"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <MovieCard movies={movies} />
    </div>
  );
}

export default MovieSearch;
