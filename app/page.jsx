import MovieList from "@/components/movies/MovieList";
import Hero from "@/components/Hero";
import { MovieCarousel } from "@/components/movies/MovieCarousel";
import { baseUrl } from "@/utils/baseUrl";

async function getMovies() {
  try {
    const response = await fetch(`${baseUrl}/api/movies`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { error: "Failed to load movies" };
  }
}

export default async function Home() {
  const movie = await getMovies();
  return (
    <main>
      <Hero />
      <div className="my-5 pl-5">
        <h1 className="text-3xl">Trending Movies</h1>
      </div>
      <MovieCarousel movies={movie} />
      <MovieList movies={movie} />
    </main>
  );
}
