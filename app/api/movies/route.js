import { connectToDatabase } from "@/utils/database";

export const GET = async (req, res) => {
  console.log("triger");
  try {
    const page = req.nextUrl.searchParams.get("page"); // Extract page number from query string (default 1)
    const perPage = 4; // Parse to integer

    // DB Connection
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    // DB Query
    const items = await db
      .collection("movies")
      .find({})
      .skip(perPage * (page - 1))
      .limit(perPage)
      .toArray();

    const itemCount = await db.collection("movies").countDocuments({});

    const response = { items, itemCount };
    return new Response(JSON.stringify(response), { status: 200 }); // Send JSON response
  } catch (error) {
    console.error(error); // Log error for debugging
    return new Response("Internal Server Error", { status: 500 }); // Send error response
  }
};
