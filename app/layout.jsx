import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

import Background from "./components/Background";
import React from "react";
import Footer from "./components/Footer";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home | Scientistx Technology",
  description: "Success your ideas with us",
};
const style = {
  canvas: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    backgroundImage: "url('./Graphic.svg')",
    backgroundSize: "cover",
    zIndex: -11,
    color: "#ffff",
    backgroundColor: "#333333",
  },
};
export default function RootLayout({ children, page }) {
  return (
    <html lang="en">
      <body style={{backgroundColor:"#000"}}  className={inter.className}>
        
        <Background />
        <Providers>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
