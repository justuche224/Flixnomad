import { moviesdb } from "../movies";

export const GET = async (request) => {
  console.log("triger");
  try {
    return new Response(JSON.stringify(moviesdb), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
