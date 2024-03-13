import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFolder } from "react-icons/fa";

const MoviesList = ({ movies }) => {
  return (
    <>
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="my-5 mx-2 rounded-lg p-2 bg-[#090e3b]"
          >
            <Link href={`/movies/${movie._id}`}>
              <div>
                <h1 className="font-bold text-xl">{movie.name}</h1>
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
    </>
  );
};

export default MoviesList;
