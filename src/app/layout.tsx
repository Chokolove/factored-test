import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Star Wars Fan Page",
  description: "Fan app for films and characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-row w-full min-h-screen bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
