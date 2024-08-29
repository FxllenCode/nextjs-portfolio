import type { Metadata } from "next";
import { Inter, Comfortaa} from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import "./globals.css";
import Script from "next/script"

const comfortaa = Comfortaa({ subsets: ["latin"] });




export const metadata: Metadata = {
  title: "fxllencode.dev",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Script>{"localStorage.theme = 'dark'"}
      

      </Script>
      <body className={comfortaa.className}>
        <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
