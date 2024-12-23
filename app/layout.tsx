import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { GoogleMapsProvider } from "@/components/providers/google-maps-provider"
import { Toaster } from "@/components/ui/toaster"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "資產管理系統",
  description: "資產管理系統",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleMapsProvider>
          {children}
        </GoogleMapsProvider>
        <Toaster />
      </body>
    </html>
  );
}
