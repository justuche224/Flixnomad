/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const metadata = {
  title: "About Us - Flixnomad",
};

export default function AboutPage() {
  return (
    <div className="text-center mt-[5rem] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Welcome to Flixnomad</h1>
      <p className=" text-base mb-6">
        <Link href="/" className="font-bold text-red-500 mx-2">
          Flixnomad
        </Link>
        is not just a community; it's a cinematic journey waiting to be
        explored. Dive into a world where movies, TV shows, anime, and
        documentaries become more than just entertainment—they become
        experiences. With
        <Link href="/" className="font-bold text-red-500 ml-2">
          Flixnomad
        </Link>
        , you're not just a viewer; you're an adventurer, exploring stories from
        across the globe with the tap of a finger or the click of a button.
      </p>
      <p className=" text-base mb-6">
        Our platform isn't just about staying up-to-date; it's about being ahead
        of the curve. From blockbuster hits to indie gems, we curate a selection
        that caters to every taste and preference. Whether you're craving
        adrenaline-pumping action, heartwarming romance, or mind-bending twists,
        <Link href="/" className="font-bold text-red-500 mx-2">
          Flixnomad
        </Link>
        has you covered.
      </p>
      <p className=" text-base mb-8">
        But
        <Link href="/" className="font-bold text-red-500 mx-2">
          Flixnomad
        </Link>
        isn't just about what you watch; it's about who you watch it with. Join
        our vibrant community of movie lovers from every corner of the globe.
        Connect, discuss, and share your passion for cinema with fellow
        enthusiasts. From lively debates to insider recommendations, there's
        always something exciting happening in our community.
      </p>
      <p className=" text-base">
        So, what are you waiting for? Embark on your cinematic odyssey today and
        discover a world of endless possibilities with
        <Link href="/" className="font-bold text-red-500 ml-2">
          Flixnomad
        </Link>
        . Join us, and let's make movie magic together.
      </p>
    </div>
  );
}
