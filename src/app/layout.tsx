import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Cashooz | Earn Money Online By Completing Simple Tasks | Online Surveys For Money",
  description:
    "Earn Money Online By Completing Simple Tasks | Online Surveys For Money | Cashooz",
  openGraph: {
    title:
      "Earn Money Online By Completing Simple Tasks | Online Surveys For Money | Cashooz",
    description:
      "Earn Money Online By Completing Simple Tasks | Online Surveys For Money | Cashooz",
    url: "https://cashooz.com",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/Bw9p6pF/cashooz-advertisement.png",
        width: 1200,
        height: 630,
        alt: "Cashooz Advertisement",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="/assets/favicon-00922fbd.ico"
          />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
