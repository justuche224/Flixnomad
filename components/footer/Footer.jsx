import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full min-h-52 mt-10 text-center bg-[#090e3b] p-5 text-gray-200">
      <h1 className="mb-5">
        {currentYear} Flixnomad - For movie lovers by movie lovers
      </h1>
      <div className="text-center">
        <Link className="mx-2" href="/">
          Home
        </Link>
        <Link className="mx-2" href="/about">
          About Us
        </Link>
        <Link className="mx-2" href="/contact">
          Contact Us
        </Link>
        <Link className="mx-2" href="/disclaimer">
          Disclaimer
        </Link>
        <Link className="mx-2" href="/help">
          Help
        </Link>
        <Link className="mx-2" href="/faq">
          F.A.Q.
        </Link>
        <br />
        <Link className="mx-2" href="/terms">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

export default Footer;
