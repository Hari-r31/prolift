import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prolift Badminton Academy | Lift to Success",
  description: "Professional badminton coaching with world-class facilities, expert coaching, and personalized training programs. Join Prolift Academy and elevate your game.",
  keywords: ["badminton", "academy", "coaching", "sports", "training", "Prolift", "Bangalore", "Bellandur"],
  authors: [{ name: "Prolift Academy" }],
  icons: {
    icon: "/cock.png",
  },
  openGraph: {
    title: "Prolift Badminton Academy | Lift to Success",
    description: "Professional badminton coaching with world-class facilities and expert coaches",
    url: "https://proliftacademy.com",
    siteName: "Prolift Academy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prolift Badminton Academy",
    description: "Professional badminton coaching with world-class facilities",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
