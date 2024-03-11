import GenreDetails from "@/components/genres/GenreDetails";
import { moviesdb } from "@/database/db-main-movie";

const page = ({ params }) => {
  return <GenreDetails movies={moviesdb} params={params} />;
};

export default page;
