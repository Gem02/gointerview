import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Go-Interview",
  description: "AI Coaching on how to ace interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <LoadingOverlay /> */}
          {children}
          <Toaster />
        </body>
      </html>
    </SessionProvider>
  );
}
