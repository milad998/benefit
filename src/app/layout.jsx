import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Benefit",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKE0HkaQg-vp2Ut4I8WyAaIAbMYN2BN71N4A&s" />
  
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
