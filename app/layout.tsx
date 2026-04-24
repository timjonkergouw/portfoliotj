import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const alteHaasRegular = localFont({
  src: "../public/fonts/AlteHaasGroteskRegular.ttf",
  variable: "--font-alte-haas-regular",
  display: "swap",
});

const alteHaasBold = localFont({
  src: "../public/fonts/AlteHaasGroteskBold.ttf",
  variable: "--font-alte-haas-bold",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tim Jonkergouw Portfolio",
  description: "Portfolio van Tim Jonkergouw",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${alteHaasRegular.variable} ${alteHaasBold.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
