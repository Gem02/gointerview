"use client"
import Link from 'next/link'
import React from 'react'
import SigninBtn from '../_components/button';

const page = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-5/12 m-auto p-6 sm:p-12">

            <div className="flex flex-col items-center justify-center h-[80vh]">
                
               
                    <SigninBtn />
                

                    <div className="my-8 border-b text-center">
                        
                    </div>

                    

                    <p className="mt-6 text-xs text-gray-600 text-center">
                    Have an account already?
                    <Link href="/signin" className="border-b border-gray-500 ml-1 font-bold border-dotted">
                        Sign in
                    </Link>
                    </p>
                
            </div>
        </div>
  )
}

export default page