import { moviesdb } from "../../movies";

export const GET = async (request) => {
  try {
    // Count genres
    const genreCounts = {};
    moviesdb.forEach((movie) => {
      const { genre } = movie;
      Object.values(genre).forEach((genreName) => {
        if (genreName) {
          genreCounts[genreName] = (genreCounts[genreName] || 0) + 1;
        }
      });
    });

    // Create an array of objects containing genre name and count
    const genreArray = Object.entries(genreCounts).map(
      ([genreName, count]) => ({
        genreName,
        count,
      })
    );
    return new Response(JSON.stringify(genreArray), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
