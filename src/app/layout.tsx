import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PT. ULIN MAJU SEJAHTERA - Perusahaan Penyedia Jasa Tenaga Kerja",
  description: "PT. Ulin Maju Sejahtera adalah perusahaan penyedia & pengelola jasa tenaga kerja (outsourcing) terpercaya di Indonesia: Jasa Driver, Tenaga Keamanan, Cleaning Service, Operator, & Helper.",
  keywords: ["outsourcing balikpapan", "penyedia tenaga kerja", "jasa driver", "tenaga keamanan", "security gada utama", "jasa cleaning service", "pt ulin maju sejahtera"],
  authors: [{ name: "PT. Ulin Maju Sejahtera" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "PT. ULIN MAJU SEJAHTERA - Perusahaan Penyedia Jasa Tenaga Kerja",
    description: "Mitra Terpercaya Penyedia & Pengelola Tenaga Kerja Profesional di Indonesia.",
    url: "https://www.ptulinmajusejahtera.com",
    siteName: "PT. ULIN MAJU SEJAHTERA",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Logo PT. Ulin Maju Sejahtera",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body className="antialiased selection:bg-[#FFB800] selection:text-[#0F2537]">
        {children}
      </body>
    </html>
  );
}
