import MoviesDetailsPage from "@/components/movies/MoviesDetailsPage";
import { baseUrl } from "@/utils/baseUrl";
import { Telegram } from "@/utils/telegram";
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
export async function generateMetadata({ params }) {
  const movie = await getMovie(params.id);

  if (movie.error) {
    if (movie.error.includes("404") || movie.error.slice(0, 3) === "404") {
      return {
        title: "Movie not Found",
      };
    } else {
      return {
        title: "Error",
      };
    }
  }
  return {
    title: `Download ${movie.name}`,
    description: `Download ${movie.name} in all qualities 2160p 1080p 720p 480p`,
    keywords: [
      `Dowbload ${movie.name}`,
      `Dowbload ${movie.name} HD`,
      `${movie.name} Download`,
      `watch ${movie.name}`,
      `Stream ${movie.name}`,
    ],
    openGraph: {
      title: `${movie.name} - Flixnomad`,
      description: `Download ${movie.name} in all qualities 2160p 1080p 720p 480p`,
      images: [
        {
          url: `${movie.image}`,
          width: 800,
          height: 1000,
        },
      ],
      url: "https://flixnomad.vercel.app",
      siteName: "Flixnomad",
      type: "website",
    },
  };
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
          <p className="text-center">
            Do you want this movie uploaded ? join our community to request for
            it
          </p>
          <span className="flex justify-center mt-2">
            <Telegram />
          </span>
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
