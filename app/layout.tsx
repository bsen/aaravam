import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaravam",
  description:
    "A space where children can -- and become change makers of tomorrow. A space where children can -- and become change makers of tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ cursor: "url('/cursor.png'), auto" }}>
        {children}
        <Header />
      </body>
    </html>
  );
}
