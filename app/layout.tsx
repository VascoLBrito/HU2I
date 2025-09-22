import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// Load Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HU2i",
  description: "HU2i Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`${montserrat.variable} font-sans antialiased bg-white`}>
        {children}
      </body>
    </html>
  );
}
