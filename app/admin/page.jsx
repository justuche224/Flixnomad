import Link from "next/link";

export default async function page() {
  return (
    <section className="flex flex-col gap-3 justify-center text-center items-center">
      <Link
        href="/admin/add"
        className="w-[200px] bg-red-500 border border-transparent px-3 py-1 rounded-md hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500 transition-all duration-300"
      >
        Add new Movie
      </Link>
    </section>
  );
}
