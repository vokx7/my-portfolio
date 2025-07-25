import { Manrope } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata = {
  title: "Weronika Pawlak",
  description: "Frontend developer | Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="bg-beige">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
