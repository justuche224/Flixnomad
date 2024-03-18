import Topbar from "@/components/nav/Topbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";

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
        url: "/logo-st.png",
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
        <meta name="google-adsense-account" content="ca-pub-3833965669330090" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
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
        <footer>
          <Footer />
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
