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
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  appleWebApp: {
    title: "Portfolio TJ",
  },
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
