
import Navbar from '@/components/Navbar';
import React from 'react';



const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    
  return (
    <main>
        <Navbar />
        <div className='md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </main>
  )
}

export default layout