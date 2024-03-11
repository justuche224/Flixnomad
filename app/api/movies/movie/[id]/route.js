import { moviesdb } from "../../../movies";

export const GET = async (request, { params }) => {
  try {
    const movie = moviesdb.find((movie) => movie.id === params.id);
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
