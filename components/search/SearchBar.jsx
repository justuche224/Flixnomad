"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ toggleMenu, isMenuOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
    if (isMenuOpen) toggleMenu();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-[480px] w-full px-4">
        <div className="flex gap-3">
          <input
            id="search"
            name="search"
            aria-label="search"
            onChange={handleChange}
            value={searchTerm}
            type="search"
            className="w-full border lg:text-base h-8 pl-4 p-1 rounded-full text-white bg-transparent"
            placeholder="search..."
            required
          />
          <button
            type="submit"
            aria-label="submit"
            className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 text-center"
          >
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
