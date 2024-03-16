import MovieList from "@/components/movies/MovieList";
import Hero from "@/components/Hero";
import { moviesdb } from "@/database/db-main-movie";
import { MovieCarousel } from "@/components/movies/MovieCarousel";

export default async function Home({ searchParams }) {
  return (
    <main>
      <Hero />
      <div className="my-5 pl-5"></div>
      <MovieCarousel movies={moviesdb} />
      {/* <div
        id="movies"
        className="bg-red-500 h-[100px] w-full my-5 p-3 text-center"
      >
        Place Your Ads here
      </div> */}
      <div id="movies" className="w-full h-12"></div>
      <MovieList searchParams={searchParams} />
      <hr className="my-5" />
    </main>
  );
}
