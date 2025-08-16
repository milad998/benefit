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
      <meta property="og:image" content="https://benefit-kjf-rtd-izz.vercel.app/file_0000000093a061f499e55911fc6b9a2e.png" />
  
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
