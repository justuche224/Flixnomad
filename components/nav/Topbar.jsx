"use client";

import Image from "next/image";
import styles from "./topbar.module.css";
import { FaBars, FaFilm, FaHome, FaList, FaTimes, FaTv } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "../search/SearchBar";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div className={styles.background}>
        <button type="button" aria-label="open menu" className="lg:hidden">
          <FaBars size={32} onClick={toggleMenu} className="cursor-pointer" />
        </button>
        <div>
          <ul className="text-lg lg:flex gap-5 hidden">
            <li className="my-3 ">
              <Link
                onClick={toggleMenu}
                href="/"
                className={currentPath === "/" ? "font-bold text-red-500" : ""}
              >
                Home
              </Link>
            </li>

            <li className="my-3">
              <Link
                onClick={toggleMenu}
                href="/movies"
                className={
                  currentPath === "/movies" ? "font-bold text-red-500" : ""
                }
              >
                Movies
              </Link>
            </li>

            <li className="my-3">
              <Link
                onClick={toggleMenu}
                href="/series"
                className={
                  currentPath === "/series" ? "font-bold text-red-500" : ""
                }
              >
                Series & Tv Shows
              </Link>
            </li>

            <li className="my-3">
              <Link
                onClick={toggleMenu}
                href="/genres"
                className={
                  currentPath === "/genres" ? "font-bold text-red-500" : ""
                }
              >
                Genres
              </Link>
            </li>
            <li className="my-3">
              <SearchBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
        </div>
        <div>
          <Link href="/">
            <Image src="/logo-st.png" alt="logo" width={150} height={50} />
          </Link>
        </div>
      </div>
      <nav
        aria-label="side bar"
        id="side-menu"
        className={`${styles.sidebar} ${
          isMenuOpen ? styles.open : ""
        } lg:hidden`}
      >
        <button
          type="button"
          className="absolute right-0"
          aria-label="close menu"
          onClick={toggleMenu}
        >
          <FaTimes size={32} />
        </button>
        <div className="grid place-content-center mb-3">
          <Link href="/">
            <Image src="/logo-st.png" alt="logo" width={150} height={50} />
          </Link>
        </div>
        <SearchBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul className="text-2xl mt-4">
          <li className="my-3 ">
            <Link
              onClick={toggleMenu}
              href="/"
              className={currentPath === "/" ? "font-bold text-red-500" : ""}
            >
              Home
            </Link>
          </li>
          <hr />
          <li className="my-3">
            <Link
              onClick={toggleMenu}
              href="/movies"
              className={
                currentPath === "/movies" ? "font-bold text-red-500" : ""
              }
            >
              Movies
            </Link>
          </li>
          <hr />
          <li className="my-3">
            <Link
              onClick={toggleMenu}
              href="/series"
              className={
                currentPath === "/series" ? "font-bold text-red-500" : ""
              }
            >
              Series & Tv Shows
            </Link>
          </li>
          <hr />
          <li className="my-3">
            <Link
              onClick={toggleMenu}
              href="/genres"
              className={
                currentPath === "/genres" ? "font-bold text-red-500" : ""
              }
            >
              Genres
            </Link>
          </li>
          <hr />
        </ul>
      </nav>
    </>
  );
};

export default Topbar;
