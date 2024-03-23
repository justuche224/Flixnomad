import { connectToDatabase } from "@/utils/database";

export const GET = async (request) => {
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

    return new Response(JSON.stringify(genreArray), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
