import Link from "next/link";
import { baseUrl } from "@/utils/baseUrl";

async function getGenres() {
  try {
    const response = await fetch(`${baseUrl}/api/movies/genres`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("(genre page)Error fetching movies:", error);
    return { error: "(genre page)Failed to load movies" };
  }
}

export default async function Genre() {
  const genres = await getGenres();
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {genres?.map(({ genreName, count }) => (
          <Link
            key={genreName}
            href={`/genres/${genreName}`}
            className="no-underline"
          >
            <li className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
              <span>{genreName}</span>
              <span className="badge bg-red-500 text-white rounded-full px-2">
                {count}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
