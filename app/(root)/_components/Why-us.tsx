import React from 'react'

const WhyUs = () => {
  return (
    <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose this platform?</h2>
            <p className="text-gray-600 mt-4 text-lg">
            We provide AI-driven mock interviews, instant feedback, and career-enhancing insights.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            
            <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4-4m0 0l-4 4m4-4v12"></path></svg>
                </div>
                <h3 className="text-lg font-semibold">Job-Specific Mock Interviews</h3>
                <p className="text-gray-600 mt-2">AI-generated questions tailored to your job role and industry.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l-2 2m0 0L5 6m4 2h10a1 1 0 011 1v10a1 1 0 01-1 1H9m0 0l-2-2m2 2l-2 2"></path></svg>
                </div>
                <h3 className="text-lg font-semibold">Voice-Powered Responses</h3>
                <p className="text-gray-600 mt-2">Practice speaking with real-time voice recording and AI feedback.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white shadow-md rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
                <div className="mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <h3 className="text-lg font-semibold">AI-Powered Feedback</h3>
                <p className="text-gray-600 mt-2">Get instant feedback on your responses to improve performance.</p>
            </div>

            </div>
        </div>
      </section>
  )
}

export default WhyUs