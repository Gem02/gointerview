import React from 'react'
import Regpage from '@/components/Reg'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    {/* Main Container */}
      <div className="flex w-full mx-5 md:mx-0 max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
      <Regpage />
      {children}
     
      </div>
    </div>
     
  )
}

export default layout