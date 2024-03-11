import Loader from "@/components/Loader/Loader";

export default function Loading() {
  return (
    <div className="fixed top-0 grid place-content-center min-h-screen min-w-full ">
      <Loader />
    </div>
  );
}
