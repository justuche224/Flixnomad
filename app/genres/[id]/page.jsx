import GenreDetails from "@/components/genres/GenreDetails";

import { baseUrl } from "@/utils/baseUrl";
import { Telegram } from "@/utils/telegram";
import Link from "next/link";
async function getGenre(id) {
  try {
    const response = await fetch(`${baseUrl}/api/movies/genres/${id}`, {
      method: "GET",
    });

    if (!response.ok) {
      // Extract the status code for better error handling
      const status = response.status;
      throw new Error(`HTTP error ${status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching genre:", error);

    // Return an object with detailed error information, including status code
    return {
      error: `Failed to load genre (status: ${error.message})`,
    }; // Extract status code from error message
  }
}
export async function generateMetadata({ params }) {
  const genre = await getGenre(params.id);

  if (genre.error) {
    if (genre.error.includes("404") || genre.error.slice(0, 3) === "404") {
      return {
        title: "Genre not Found",
      };
    } else {
      return {
        title: "Error",
      };
    }
  }
  return {
    title: `${params.id} Genre - Flixnomad`,
  };
}

export default async function page({ params }) {
  const genre = await getGenre(params.id);

  if (genre.error) {
    //console.log(genre.error); // Log the complete error message for debugging

    // Check for 404 specifically based on error message or extracted status code
    if (genre.error.includes("404") || genre.error.slice(0, 3) === "404") {
      return (
        <div className="mt-[5rem] p-5 grid place-content-center">
          <h1 className="text-3xl text-center mb-2">Genre not found!</h1>
          <p className="text-center">
            The Genre you are looking for may have been removed or moved to a
            new link.
          </p>
          <p className="text-center">
            Do you want movies in this genre? join our community to request for
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
            An error occurred: {genre.error}
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
      <GenreDetails params={params} genre={genre} />
    </div>
  );
}
