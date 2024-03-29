import Image from "next/image";
import Link from "next/link";

const GenreDetails = ({ genre, params }) => {
  return (
    <div className="mt-20 p-3">
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
                href="/genres"
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Genres
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
                {params.id}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold mb-4">
        Movies in the {params.id} Genre
      </h1>
      {genre.length === 0 ? (
        <h3 className="text-center p-5">No movies found</h3>
      ) : (
        <ul className="divide-y divide-gray-200">
          {genre.map((movie, index) => (
            <Link
              key={index}
              href={`/movies/${movie._id}`}
              className="text-gray-200"
            >
              <li className="p-1 my-2 flex gap-2 w-full bg-[#090e3b] hover:shadow-md hover:shadow-[#90afe9]">
                <Image
                  src={movie.image}
                  height={90}
                  width={100}
                  alt={movie.name}
                  className="rounded-md min-w-[90px] min-h-[100px] "
                />
                <div>
                  <span className="text-lg text-red-500 font-bold">
                    {movie.name}
                  </span>
                  <span className="text-xs ellipse">{movie.details}</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenreDetails;
