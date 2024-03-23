import Link from "next/link";
import { connectToDatabase } from "@/utils/database";

async function getGenres() {
  console.log("awesome");
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
    console.log(genreArray);
    //return (genreArray);
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
    return (
      <div>
        <h2>An Error occurred</h2>
      </div>
    );
  }
}

export default async function Genre() {
  <getGenres />;
}
