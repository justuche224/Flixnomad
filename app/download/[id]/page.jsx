import Link from "next/link";
import { ObjectId } from "mongodb";
import MovieInfo from "@/components/movies/MovieInfo";
import { connectToDatabase } from "@/utils/database";
import Faq from "@/components/Faq";
import DownloadLink from "@/components/DownloadLink";

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
    // console.log(movie);
    return (
      <MovieInfo>
        <h1 className="text-center text-3xl font-bold">
          {movie.name}{" "}
          {movie.type == "series" ? (
            <span className="ml-1 italic">{movie.runtime}</span>
          ) : null}{" "}
          <span className="ml-1 italic">{movie.quality}</span>
        </h1>
        {/* {movie.type == "series" ? (
          <h2 className="text-center text-sm font-bold italic text-red-200 my-2">
            Please note that series are currently available for download through
            a telegram bot. clcik the link and it will take you to a telegram
            bot, press start to download. sorry for any inconveniences
          </h2>
        ) : null} */}
        <div className="grid place-content-center">
          <DownloadLink downloadLink={movie.downloadLink} />
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
        <h2>Error fetching download link</h2>
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
