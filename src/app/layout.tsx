import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: "Jon Loves Michelle",
  authors: [{ name: "Jon Cursi", url: "https://github.com/joncursi" }],
  creator: "Jon Cursi",
  description: "Jon loves Michelle very very very much.",
  icons: [
    { rel: "apple-touch-icon", url: "/jonlovesmichelle/apple-icon.png" },
    { rel: "icon", url: "/jonlovesmichelle/apple-icon.png" },
  ],
  keywords: ["Jon", "Loves", "Michelle"],
  manifest: "/jonlovesmichelle/manifest.json",
  publisher: "Jon Cursi",
  robots: { index: true, follow: true },
  themeColor: "#FFFFFF",
  title: "Jon Loves Michelle",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
