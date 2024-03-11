"use client";

import { useRouter } from "next/navigation";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="px-2 py-1 border rounded-full bg-transparent text-white flex justify-center items-center gap-2"
    >
      <FaArrowAltCircleLeft /> Go Back
    </button>
  );
};

export default BackButton;
