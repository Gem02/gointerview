
import Navbar from '@/components/Navbar';
import React from 'react';



const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    
  return (
    <main>
        <Navbar />
        <div className='m-5 md:mx-20 sm:my-5 lg:mx-36 min-h-screen'>
        {children}
        </div>
       
    </main>
  )
}

export default layout