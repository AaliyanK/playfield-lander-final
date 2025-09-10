import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const testSignifier = localFont({
  src: [
    {
      path: "../public/fonts/TestSignifier-Light-BF663d8462b5549.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/TestSignifier-Regular-BF663d8462c4c0b.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/TestSignifier-Medium-BF663d8462c7c04.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/TestSignifier-Bold-BF663d84626293d.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-test-signifier",
  display: "swap",
});

const consolas = localFont({
  src: [
    {
      path: "../public/fonts/consolas.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Consolas-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-consolas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Playfield - Superintelligence for Enterprise",
  description:
    "One model reads and writes across your systems. It generates interfaces on demand and acts through code.",
  keywords: ["enterprise AI", "superintelligence", "automation", "workflow"],
  authors: [{ name: "Playfield" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${testSignifier.variable} ${consolas.variable}`}
    >
      <body className="antialiased">
        <div className="grain-overlay" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
