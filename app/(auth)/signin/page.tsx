import React from 'react';
import Link from 'next/link';
import SigninBtn from '../_components/button';

const SignInPage = () => {


  return (
    <div className="lg:w-1/2 xl:w-5/12 m-auto w-full p-6 sm:p-12">
      
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <SigninBtn />

        <div className="my-8 border-b text-center w-full">
         
        </div>

        

          <p className="mt-6 text-xs text-gray-600 text-center">
            Don&apos;t have an account?
            <Link href="/signup" className="border-b border-gray-500 ml-1 font-bold border-dotted"> Sign up</Link>
          </p>
      </div>
    </div>
  );
};

export default SignInPage;
