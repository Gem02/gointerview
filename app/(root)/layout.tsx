import Navbar from '@/components/Navbar'
import React from 'react'
import Footer from './_components/footer'

const Layout = ({children} : Readonly<{children : React.ReactNode}>) => {
  return (
    <main>
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}

export default Layout