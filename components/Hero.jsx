"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroRef = useRef(null);
  const [hero, setHero] = useState([
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
    {
      _id: "65f47179da0dfd91e43bc9ae",
      image:
        "https://i.postimg.cc/8kLxDS9d/MV5-BYWJk-Y2-Q4-Nm-Yt-OGRl-Mi00-YTg5-LWE2-Zm-Qt-Y2-Nk-Yzk3-YTRm-NWZl-Xk-Ey-Xk-Fqc-Gde-QXVy-MTY3-ODky-NDkz-V1-FMjpg-UX1000.jpg",
      name: "Madame Web 2024",
      details:
        "Cassandra Webb is a New York City paramedic who starts to show signs of clairvoyance. Forced to confront revelations about her past, she must protect three young women from a mysterious adversary who wants them dead.",
      downloadLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      trailer: "https://youtu.be/WAyzEOeeBZw?si=f9D6QPgwcByw5jUA",
      genre: { genre1: "Action", genre2: "Adventure", genre3: "Sci-Fi" },
      releaseDate: "16 February 2024",
      runtime: "1h 56m",
      director: "S.J. Clarkson",
      rated: "PG-13",
      type: "movie",
      createdAt: "2024-03-15T16:03:46.018Z",
    },
    {
      _id: "65f4757bda0dfd91e43bc9af",
      image: "https://i.postimg.cc/7h921wt5/photo-2024-01-12-19-15-51.jpg",
      name: " Players 2024",
      details:
        "New York sportswriter Mack devises successful hookup techniques with friend Adam and their crew, but when she unexpectedly falls head over heels for one of her targets, they all must learn what it takes to go from simply scoring to playing for keeps.",
      downloadLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      trailer: "https://youtu.be/8gH6AEBwEAw?si=1hA8Arq0-bCLonbP",
      genre: { genre1: "Comedy", genre2: "Romance", genre3: "" },
      releaseDate: "14 February 2024 ",
      runtime: "1h 45m",
      director: "Trish Sie",
      rated: "TV-MA",
      type: "movie",
      createdAt: "2024-03-15T16:20:55.104Z",
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
