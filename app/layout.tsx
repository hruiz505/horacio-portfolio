import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Horacio Ruiz — GRC & IT Operations",
  description:
    "Bilingual GRC & IT Operations Professional. Enforcing HIPAA, RBAC, and data privacy in high-stakes environments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
