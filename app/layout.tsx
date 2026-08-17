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
      <body className="text-white antialiased">
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
            backgroundColor: "#000000",
            backgroundImage: "url(/images/pillars-of-creation.png)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            filter: "grayscale(100%) contrast(110%) brightness(60%)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            pointerEvents: "none",
          }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
