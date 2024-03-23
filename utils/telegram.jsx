import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

export const Telegram = () => {
  return (
    <Link href="https://t.me/flixnomad">
      <button
        className="bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300 flex justify-center items-center"
        aria-label="Join Us on telegram"
      >
        <FaTelegram /> Telegram
      </button>
    </Link>
  );
};
