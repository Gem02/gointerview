import Navbar from '@/components/Navbar';
import React from 'react';


const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <main>
        <Navbar />
        <div className='p-3 md:p-10 md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </main>
  )
}

export default layout