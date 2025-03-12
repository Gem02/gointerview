"use client"
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/interviewList'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect if the user is not authenticated
  useEffect(() => {
    if (!session) {
      router.push("/signin"); // Redirect to signin if not authenticated
    }
  }, [session, router]);

  return (
    <div>
      <h2 className='text-3xl font-semibold text-slate-700'>Dashboard</h2>
      <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>

      <div>
        <AddNewInterview />
      </div>
      <InterviewList />
    </div>
  )
}

export default Page