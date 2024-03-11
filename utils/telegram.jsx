import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

export const Telegram = () => {
  return (
    <Link href="https://t.me/flixnomad">
      <button
        className="p-1 bg-red-500 rounded-full flex justify-center items-center"
        aria-label="Join Us on telegram"
      >
        <FaTelegram /> Telegram
      </button>
    </Link>
  );
};
