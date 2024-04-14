"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroRef = useRef(null);
  const [hero, setHero] = useState([
    {
      _id: {
        $oid: "661bfe6c0ba225ab3c7520d6",
      },
      image:
        "https://i.postimg.cc/JhS0cRDx/MV5-BN2-Ew-Nj-Fh-Mm-Et-ZDc4-YS00-OTUw-LTky-ODEt-Mz-Vi-Mzli-ZWIy-Mz-Yx-Xk-Ey-Xk-Fqc-Gde-QXVy-Mjkw-OTAy-MDU-V1.jpg",
      name: "Fallout 2024",
      details:
        "In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.",
      downloadLink: [
        {
          name: "Season 1",
          link: "https://mega.nz/folder/FC0jVK7I#efTlu3i3NHsskkcNiOM1fA",
        },
      ],
      trailer: "https://www.youtube.com/watch?v=V-mugKDQDlg",
      genre: {
        genre1: "Adventure",
        genre2: "Drama",
        genre3: "Sci-Fi",
      },
      releaseDate: "11 / 4 / 2024",
      runtime: "",
      director: "Geneva Robertson-Dworet Graham Wagner",
      rated: "16",
      type: "series",
      quality: "720p",
      createdAt: "2024-04-14T16:03:55.218Z",
    },
    {
      _id: "65f46cf0da84acaaa19daf3e",
      image: "https://i.postimg.cc/s2XHRWc6/Dune-Part-2-Poster-via-IMDb.jpg",
      name: "Dune: Part Two 2024",
      details:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      downloadLink: [
        {
          name: "1080p",
          link: "https://mega.nz/file/eDwCGBIC#J6iXBEsREGjHBlUUNhwXpzvds9jTRU_YAce4G2PzArM",
        },
        {
          name: "720p",
          link: "https://mega.nz/file/TGAQjJIA#Fwc5n2UT2hplTHbDGiczpJ3cQ-cG1gE5-oV5Z_AkFdw",
        },
        {
          name: "480p",
          link: "https://mega.nz/file/PCwFwLpC#ORkxnABHaRWP7OBEGtDSYzdBAt5OPscf0WUZReKf6mc",
        },
      ],
      trailer: "https://youtu.be/Way9Dexny3w?si=7SFv888VO3yfFo4g",
      genre: {
        genre1: "Action",
        genre2: "Adventure",
        genre3: "Drama",
      },
      releaseDate: "1 March 2024",
      runtime: "2h 46m",
      director: "Denis Villeneuve",
      rated: "PG-13",
      type: "movie",
      quality: "",
      createdAt: "2024-03-15T15:36:41.323Z",
    },
    {
      _id: "65f7dbf2dd2dea72c7796402",
      image:
        "https://i.postimg.cc/9FgSM8Zg/MV5-BNTZm-ZDU3-ODEt-Nj-Jh-Ny00-Yz-Bk-LWI1-ODQt-OGRm-NWU1-OGIw-N2-Vk-Xk-Ey-Xk-Fqc-Gde-QXVy-Nj-I4-NDY5-ODM-V1.jpg",
      name: "Alienoid: Return to the Future 2024",
      details:
        "Ancient Taoists travel through time and space in an effort to obtain a divine sword.",
      downloadLink:
        "https://mega.nz/file/3IhgWYDT#Z7DafPta0eT1cNyu_i3EQ2eK8FTT5k7wwmP4I6vtz-Y",
      trailer: "https://youtu.be/snjYMx5A7KU?si=Dhy0JcEHSKgpxvVt",
      genre: {
        genre1: "Action",
        genre2: "Fantasy",
        genre3: "Sci-Fi",
      },
      releaseDate: "10 January 2024",
      runtime: " 2h 2m",
      director: "Choi Dong-hoon",
      rated: "",
      type: "movie",
      quality: "480p",
      createdAt: "2024-03-18T06:15:14.555Z",
    },
    {
      _id: "65f479e7da0dfd91e43bc9b1",
      image: "https://i.postimg.cc/4yxdgtw3/photo-2024-03-13-13-59-02.jpg",
      name: "Shogun 2024",
      details:
        "Set in Japan in the year 1600, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
      downloadLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      trailer: "https://youtu.be/yAN5uspO_hk?si=cToMUhDsFLcBBDP0",
      genre: { genre1: "Adventure", genre2: "Drama", genre3: "History" },
      releaseDate: "27 February 2024",
      runtime: "",
      director: "",
      rated: "TV-14",
      type: "series",
      createdAt: "2024-03-15T16:39:40.435Z",
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Element is in view, start or resume the interval
          startInterval();
        } else {
          // Element is not in view, clear the interval
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  const intervalRef = useRef();

  const startInterval = () => {
    clearInterval(intervalRef.current); // Clear existing interval
    intervalRef.current = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % hero.length);
    }, 8000);
  };

  useEffect(() => {
    startInterval(); // Start the interval initially

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [hero.length]); // Restart the interval when hero.length changes

  return (
    <div
      ref={heroRef}
      className="w-full lg:h-screen h-[350px]"
      id="hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 3, 28, 1), rgba(0, 0, 0, 0)), url(${hero[currentHeroIndex].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="h-full grid place-content-center text-left">
        <div className="pl-5 ">
          <div className="my-2 lg:text-lg text-xs flex gap-2 ">
            <Link
              className="hover:bg-red-500 transition-all duration-200 hover:rounded-full p-1"
              href={`/genres/${hero[currentHeroIndex].genre.genre1}`}
            >
              {hero[currentHeroIndex].genre.genre1}
            </Link>
            <Link
              className="hover:bg-red-500 transition-all duration-200 hover:rounded-full p-1"
              href={`/genres/${hero[currentHeroIndex].genre.genre2}`}
            >
              {hero[currentHeroIndex].genre.genre2}
            </Link>
            <Link
              className="hover:bg-red-500 transition-all duration-200 hover:rounded-full p-1"
              href={`/genres/${hero[currentHeroIndex].genre.genre3}`}
            >
              {hero[currentHeroIndex].genre.genre3}
            </Link>
          </div>
          <h1 className="lg:text-6xl text-4xl font-bold">
            {hero[currentHeroIndex].name}
          </h1>
          <div className="my-2 lg:text-lg text-xs flex gap-3 ">
            <span>{hero[currentHeroIndex].runtime}</span>
            <span>{hero[currentHeroIndex].rated}</span>
            <span>{hero[currentHeroIndex].releaseDate}</span>
          </div>

          <p className="sm:w-[50%] w-full text-slate-200 my-4 lg:text-lg text-xs font-bold">
            {hero[currentHeroIndex].details}
          </p>
          <Link href={`/movies/${hero[currentHeroIndex]._id}`}>
            <button
              type="button"
              aria-label={`download ${hero[currentHeroIndex].name}`}
              className="px-3 py-2 bg-red-600 text-white lg:text-lg text-xs rounded-lg text-center flex justify-center gap-2"
            >
              Download <FaDownload className="inline" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
