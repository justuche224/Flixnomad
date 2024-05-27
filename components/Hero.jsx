"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroRef = useRef(null);
  const [hero, setHero] = useState([
    {
      _id: "665419212241bbe57640cd11",
      image:
        "https://i.postimg.cc/kGB5wYy5/AAAABe-Fvoku-Ed1wt-QEi-I-wz-Cy-Q2-Nxq-Km7u-O9-QOB2r-Ux5-OADLq7t-SJBf-Lci-QUg-Wj6yy-Fx9-If-JOzxhx-Yp-Svwje-Rm-ZFIawc-VML80d-W.jpg",
      name: "Atlas 2024",
      details:
        " In a bleak-sounding future, an A.I. soldier has determined that the only way to end war is to end humanity.",
      downloadLink: [
        {
          name: "720p",
          link: "https://mega.nz/file/rbYzWKjC#ODC5WqnajTa0GgWExBONT3vVab7QUK3Qv8ljpGzqh74",
        },
      ],
      trailer: "https://youtu.be/Jokpt_LJpbw?si=DdKa9-ZUsi1bXQZV",
      genre: { genre1: "Action", genre2: "Adventure", genre3: "Sci-Fi" },
      releaseDate: "24 / 5 / 2024",
      runtime: "1h 58min",
      director: "Brad Peyton",
      rated: "PG-13",
      type: "movie",
      quality: "720p",
      createdAt: "2024-05-27T05:24:48.246Z",
    },
    {
      _id: "6643092949668488d3cb86cf",
      image:
        "https://i.postimg.cc/JhGD0C4Y/MV5-BY2-Qw-OGE2-NGQt-MWQw-Ni00-M2-Iz-LThl-NWIt-YWMz-NGQ5-YWNi-ZDA4-Xk-Ey-Xk-Fqc-Gde-QXVy-NTE1-Nj-Y5-Mg-V1.jpg",
      name: "Godzilla x Kong: The New Empire 2024",
      details:
        "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.",
      downloadLink: [
        {
          name: "720p",
          link: "https://mega.nz/file/MucigJ7a#2Co5EzBbCQQpPVpDVCQ7FJ1vrYsilMMYkoPwqNYHUm4",
        },
        {
          name: "1080p",
          link: "https://mega.nz/file/UjVUDaKA#IWFzIEji7wIYft540IWj97aDIi4bRIMbgRPlM4e3QVE",
        },
      ],
      trailer:
        "https://m.youtube.com/watch?v=lV1OOlGwExM&pp=ygUsZ29kemlsbGEgeCBrb25nIHRoZSBuZXcgZW1waXJlIDIwMjQgdHJhaWxlciA%3D",
      genre: { genre1: "Action", genre2: "Adventure", genre3: "Fantasy" },
      releaseDate: "4 / 4 / 2024 (Germany)",
      runtime: "1h 55min",
      director: "Adam Wingard",
      rated: "12",
      type: "movie",
      quality: "720p & 1080p",
      createdAt: "2024-05-14T06:48:08.412Z",
    },
    {
      _id: "6654365e300b7943e954371b",
      image:
        "https://i.postimg.cc/W1rBsgnz/MV5-BOTI5-Mj-Nj-MTMt-N2-Ni-NC00-Yj-Bl-LTgz-MWQt-MGRh-ZDZk-Ym-Y1-NGU2-Xk-Ey-Xk-Fqc-Gde-QXVy-NTgy-NTA4-Mj-M-V1.jpg",
      name: "Godzilla Minus One [2023]",
      details:
        "Post war Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.",
      downloadLink: [
        {
          name: "720p",
          link: "https://mega.nz/file/nWxnRTDB#of09iCPFmo_KKepFnOgH5MPzDxs0jtKfMferq7HR5bA",
        },
        {
          name: "480p",
          link: "https://mega.nz/file/aw9xnbSQ#rujn_lY2YcTppG1ycy7Lje7-h_no4hil_WB7RCI5e1I",
        },
      ],
      trailer: "https://youtu.be/VvSrHIX5a-0?si=SKNJJd9CEA9co_aY",
      genre: {
        genre1: "Sci-Fi",
        genre2: "Action",
        genre3: "Adventure",
      },
      releaseDate: "1 / 12 / 2023 (Germany)",
      runtime: "2h 4min",
      director: "Takashi Yamazaki",
      rated: "12",
      type: "movie",
      quality: "720p & 480p",
      createdAt: "2024-05-27T07:29:34.714Z",
    },
    {
      _id: "661bfe6c0ba225ab3c7520d6",
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
