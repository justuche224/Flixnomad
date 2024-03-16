// import Genre from "@/components/genres/Genre";
import Link from "next/link";
import { connectToDatabase } from "@/utils/database";

async function Genres() {
  try {
    // Connect to the database
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    // Aggregate genres and their counts
    const genreArray = await db
      .collection("movies")
      .aggregate([
        {
          $project: {
            _id: 0, // Exclude _id field
            genres: {
              // Create an array of genres
              $objectToArray: "$genre",
            },
          },
        },
        {
          $unwind: "$genres", // Split the array into multiple documents
        },
        {
          $group: {
            _id: "$genres.v", // Group by genre value
            count: { $sum: 1 }, // Count occurrences of each genre
          },
        },
        {
          $project: {
            genreName: "$_id", // Rename _id field as genreName
            count: 1, // Include count field
            _id: 0, // Exclude _id field
          },
        },
      ])
      .toArray();

    // return JSON.stringify(genreArray), { status: 200 };

    return (
      <div>
        <ul className="divide-y divide-gray-200">
          {genreArray?.map(
            ({ genreName, count }) =>
              // Check if genreName has a value before rendering the link
              genreName && (
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
              )
          )}
        </ul>
      </div>
    );
  } catch (error) {
    // return new Response("Internal Server Error", { status: 500 });
    return (
      <div className="text-center">
        <h2>An Error occurred</h2>
      </div>
    );
  }
}

const page = () => {
  return (
    <section className="mt-[5rem]">
      <nav className="flex justify-center mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                href="#"
                className="ms-1 text-sm font-medium hover:text-blue-600 md:ms-2 text-white"
              >
                Genres
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <Genres />
      </div>
    </section>
  );
};

export default page;
