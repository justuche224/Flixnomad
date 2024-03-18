import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us - Flixnomad",
};

const page = () => {
  return (
    <div className="mt-[5rem] max-w-4xl mx-auto p-3">
      <h1 className="text-left text-3xl font-bold">Say hi! Don’t be shy.</h1>
      <p className="text-left text-sm text-gray-200">
        Got a question, suggestion, or just want to connect with us? We’d love
        to hear from you! Feel free to reach out through any of the channels
        below.
      </p>
      <hr className="my-5" />
      <p className="text-center text-sm my-3 text-red-500">
        Usually I get back to emails in less than 12 hours, but sometime it
        could take a little longer!
      </p>
      <section>
        <ContactForm />
      </section>
    </div>
  );
};

export default page;
