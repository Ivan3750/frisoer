import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--",
  display: "swap",
});
 

export const metadata: Metadata = {
  title: "Frisør i Horsens | Eksklusiv Hårpleje",
  description:
    "Professionel frisør i Horsens med fokus på kvalitet, stil og personlig service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body
        className={`${playfair.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}