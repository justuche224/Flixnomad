import Link from "next/link";
import { ObjectId } from "mongodb";
import MovieInfo from "@/components/movies/MovieInfo";
import { connectToDatabase } from "@/utils/database";
import Faq from "@/components/Faq";
import { FaTelegram } from "react-icons/fa";

async function FindMovie(id) {
  try {
    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    //find movie
    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(id.toString()) });
    if (!movie) {
      return (
        <MovieInfo>
          <h2>Movie not found</h2>
        </MovieInfo>
      );
    }
    return (
      <MovieInfo>
        <h1 className="text-center text-2xl font-bold">
          {movie.name} <span className="ml-1 italic">{movie.quality}</span>
        </h1>
        <div className="grid place-content-center">
          <Link
            className="my-2 text-center bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300"
            href={movie.downloadLink}
          >
            Download
          </Link>
          <Link
            className="my-2 text-center italic text-xs text-gray-300"
            href="/contact"
          >
            Report brocken link
          </Link>
          <h2 className="text-center">
            Want this movie in more quality ? send us a message on
            <Link
              aria-label="Join Us on telegram"
              href="https://t.me/flixnomad"
              className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 ml-2"
            >
              Telegram
            </Link>
          </h2>
        </div>
      </MovieInfo>
    );
  } catch (error) {
    return (
      <div className="text-center">
        <h2>An Error occurred</h2>
      </div>
    );
  }
}

export default async function page({ params }) {
  const Movie = await FindMovie(params.id);
  return (
    <div className="mt-[5rem] max-w-4xl mx-auto">
      <div>{Movie}</div>
      <hr className="h-1 my-10" />
      <h2 className="text-center">Frequently Asked questions</h2>
      <div>
        <Faq />
      </div>
    </div>
  );
}
