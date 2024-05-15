import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "@/components/trasitionProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JopeGaro.dev",
  description: "Portfolio web React,Next,Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
