import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JopeGaro.dev",
  description: "Portfolio web React,Next,Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-pink-100">
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)] "> 
          {children}

          </div>

         
        </div>
      </body>
    </html>
  );
}
