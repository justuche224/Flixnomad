"use client";

import { useState, useEffect } from "react";
import MoviesList from "./MovieList";

const MoviesPage = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [fetchingMovies, setFetchingMovies] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [genreFilter, setGenreFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      setFetchingMovies(true);
      try {
        const response = await fetch("/api/movies", {
          method: "GET",
        });
        const data = await response.json();
        setMovies(data);
        console.log(data);
      } catch (error) {
        setFetchingMovies(false);
        setErrorMessage("Error fetching notes: " + error.message);
      } finally {
        setFetchingMovies(false);
      }
    }

    fetchMovies();
  }, []);

  const handleGenreChange = (event) => {
    setGenreFilter(event.target.value);
  };

  const handleYearChange = (event) => {
    setYearFilter(event.target.value);
  };

  const renderMovieList = () => {
    let filtered = movies?.filter((movie) => {
      return (
        movie.type === type && // Ensure movie type is 'movie'
        (genreFilter === "all" ||
          movie.genre.genre1.toLowerCase() === genreFilter ||
          movie.genre.genre2.toLowerCase() === genreFilter ||
          movie.genre.genre3.toLowerCase() === genreFilter) &&
        (yearFilter === "all" || movie.name.includes(yearFilter))
      );
    });
    // Ensure only 50 movies are shown
    filtered = filtered.slice(0, 50);
    setFilteredMovies(filtered);
  };

  // Call renderMovieList whenever genreFilter or yearFilter changes
  useEffect(() => {
    const renderMovieList = () => {
      let filtered = movies?.filter((movie) => {
        return (
          movie.type === type && // Ensure movie type is 'movie'
          (genreFilter === "all" ||
            movie.genre.genre1.toLowerCase() === genreFilter ||
            movie.genre.genre2.toLowerCase() === genreFilter ||
            movie.genre.genre3.toLowerCase() === genreFilter) &&
          (yearFilter === "all" || movie.name.includes(yearFilter))
        );
      });
      // Ensure only 50 movies are shown
      filtered = filtered.slice(0, 50);
      setFilteredMovies(filtered);
    };
    renderMovieList();
  }, [genreFilter, yearFilter, movies, type]);
  if (fetchingMovies) return <h1 className="text-center">loading..</h1>;
  return (
    <section>
      <div className="flex gap-5 w-full place-content-center">
        <div className="mb-2">
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={genreFilter}
            onChange={handleGenreChange}
          >
            <option selected value="all">
              Genres
            </option>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={yearFilter}
            onChange={handleYearChange}
          >
            <option selected value="all">
              Year
            </option>
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
        <MoviesList movies={filteredMovies} />
      </div>
    </section>
  );
};

export default MoviesPage;
