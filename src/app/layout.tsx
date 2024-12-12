import type { Viewport, Metadata } from "next";
import { Inter, Comfortaa} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import "./globals.css";
import Script from "next/script"

const comfortaa = Comfortaa({ subsets: ["latin"] });


 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000"
};
 
export const metadata: Metadata = {
  title: "fxllencode.dev",
  description: "My personal portfolio and blog.",
  metadataBase: new URL("https://fxllencode.dev"),
  openGraph: {
    siteName: "fxllencode.dev",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },

  applicationName: "fxllencode.dev",
  appleWebApp: {
    title: "fxllencode.dev",
    statusBarStyle: "default",
    capable: true
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">      
      <body className={comfortaa.className}>
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
