import MovieList from "@/components/movies/MovieList";
import Hero from "@/components/Hero";
import { moviesdb } from "@/database/db-main-movie";
import { MovieCarousel } from "@/components/movies/MovieCarousel";
import { baseUrl } from "@/utils/baseUrl";
import Link from "next/link";

async function getData(perPage, page) {
  try {
    const response = await fetch(
      `${baseUrl}/api/movies?page=${page}&perPage=${perPage}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("(home page)Error fetching movies:", error);
    return { error: "(home page)Failed to load movies" };
  }
}

export default async function Home({ searchParams }) {
  let page = parseInt(searchParams.page, 10);
  page = !page || page < 1 ? 1 : page;
  const perPage = 4;
  const data = await getData(perPage, page);
  const totalPages = Math.ceil(data.itemCount / perPage);

  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;
  const isPageOutOfRange = page > totalPages;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i <= page + offsetNumber; i++) {
    if (i >= 1 && i <= totalPages) {
      pageNumbers.push(i);
    }
  }
  return (
    <main>
      <Hero />
      <div className="my-5 pl-5"></div>
      <MovieCarousel movies={moviesdb} />
      {data.error ? (
        <h1 className="text-center text-3xl mt-[5.5rem]">
          Error fetching movies
        </h1>
      ) : (
        <>
          <br id="movies" />
          <br />
          <h2 className="text-xl text-center mt-5">Latest Movies</h2>
          <MovieList searchParams={searchParams} />
          <hr className="my-5" />
          {/*isPageOutOfRange ? (
            <div className="text-center">No more pages...</div>
          ) : (
            <div className="flex justify-center items-center mt-16">
              <div className="flex border-[1px] gap-4 rounded-[10px] border-light-green p-4">
                {page === 1 ? (
                  <div
                    className="opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    Previous
                  </div>
                ) : (
                  <Link
                    href={`?page=${prevPage}#movies`}
                    aria-label="Previous Page"
                  >
                    Previous
                  </Link>
                )}

                {pageNumbers.map((pageNumber, index) => (
                  <Link
                    key={index}
                    className={
                      page === pageNumber
                        ? "bg-red-500 fw-bold px-2 rounded-md text-black"
                        : "hover:bg-red-500 px-1 rounded-md"
                    }
                    href={`?page=${pageNumber}#movies`}
                  >
                    {pageNumber}
                  </Link>
                ))}

                {page === totalPages ? (
                  <div
                    className="opacity-60 cursor-not-allowed"
                    aria-disabled="true"
                  >
                    Next
                  </div>
                ) : (
                  <Link
                    href={`?page=${nextPage}#movies`}
                    aria-label="Next Page"
                  >
                    Next
                  </Link>
                )}
              </div>
            </div>
          )*/}
        </>
      )}
    </main>
  );
}
