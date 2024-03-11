"use client";

import { FaTelegram } from "react-icons/fa";
import { trending } from "@/database/trending";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SideContents = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold">
        <FaTelegram className="inline text-blue-500" /> Telegram
      </div>
      <div className="mt-5 gap-2 flex justify-center">
        <button className="p-1 bg-red-600 text-white rounded">Recent</button>
        <button className="p-1 bg-red-600 text-white rounded">Popular</button>
        <button className="p-1 bg-red-600 text-white rounded">Tags</button>
      </div>
      <div className="bg-red-200 min-h-screen mt-2 flex items-center flex-col gap-3 rounded-lg py-1">
        {trending.map((movie) => (
          <Image
            src={movie.image}
            alt={movie.name}
            key={movie.name}
            width={100}
            height={200}
            className="trending-img"
          />
        ))}
      </div>
    </div>
  );
};

export default SideContents;
