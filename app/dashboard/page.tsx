import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/interviewList'

const page = () => {
  
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

export default page