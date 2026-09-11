import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
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
      suppressHydrationWarning
    >
      <body className="bg-[#05070D] font-sans text-white antialiased" suppressHydrationWarning>
        <SmoothScrollProvider>
          {/* 1. Global Viewport-Fixed Scroll Progress Bar */}
          <ScrollProgressBar />

          {/* 2. Global Viewport-Fixed Master Navbar */}
          <Navbar />

          {/* 3. Luxury Cinematic Page Transition & Dynamic Content */}
          <PageTransitionProvider>
            {children}
          </PageTransitionProvider>

          {/* 4. Global Footer */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}