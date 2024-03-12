"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroRef = useRef(null);
  const [hero, setHero] = useState([
    {
      id: "Dune-Part-Two",
      image: "https://i.ibb.co/MhYJqfq/dune-part-two-2024.jpg",
      name: "Dune Part Two",
      details:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.",
      downloadLink: "page.html?id=Barbie-2023",
      trailer: "https://www.youtube.com/embed/U2Qp5pL3ovA",
      genre: {
        genre1: "Action",
        genre2: "Adventure",
        genre3: "Drama",
      },
      ratings: {
        dataTitle: "tt1517268",
        alt: "Barbie (2023) on IMDb",
      },
      releaseDate: "1 March 2024",
      runtime: "2h 46m",
      director: "Denis Villeneuve",
      rated: "PG-13",
      type: "movie",
    },
    {
      id: "Mission-Impossible-Dead-Reckoning-Part-One-2023",
      image:
        "https://i.ibb.co/4sy2ws9/MV5-BYz-Fi-Zjc1-Yzct-MDY3-Zi00-NGE5-LTlm-NWEt-N2-Q3-OWFj-Yj-Y1-NGM2-Xk-Ey-Xk-Fqc-Gde-QXVy-MTUy-MTUz.jpg",
      name: "Mission: Impossible - Dead Reckoning Part One 2023",
      details:
        "Ethan Hunt and his IMF team must track down a dangerous weapon before it falls into the wrong hands.",
      downloadLink: "https://www.google.com",
      trailer: "https://www.youtube.com/embed/94ceNwopotk",
      genre: {
        genre1: "Action",
        genre2: "Adventure",
        genre3: "Thriller",
      },
      ratings: {
        dataTitle: "tt9603212",
        alt: "Mission: Impossible - Dead Reckoning Part One (2023) on IMDb",
      },
      releaseDate: "13 / 7 / 2023 (Germany)",
      runtime: "2h 43min",
      director: "Christopher McQuarrie",
      rated: "PG-13",
      movieLink: "page.html?id=Mission-Impossible-Dead-Reckoning-Part-One-2023",
      type: "movie",
    },
    {
      id: "Nimona-2023",
      image: "https://i.ibb.co/S68hKpQ/IMG-20230811-071832-578.jpg",
      name: "Nimona 2023",
      details:
        "When a knight in a futuristic medieval world is framed for a crime he didn't commit, the only one who can help him prove his innocence is Nimona -- a mischievous teen who happens to be a shapeshifting creature he's sworn to destroy.",
      downloadLink: "https://www.google.com",
      trailer: "https://www.youtube.com/embed/",
      genre: {
        genre1: "Animation",
        genre2: "Action",
        genre3: "Comedy",
      },
      ratings: {
        dataTitle: "tt19500164",
        alt: "Nimona (2023) on IMDb",
      },
      releaseDate: "30 / 6 / 2023 (Germany)",
      runtime: "1h 41min",
      director: "Nick Bruno Troy Quane",
      rated: "PG",
      movieLink: "page.html?id=Nimona-2023",
      type: "movie",
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
          <Link href={`/movies/${hero[currentHeroIndex].id}`}>
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
