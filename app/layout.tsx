import "./globals.scss";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";

const gilroy = localFont({
  src: [
    {
      path: "./fonts/gilroy/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gilroy/Gilroy-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    // Italic
    {
      path: "./fonts/gilroy/Gilroy-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/Gilroy-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/Gilroy-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/gilroy/Gilroy-SemiboldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-gilroy",
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Fijo",
  description: "Job board for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable}`}>
        <main className="font-sans">
          {children}
          <SpeedInsights />
          <Toaster />
        </main>
      </body>
    </html>
  );
}
