import Image from "next/image";
import Link from "next/link";

export const MovieCarousel = ({ movies }) => {
  const trending = movies.slice(0, 12);

  return (
    <div className="mx-auto p-2 gap-2 trending w-[80%]">
      {trending.map((movie) => (
        <div key={movie.name} className="rounded-md">
          <Link href={`movies/${movie.id}`}>
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
// export const MovieCarousel = ({ movies }) => {
//   const trending = movies.slice(0, 10);

//   return (
//     <div className="flex overflow-auto w-full p-2 gap-2">
//       {trending.map((movie, index) => (
//         <div key={index} className="hover:text-gray-200 text-center">
//           <Link href={`movies/${movie.id}`}>
//             <div className="flex-shrink-0 lg:w-[15rem] w-[10rem] lg:h-[20rem] h-[15rem] relative">
//               <div className=" absolute w-full h-full bg-[#00000000] hover:bg-[#00000033] transition-all "></div>
//               <Image
//                 src={movie.image}
//                 width={160}
//                 height={240}
//                 alt={movie.name}
//                 className="lg:w-[15rem] w-[10rem] lg:h-[20rem] h-[15rem] rounded transition-all duration-300"
//               />
//             </div>
//             <h2 className="text-sm font-bold">{movie.name}</h2>
//             <p className="text-xs">
//               {movie.genre.genre1}, {movie.genre.genre2}, {movie.genre.genre3}
//             </p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };
