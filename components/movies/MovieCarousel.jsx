import Image from "next/image";
import Link from "next/link";

export const MovieCarousel = ({ movies }) => {
  const trending = movies.slice(0, 12);

  return (
    <div className="mx-auto p-2 gap-2 trending w-[97%]">
      {trending.map((movie) => (
        <div
          key={movie.name}
          className="rounded-md shadow-sm hover:shadow-md hover:shadow-[#90afe9] shadow-[#90afe9]"
        >
          <Link href={`movies/${movie.id}`} title={movie.name}>
            <Image
              src={movie.image}
              alt={movie.name}
              width={90}
              height={120}
              className="w-full h-full object-cover rounded-md"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
