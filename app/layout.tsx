"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { redirect } from 'next/navigation'
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Modal from "./components/Modal";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [navbarOpen, setNavbarOpen] = useState(false);
 const  navbarToggleHandler =   useCallback((e)  => {
        const size = window.innerWidth

        if (size < 500) {
            setNavbarOpen(false);

        }
    },[])


  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body onClick={navbarToggleHandler} className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}   />
          {children}
            <Modal/>
          {/*<Footer />*/}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import {useCallback, useState} from "react";
import {usePathname} from "next/navigation";
