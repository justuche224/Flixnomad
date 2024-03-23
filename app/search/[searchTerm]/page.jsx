import SearchPage from "@/components/search/SearchPage";
import { moviesdb } from "@/database/db-main-movie";

const page = ({ params }) => {
  return (
    <div>
      <SearchPage params={params} movies={moviesdb} />
    </div>
  );
};

export default page;
