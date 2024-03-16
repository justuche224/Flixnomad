import { connectToDatabase } from "@/utils/database";
import { escapeRegExp } from "lodash";

export const GET = async (request, { params: { search } }) => {
  try {
    // DB Connection
    const client = await connectToDatabase();
    const db = client.db("flixnomad");

    // 1. Escape User Input (Sanitize for Regular Expressions)
    const escapedSearch = escapeRegExp(search || "");
    console.log(escapedSearch);

    // 2. Tokenize the search query
    const searchTokens = escapedSearch.split(" ");

    // 3. Construct the regular expression
    const searchRegex = new RegExp(searchTokens.join("|"), "i"); // Case-insensitive

    // 4. Leverage Text Search with $text Operator and Projection
    const items = await db
      .collection("movies")
      .find({ name: { $regex: searchRegex } })
      .sort({ createdAt: -1 })
      .toArray();

    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch Movies", { status: 500 });
  }
};
