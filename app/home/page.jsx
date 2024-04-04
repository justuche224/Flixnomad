import SearchBar from "@/components/search/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { moviesdb } from "@/database/db-main-movie";

const page = () => {
  return (
    <div className="mt-[5rem] max-w-4xl mx-auto p-3 text-center flex items-center flex-col gap-3">
      <div className="flex flex-col items-center rounded-lg p-3 bg-[#090e3b] w-full">
        <Image
          src="/logo-rd.png"
          width={120}
          height={120}
          alt="Logo"
          aria-label="Flixnomad logo"
        />
        <h1 className="text-red-500 font-bold text-3xl">Flix Nomad</h1>
        <h3 className="font-bold italic text-xl">
          For Movie Lovers by Movie Lovers
        </h3>
      </div>
      <div className="flex flex-col items-center rounded-lg p-3 bg-[#090e3b] w-full">
        <p className="mb-2">Lets watch something. search below</p>
        <SearchBar />
        <div className="flex gap-2 flex-wrap mt-3">
          <Link
            href="/"
            className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center"
          >
            Discover
          </Link>
          <Link
            href="/movies"
            className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center"
          >
            Movies
          </Link>
          <Link
            href="/series"
            className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center"
          >
            Series
          </Link>
        </div>
      </div>
      <div className="flex flex-col text-center items-center rounded-lg p-3 bg-[#090e3b] w-full">
        <h3 className="text-lg">Genres</h3>
        <ul className="flex gap-2 flex-wrap">
          <li>
            <Link href="/genres/action">Action</Link>
          </li>
          <li>
            <Link href="/genres/romance">Romance</Link>
          </li>
          <li>
            <Link href="/genres/adventure">Adventure</Link>
          </li>
          <li>
            <Link href="/genres/mystery">Mystery</Link>
          </li>
          <li>
            <Link href="/genres/Sci-Fi">Sci-Fi</Link>
          </li>
          <li>
            <Link href="/genres/Comedy">Comedy</Link>
          </li>
          <li>
            <Link href="/genres/Thriller">Thriller</Link>
          </li>
          <li>
            <Link href="/genres/Drama">Drama</Link>
          </li>
          <li>
            <Link href="/genres/Horror">Horror</Link>
          </li>
          <li>
            <Link href="/genres/Fantasy">Fantasy</Link>
          </li>
          <li>
            <Link href="/genres/Animation">Animation</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col rounded-lg p-3 bg-[#090e3b] w-full">
        <h3 className="text-lg text-center">Latest Releases</h3>
        <ul className=" list-disc text-left ml-7">
          {moviesdb.map((movie) => (
            <li key={movie.id}>
              <Link href={`/movies/${movie.id}`}>{movie.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
