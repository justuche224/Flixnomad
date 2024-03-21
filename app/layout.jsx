import Topbar from "@/components/nav/Topbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata = {
  title: "Flixnomad: HD Movies & TV Shows",
  description:
    "Download Movies and Tv shows in all qualities 2160p 1080p 720p 480p",
  keywords: [
    "Dowbload Movies",
    "Movies",
    "Film",
    "HD movies",
    "Series",
    "Tv shows",
  ],
  metadataBase: new URL("https://flixnomad.vercel.app"),
  openGraph: {
    title: "Flixnomad: HD Movies & TV Shows",
    description:
      "Download Movies and Tv shows in all qualities 2160p 1080p 720p 480p.",
    images: [
      {
        url: "/Netflix-Hintergrund.webp",
      },
    ],
    url: "https://flixnomad.vercel.app",
    siteName: "Flixnomad",
    type: "website",
  },
};
export const viewport = {
  themeColor: "#00031c",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
<script type='text/javascript' src='//pl22852390.profitablegatecpm.com/53/4a/c7/534ac7ceaddae4350e5227cba8a0fa2f.js'></script>
      </head>
      <body className="bg-[#00031c] text-white pt-sans-regular">
        <header>
          <nav aria-label="top nav bar" className="fixed top-0 w-full shadow">
            <Topbar />
          </nav>
        </header>
        <main className="block md:flex gap-5 min-h-screen">
          <section className="w-full">{children}</section>
        </main>
        <Script
          async="async"
          data-cfasync="false"
          src="//pl22851714.profitablegatecpm.com/db1ec6b49cd714ed8f3a8404edb1fa73/invoke.js"
        />
        <div id="container-db1ec6b49cd714ed8f3a8404edb1fa73"></div>
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
