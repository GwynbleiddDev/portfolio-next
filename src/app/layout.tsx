import type { Metadata } from "next"
import { Rajdhani } from 'next/font/google'
import "./globals.css"
import "@/styles/app.css"
import "@/styles/background.css"
import "@/styles/scanlines.css"
import "@/styles/glitch.css"
import "@/styles/city.css"
import "@/styles/loading.css"
import LenisProvider from '@/components/lenis/LenisProvider';
import { LanguageProvider } from "@/context/LanguageContext";

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight:  ['300', '400', '500', '600', '700'] 
})

export const metadata: Metadata = {
  title: "Alejandro Valera Web Developer - Portfolio",
  description: "Alejandro Valera Web Developer - Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.className} overflow-x-hidden antialiased`}
      >
        <LanguageProvider>
          <LenisProvider>{children}</LenisProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}