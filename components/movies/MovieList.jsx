"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFolder } from "react-icons/fa";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Skeleton from "../Loader/Skeleton";

const MoviesList = ({ searchParams }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 20;

  useEffect(() => {
    async function fetchMovies(page, perPage) {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/movies?page=${page}&perPage=${perPage}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies(page, perPage);
  }, [searchParams, page, perPage]);

  const totalPages = Math.ceil(data.itemCount / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return (
      <h2 className="text-center text-3xl mt-[5.5rem]">
        Error fetching movies
      </h2>
    );
  }

  return (
    <>
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        }}
      >
        {data.items.map((movie) => (
          <div
            key={movie._id}
            className="my-5 mx-2 rounded-lg p-2 bg-[#090e3b]"
          >
            <Link href={`/movies/${movie._id}`}>
              <div>
                <h2 className="font-bold text-xl">{movie.name}</h2>
                <p className=" text-xs font-bold my-1">
                  <span className="mr-1">
                    <FaClock size={15} className="inline text-red-500 mr-1" />
                    {movie.releaseDate}
                  </span>
                  <span className="">
                    <FaFolder size={15} className="inline text-red-500 mr-1" />
                    {movie.genre.genre1}, {movie.genre.genre2},{" "}
                    {movie.genre.genre3}
                  </span>
                </p>
              </div>
              <div className="flex w-full gap-3">
                <div className="mr-1 min-w-[100px]">
                  <Image
                    src={movie.image}
                    width={100}
                    height={200}
                    alt={movie.name}
                    className="rounded-lg m-2"
                  />
                </div>
                <div className="pt-2">
                  <p className="text-sm">{movie.details}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-16">
        <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
          {page === 1 ? (
            <div className="opacity-60 cursor-not-allowed"> Previous </div>
          ) : (
            <Link href={`?page=${prevPage}#movies`} aria-label="Previous Page">
              Previous
            </Link>
          )}
          {[...Array(totalPages)].map((_, i) => (
            <Link
              key={i}
              className={
                page === i + 1
                  ? "bg-red-500 fw-bold px-2 rounded-md text-black"
                  : "hover:bg-red-500 px-1 rounded-md"
              }
              href={`?page=${i + 1}#movies`}
            >
              {i + 1}
            </Link>
          ))}
          {page === totalPages ? (
            <div className="opacity-60 cursor-not-allowed"> Next </div>
          ) : (
            <Link href={`?page=${nextPage}#movies`} aria-label="Next Page">
              Next
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
