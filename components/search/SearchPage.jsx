"use client";

import { useEffect, useState } from "react";
import MoviesList from "../movies/MovieList";
import BackButton from "@/utils/BackButton";
import { Telegram } from "@/utils/telegram";

const SearchPage = ({ params, movies }) => {
  const [searchResults, setSearchResults] = useState([]);
  const decodedSearchTerm = decodeURIComponent(params.searchTerm);
  const searchTerm = decodedSearchTerm.toLowerCase();

  useEffect(() => {
    const searchWords = searchTerm.split(/\s+/);
    const filteredMovies = movies.filter((movie) =>
      searchWords.every((word) => movie.name.toLowerCase().includes(word))
    );
    setSearchResults(filteredMovies);
  }, [searchTerm, movies]);

  return (
    <div className="mt-[3rem] p-10">
      <div className="grid place-content-center mb-5">
        <BackButton />
      </div>
      <h1 className="text-center">
        results for &quot;
        <span className="italic font-bold">{searchTerm}</span>&quot;
      </h1>
      <hr className="my-4" />
      {searchResults.length ? (
        <div>
          <MoviesList movies={searchResults} />
        </div>
      ) : (
        <div>
          <h1 className="text-4xl text-center m-5">No result!</h1>
          <p className="text-center">
            Do you want this movie uploaded ? join our community to request for
            it
          </p>
          <span className="flex justify-center mt-2">
            <Telegram />
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
