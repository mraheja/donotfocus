import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Credits } from "@/components/Credits/Credits";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Do Not Focus",
  description: "A do not focus mode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
      <Credits />
    </html>
  );
}
