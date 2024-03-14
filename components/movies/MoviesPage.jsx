"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Loader from "../Loader/Loader";
import Movies from "./Movies";

const MoviesPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [fetchingMovies, setFetchingMovies] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    async function fetchMovies() {
      setFetchingMovies(true);
      try {
        const genreFilter = searchParams.get("genreFilter") || "all";
        const yearFilter = searchParams.get("yearFilter") || "all";
        const response = await fetch(
          `/api/${type}/filters?genreFilter=${genreFilter}&yearFilter=${yearFilter}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        setFetchingMovies(false);
        setErrorMessage("Error fetching notes: " + error.message);
      } finally {
        setFetchingMovies(false);
      }
    }

    fetchMovies();
  }, [searchParams, type]);

  const handleGenreChange = (event) => {
    const genreFilter = event.target.value;
    const yearFilter = searchParams.get("yearFilter") || "all";
    router.push(`/${type}?genreFilter=${genreFilter}&yearFilter=${yearFilter}`);
  };

  const handleYearChange = (event) => {
    const yearFilter = event.target.value;
    const genreFilter = searchParams.get("genreFilter") || "all";
    router.push(`/${type}?genreFilter=${genreFilter}&yearFilter=${yearFilter}`);
  };

  return (
    <section>
      {fetchingMovies && (
        <div className="fixed top-0 grid place-content-center min-h-screen min-w-full bg-[#ffffff15]">
          <Loader />
        </div>
      )}
      <div className="flex gap-5 w-full place-content-center">
        <div className="mb-2">
          <select
            className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchParams.get("genreFilter") || "all"}
            onChange={handleGenreChange}
          >
            <option value="all">Every Genres</option>
            <option value="action">action</option>
            <option value="romance">romance</option>
            <option value="comedy">comedy</option>
            <option value="drama">drama</option>
            <option value="adventure">adventure</option>
            <option value="sci-fi">sci-fi</option>
            <option value="thriller">thriller</option>
            <option value="horror">horror</option>
            <option value="biography">Biography</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="mb-2">
          <select
            className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchParams.get("yearFilter") || "all"}
            onChange={handleYearChange}
          >
            <option value="all">Every Year</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
          </select>
        </div>
      </div>
      <div className="movieList">
        {errorMessage ? (
          <div>
            <h3>Something went wrong</h3>
          </div>
        ) : (
          <Movies movies={movies} />
        )}
      </div>
    </section>
  );
};

export default MoviesPage;
