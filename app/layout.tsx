import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kashi-estudillo",
  description:
    "Fast-learning computer science student with strong analytical skills. Passionate about developing software solutions and thrives under pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <Navbar />
        <div className="mx-auto mb-12 max-w-lg text-center ">{children}</div>
      </body>
    </html>
  );
}
