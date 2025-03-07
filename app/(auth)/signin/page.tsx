"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn("credentials", { 
        email, 
        password, 
        callbackUrl: "/dashboard" 
      });
    } catch (error) {
      console.error("Login failed", error);
    }
    setLoading(false);
  };
  

  return (
    <div className="lg:w-1/2 xl:w-5/12 m-auto w-full p-6 sm:p-12">
      {/* <h3 className="text-sm mb-5 font-bold">Login Here</h3> */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <button onClick={() => signIn("google", {callbackUrl: "/dashboard"})} 
          className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-50 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:shadow-md focus:outline-none">
          <div className="bg-white p-2 rounded-full">
            <svg className="w-4" viewBox="0 0 533.5 544.3">
              <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
              <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
              <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
              <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
            </svg>
          </div>
          <span className="ml-4">Login with Google</span>
        </button>

        <div className="my-8 border-b text-center w-full">
          {/* <span className="bg-white px-2 text-sm text-gray-600 font-medium">Or sign in with your email</span> */}
        </div>

        {/* <form onSubmit={handleSignIn} className="mx-auto w-full max-w-xs">
          <input 
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4" 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type='submit' 
            className="mt-5 tracking-wide font-semibold bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-500 transition-all duration-300 ease-in-out flex items-center justify-center">
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="mt-6 text-xs text-gray-600 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="border-b border-gray-500 ml-1 font-bold border-dotted"> Sign up</Link>
          </p>
        </form> */}

          <p className="mt-6 text-xs text-gray-600 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="border-b border-gray-500 ml-1 font-bold border-dotted"> Sign up</Link>
          </p>
      </div>
    </div>
  );
};

export default SignInPage;
