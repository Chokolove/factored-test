import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ProviderWrapper from "@/components/ProviderWrapper";

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
    <html lang="en" className="h-full">
      <ProviderWrapper>
        <body className="antialiased flex flex-row w-full min-h-screen h-full bg-black gap-6">
          <Navbar />
          <main className="w-full flex-1 my-6 bg-imperial-gray rounded-lg mr-6 shadow-md shadow-light-blue hover:shadow-lg transition-shadow duration-1000 overflow-x-auto">
            {children}
          </main>
        </body>
      </ProviderWrapper>
    </html>
  );
}
