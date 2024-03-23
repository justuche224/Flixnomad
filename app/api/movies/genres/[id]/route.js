import { connectToDatabase } from "@/utils/database";

export const GET = async (request, { params }) => {
  const genreToFind = params.id; // Extract genre from request parameters
  try {
    // DB Connection
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    // DB Query - Find movies in the specified genre
    const moviesInGenre = await db
      .collection("movies")
      .find({
        $or: [
          { "genre.genre1": genreToFind },
          { "genre.genre2": genreToFind },
          { "genre.genre3": genreToFind },
        ],
      })
      .toArray();

    return new Response(JSON.stringify(moviesInGenre), { status: 200 }); // Send JSON response with movies in the specified genre
  } catch (error) {
    console.error(error); // Log error for debugging
    return new Response("Internal Server Error", { status: 500 }); // Send error response
  }
};
