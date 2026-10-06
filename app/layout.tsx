import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Horacio Ruiz — Applied AI, GRC & IT Operations",
  description:
    "Bilingual GRC and IT operations professional building practical AI-assisted products and research workflows with privacy, security, and human review.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0b0e0f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
