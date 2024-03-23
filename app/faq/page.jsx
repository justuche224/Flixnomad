import Faq from "@/components/Faq";

export const metadata = {
  title: "Frequently Asked Questions - Flixnomad",
};

const page = () => {
  return (
    <div className="mt-[5rem] max-w-4xl mx-auto p-3">
      <Faq />
    </div>
  );
};
export default page;
