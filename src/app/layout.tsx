import { ReactNode } from "react";
import type { Metadata } from "next"
import { Rajdhani } from 'next/font/google'
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext";
import { AnimationProvider } from "@/context/AnimationContext";
import LenisProvider from '@/components/lenis/LenisProvider';

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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rajdhani.className} overflow-x-hidden antialiased`}
      >
        <LanguageProvider>
          <AnimationProvider>
            <LenisProvider>
              {children}
            </LenisProvider>
          </AnimationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}