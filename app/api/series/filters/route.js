import { connectToDatabase } from "@/utils/database";

export const GET = async (req) => {
  try {
    const genreFilter = req.nextUrl.searchParams.get("genreFilter");
    const yearFilter = req.nextUrl.searchParams.get("yearFilter");

    // DB Connection
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    // Construct filtered query with MongoDB aggregation
    const query = [
      {
        $match: {
          type: "series",
          ...(genreFilter !== "all" && {
            $or: [
              { "genre.genre1": { $regex: genreFilter, $options: "i" } },
              { "genre.genre2": { $regex: genreFilter, $options: "i" } },
              { "genre.genre3": { $regex: genreFilter, $options: "i" } },
            ],
          }),
          ...(yearFilter !== "all" && {
            name: { $regex: `\\b${yearFilter}\\b`, $options: "i" },
          }),
        },
      },
    ];

    // Perform filtered query in MongoDB
    const filteredMovies = await db
      .collection("movies")
      .aggregate(query)
      .toArray();

    return new Response(JSON.stringify(filteredMovies), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
