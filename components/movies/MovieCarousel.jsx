import Link from "next/link";

export const MovieCarousel = ({ movies }) => {
  const trending = movies.slice(0, 10);

  return (
    <div className="flex overflow-auto w-full p-2 gap-2">
      {trending.map((movie, index) => (
        <div key={index}>
          <Link href={`movies/${movie.id}`}>
            <div
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex-shrink-0 lg:w-[15rem] w-[10rem] lg:h-[20rem] h-[15rem]"
            ></div>
            <h1 className="text-lg">{movie.name}</h1>
            <p className="text-xs">
              {movie.genre.genre1}, {movie.genre.genre2}, {movie.genre.genre3}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};
