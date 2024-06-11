import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextaurant | Order",
  description: "Nextaurant online ordering system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-slate-100`} suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
