import Link from 'next/link'
import React from 'react'
import SigninBtn from '../_components/button';

const page = () => {
  return (
    <div className="w-full lg:w-1/2 xl:w-5/12 m-auto p-6 sm:p-12">
         {/* <h3 className="text-sm mb-5 font-bold">Register Here</h3> */}
            <div className="flex flex-col items-center justify-center h-[80vh]">
                
               
                    <SigninBtn />
                

                    <div className="my-8 border-b text-center">
                        {/* <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            Or sign up with Credentials
                        </div> */}
                    </div>

                    {/* <div className="mx-auto max-w-xs">
                        <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="text"
                        placeholder="Name"
                        />
                    <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="email"
                        placeholder="Email"
                        />
                        <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type="password"
                        placeholder="Password"
                        />
                        <button className="mt-5 tracking-wide font-semibold bg-primary text-white-500 w-full py-4 rounded-lg hover:bg-green-500 transition-all text-white duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg
                                className="w-6 h-6 -ml-2"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span className="ml-1">Register</span>
                        </button>
                        
                        <p className="mt-6 text-xs text-gray-600 text-center">
                        Have an account already?
                        <Link href="/signin" className="border-b border-gray-500 ml-1 font-bold border-dotted">
                            Sign in
                        </Link>
                        </p>
                    </div> */}

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