import "./globals.scss";
import { Wix_Madefor_Display, Inter, TikTok_Sans } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"], // Regular + SemiBold
  variable: "--font-wix",
  display: "swap",
});

const tikTokSans = TikTok_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-tikTokSans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ru"
      className={`${wixMadefor.variable} ${tikTokSans.variable} ${inter.variable}`}
    >
      <body>
        <Header />
        {/* <Header/> */}
        <main className="main">
          <div>{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
