import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

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
    <html
      lang="en"
      className={ibmPlexSans.variable}
    >
      <body className="bg-[#05070D] font-sans text-white antialiased">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}