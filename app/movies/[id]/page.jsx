import MoviesDetailsPage from "@/components/movies/MoviesDetailsPage";
import { baseUrl } from "@/utils/baseUrl";
import Link from "next/link";

async function getMovie(id) {
  try {
    const response = await fetch(`${baseUrl}/api/movies/movie/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      // Extract the status code for better error handling
      const status = response.status;
      throw new Error(`HTTP error ${status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);

    // Return an object with detailed error information, including status code
    return {
      error: `Failed to load movie (status: ${error.message})`,
    }; // Extract status code from error message
  }
}

export default async function page({ params }) {
  const movie = await getMovie(params.id);

  if (movie.error) {
    //console.log(movie.error); // Log the complete error message for debugging

    // Check for 404 specifically based on error message or extracted status code
    if (movie.error.includes("404") || movie.error.slice(0, 3) === "404") {
      return (
        <div className="mt-[5rem] p-5 grid place-content-center">
          <h1 className="text-3xl text-center mb-2">Movie not found!</h1>
          <p className="text-center">
            The movie you are looking for may have been removed or moved to a
            new link.
          </p>
          <Link
            href="/"
            className="px-2 py-1 hover:bg-transparent text-white bg-red-500 text-center rounded-none mt-5"
          >
            Go home
          </Link>
        </div>
      );
    } else {
      // Handle other errors (e.g., redirect to a generic error page)
      return (
        <div className="mt-[5rem] p-5 grid place-content-center">
          <h1 className="text-3xl text-center mb-2">
            An error occurred: {movie.error}
          </h1>
          <Link
            href="/"
            className="px-2 py-1 hover:bg-transparent text-white bg-red-500 text-center rounded-none mt-5"
          >
            Go home
          </Link>
        </div>
      );
    }
  }

  return (
    <div className="mt-[5rem]">
      <MoviesDetailsPage movie={movie} />
    </div>
  );
}
