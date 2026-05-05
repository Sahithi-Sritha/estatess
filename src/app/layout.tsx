import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buy Deal Property | Find Your Deal",
  description: "The most exclusive real estate opportunities at your fingertips. Discover premium properties with direct contact and verified sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} bg-[#0A0A0A] text-white selection:bg-[#E8272A] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
