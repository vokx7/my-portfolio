import { Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Weronika Pawlak | Frontend Developer",
  description:
    "I am a front-end developer specializing in React, Next.js, and modern web development. Check out my projects and blog.",
  openGraph: {
    title: "Weronika Pawlak | Frontend Developer",
    description:
      "I am a front-end developer specializing in React, Next.js, and modern web development. Check out my projects and blog.",
    url: "https://weronika-pawlak.vercel.app/",
    type: "website",
    images: ["/og-cover.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.className} dark`}>
      <body className="bg-primary-light dark:bg-primary-dark">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
