import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ankit Yadav",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
