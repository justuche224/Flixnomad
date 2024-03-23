import { connectToDatabase } from "@/utils/database";

export const POST = async (req) => {
  const newMovieData = await req.json();

  newMovieData.createdAt = new Date().toISOString();

  try {
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    await db.collection("movies").insertOne(newMovieData);

    return new Response(JSON.stringify(newMovieData), { status: 201 });
  } catch (error) {
    console.log("Error creating or saving Movie:", error);
    return new Response("Failed to create a new Movie", { status: 500 });
  }
};
