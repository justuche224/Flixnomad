import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(props) {
  const { movie } = props;

  const title = `${movie.name} - Watch Now!`;
  const description = `${movie.name} is a ${movie.genre?.genre1} movie released in ${movie.releaseDate}.`;

  return {
    title,
    description,
  };
}

const MoviesDetailsPage = ({ movie }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <nav className="flex justify-center mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href={movie.type === "movie" ? "/movies" : "/series"}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                {movie.type === "movie" ? "Movies" : "Series"}
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-white">
                {movie.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-4xl text-center">{movie.name}</h1>
      <p className="text-center flex gap-4 justify-center">
        <Link href={`/genres/${movie?.genre?.genre1}`}>
          {movie?.genre?.genre1}
        </Link>

        <Link href={`/genres/${movie?.genre?.genre2}`}>
          {movie?.genre?.genre2}
        </Link>

        <Link href={`/genres/${movie?.genre?.genre3}`}>
          {movie?.genre?.genre3}
        </Link>
      </p>
      <hr className="my-4" />
      <div className="md:flex block gap-0">
        <div className="w-full md:w-1/2">
          <Image
            src={movie.image}
            width={100}
            height={100}
            className="mx-auto rounded-lg"
            alt={movie.name}
            style={{ width: "90%", height: "auto" }}
          />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="container mt-4">
            <p className="text-center italic">{movie.details}</p>
          </div>
          <hr className="my-4" />
          <div className="container">
            <table className="table-fixed border-collapse w-full">
              <tbody>
                <tr>
                  <td className="w-1/3 py-2 px-4 border border-gray-300">
                    Release Date:
                  </td>
                  <td className="w-2/3 py-2 px-4 border border-gray-300">
                    {movie.releaseDate}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 py-2 px-4 border border-gray-300">
                    Runtime:
                  </td>
                  <td className="w-2/3 py-2 px-4 border border-gray-300">
                    {movie.runtime}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 py-2 px-4 border border-gray-300">
                    Director(s):
                  </td>
                  <td className="w-2/3 py-2 px-4 border border-gray-300">
                    {movie.director}
                  </td>
                </tr>
                <tr>
                  <td className="w-1/3 py-2 px-4 border border-gray-300">
                    Rated:
                  </td>
                  <td className="w-2/3 py-2 px-4 border border-gray-300">
                    {movie.rated}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h1 className="text-center text-4xl my-3">Trailer</h1>
          <div className="container d-flex justify-content-center">
            {movie.trailer && (
              <iframe
                className="w-full h-auto"
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movie.trailer.slice(
                  movie.trailer.lastIndexOf("/") + 1
                )}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div>
          <button
            type="button"
            className="px-2 py-2 bg-red-600 w-full my-5 rounded"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviesDetailsPage;
