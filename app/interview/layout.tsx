"use client"

import Navbar from '@/components/Navbar';
import React, {useEffect} from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
    const { data: session, status } = useSession();
    const router = useRouter();
  
    // Redirect if the user is not authenticated
    useEffect(() => {
      if (status === "loading") return; // Wait for session to load
      if (!session) {
        router.push("/signin"); // Redirect to signin if not authenticated
      }
    }, [session, status, router]);
  
    // Show a loading state while checking the session
    if (status === "loading") {
      return <p>Loading...</p>;
    }
  
    // If the user is not authenticated, don't render the layout
    if (!session) {
      return null; // Redirecting, so no need to render anything
    }
  
  return (
    <main>
        <Navbar />
        <div className='md:mx-20 lg:mx-36'>
        {children}
        </div>
       
    </main>
  )
}

export default Layout