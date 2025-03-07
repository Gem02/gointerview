import Image from 'next/image'
import React from 'react'

const InterviewMindset = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 max-w-6xl mx-auto">
    {/* Left - Image */}
    <div className="md:w-1/2 relative">
      <Image 
        src="/conversation.png"
        width={500}
        height={500}
        alt='conversation'
      />
      {/* Decorative element */}
      <div className="absolute top-5 left-5 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
      <div className="absolute bottom-5 right-5 w-20 h-20 bg-green-500 rounded-full opacity-30"></div>
    </div>
  
    {/* Right - Text */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-4xl font-extrabold text-gray-900 leading-snug">
        The Interview Mindset Shift
      </h2>
      
      <p className="text-gray-700 text-lg leading-relaxed">
        Interviews aren&apos;t just about proving yourself. They&apos;re <strong>conversations</strong> a chance to assess if <strong>you</strong> want the job as much as they want you.
        <strong> A shift in mindset</strong> from <strong>impressing</strong> to <strong>evaluating</strong> can dramatically reduce anxiety and improve your answers.
      </p>
  
      <blockquote className="p-5 bg-gray-100 border-l-4 border-primary italic text-gray-600 shadow-md">
        “The best candidates walk in thinking: <strong>Do I want to work here?</strong> not just <strong>Will they hire me?</strong>”  
      </blockquote>
  
      <ul className="space-y-3 text-gray-800 text-lg">
        <li>✔️ Focus on <strong>conversation</strong>, not performance</li>
        <li>✔️ Ask <strong>strategic questions</strong> to assess the company</li>
        <li>✔️ Remove pressure by shifting your perspective</li>
      </ul>
    </div>
      </section>
  )
}

export default InterviewMindset