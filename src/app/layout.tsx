import "../styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Noto_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Porsche Configuration",
  description: "A ui design implementation from dribbble.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-[#E4E4E4] overflow-x-hidden" lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
