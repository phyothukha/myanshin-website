import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Myanshi - Myanmar Sushi shop",
  description:
    "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
  icons: {
    icon: [{ url: "/myanshin.svg" }],
  },
  keywords: ["Phyo Thu Kha", "phyothukha", "myanmar sushi"],
  openGraph: {
    title: "Myanshi - Myanmar Sushi shop",
    description:
      "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
    // images: [
    //   {
    //     url: "https://phyothukha-porfolio.vercel.app/showcase.png",
    //     width: 800,
    //     height: 600,
    //     alt: "Description of the image for screen readers",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Myanshi - Myanmar Sushi shop",
    description:
      "Discover the artistry of sushi at its finest. From fresh ingredients to time-honored techniques, every dish is crafted to delight your senses. Indulge in a journey of authentic flavors and modern twists, only at MYANSHI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
