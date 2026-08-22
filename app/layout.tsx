import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "HVTI | High Voltage Testing & Engineering",
  description:
    "HVTI provides high-voltage testing, electrical safety, condition monitoring and engineering solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#05070D] text-white antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}