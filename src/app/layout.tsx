import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cartão digital",
  description: "Sistema de cartão digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
