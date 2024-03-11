import Topbar from "@/components/nav/Topbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Flixnomad: HD Movies & TV Shows",
  description:
    "Download Movies and Tv shows in All qualities. 2160p 1080p 720p 480p",
  keywords: [
    "Dowbload Movies",
    "Movies",
    "Film",
    "HD movies",
    "Series",
    "Tv shows",
  ],
  color: "#00031c",
  metadataBase: new URL("https://flixnomad.vercel.app"),
  openGraph: {
    title: "Flixnomad: HD Movies & TV Shows",
    description:
      "Download Movies and Tv shows in All qualities. 2160p 1080p 720p 480p.", // A tailored description for social media sharing
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/log-rd.png" sizes="any" />
      </head>
      <body className="bg-[#00031c] text-white">
        <header>
          <nav aria-label="top nav bar" className="fixed top-0 w-full shadow">
            <Topbar />
          </nav>
        </header>
        <main className="block md:flex gap-5">
          <section className="w-full">{children}</section>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
