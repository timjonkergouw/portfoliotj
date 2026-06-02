import type { Metadata } from "next";
import localFont from "next/font/local";
import SiteFooter from "@/app/components/site-footer";
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
      lang="nl"
      className={`${alteHaasRegular.variable} ${alteHaasBold.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
