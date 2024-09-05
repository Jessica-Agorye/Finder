import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { movies } from "../utilities/movieApi";
import Card from "./Card";

const SearchBar = () => {
  const [movieList, setMovieList] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await movies();
      console.log(movieData);
      setMovieList(movieData);
      setFilteredMovies(movieData);
    };
    fetchMovies();
  }, []);

  //create handleSearch function

  const handleSearch = (e) => {
    const query = e.target.value;
    setQuery(query);

    const filtered = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(query)
    );
    setFilteredMovies(filtered);
  };
  return (
    <>
      <div className=" flex justify-center items-center h-56">
        <input
          type="text"
          placeholder="Search favorite actor..."
          value={query}
          onChange={handleSearch}
          className="relative p-2 w-80 h-10 border border-gray-500 rounded-md"
        />

        <FontAwesomeIcon
          className="mt-1 absolute right-60 text-2xl"
          icon={faMagnifyingGlass}
        />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie, id) => (
            <Card
              key={id}
              title={movie.title}
              poster={movie.poster}
              genre={movie.genre}
              year={movie.year}
            />
          ))
        ) : (
          <p>No Movies Found</p>
        )}
      </div>
    </>
  );
};

export default SearchBar;
