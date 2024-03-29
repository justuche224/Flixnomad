"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const DownloadLink = ({ downloadLink }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="text-center my-2">
      {countdown > 0 ? (
        <p>Generating download link... Wait: {countdown}s</p>
      ) : (
        <div>
          <Link
            className="my-2 text-center bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300"
            href={downloadLink}
            target="_blank"
          >
            Download
          </Link>
        </div>
      )}
    </div>
  );
};

export default DownloadLink;
