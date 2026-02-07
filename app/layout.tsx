import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carucage Records",
  description:
    "An independent record label split between Memphis, TN and St. Louis, MO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
