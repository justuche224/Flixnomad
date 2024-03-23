"use client";

import { useEffect, useState } from "react";
import BackButton from "@/utils/BackButton";
import { Telegram } from "@/utils/telegram";
import Movies from "../movies/Movies";
import Loading from "@/app/loading";

const SearchPage = ({ params, movies }) => {
  const [searchResults, setSearchResults] = useState(null);
  const [searching, setSearching] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const decodedSearchTerm = decodeURIComponent(params.searchTerm);
  const searchTerm = decodedSearchTerm.toLowerCase();

  useEffect(() => {
    async function getSearchResults() {
      setSearching(true);
      try {
        const response = await fetch(`/api/search/${searchTerm}`, {
          method: "GET",
        });
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        setSearching(false);
        setErrorMessage("Error: " + error.message);
      } finally {
        setSearching(false);
      }
    }
    getSearchResults();
  }, [searchTerm]);

  return (
    <>
      {errorMessage ? (
        <div className="text-center">
          <h1>{errorMessage}</h1>
        </div>
      ) : (
        <div className="mt-[3rem] p-5">
          <div className="grid place-content-center mb-5">
            <BackButton />
          </div>
          <h1 className="text-center">
            results for &quot;
            <span className="italic font-bold">{searchTerm}</span>&quot;
          </h1>
          <hr className="my-4" />
          {searching ? (
            <Loading />
          ) : (
            <>
              {searchResults?.length ? (
                <div>
                  <Movies movies={searchResults} />
                </div>
              ) : (
                <div>
                  <h1 className="text-4xl text-center m-5">No result!</h1>
                  <p className="text-center">
                    Do you want this movie uploaded ? join our community to
                    request for it
                  </p>
                  <span className="flex justify-center mt-2">
                    <Telegram />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default SearchPage;
