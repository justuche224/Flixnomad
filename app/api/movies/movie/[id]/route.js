import { connectToDatabase } from "@/utils/database";
import { ObjectId } from "mongodb";
export const GET = async (request, { params }) => {
  console.log(params.id);
  try {
    // DB Connection
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    const movie = await db
      .collection("movies")
      .findOne({ _id: new ObjectId(params.id) });

    if (!movie) {
      return new Response(JSON.stringify({ error: "Movie not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(movie), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
