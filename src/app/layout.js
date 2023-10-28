import './globals.scss'
import { Inter } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'
// import Document, { Html, Head, Main, NextScript } from "next/document";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ICO',
  description: 'ICO Web App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* <div style={{backdropFilter: contrast(1.3)}}>  */}
        <div className='app-root'>
        <Header />


        {children}

        <Footer />
        </div>
        <div id="modal-root"></div>


      </body>


    </html>
  )
}
