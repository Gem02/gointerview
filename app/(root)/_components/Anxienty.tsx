import Image from 'next/image'
import React from 'react'

const Anxienty = () => {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
    {/* Left Side - Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Interview Anxiety is Real. <br />
        But It Doesn&apos;t Have to Hold You Back.
      </h2>
      <p className="text-gray-600 mt-4 text-lg">
        Sweaty palms? Racing heart? Stumbling over words? <br />
        You&apos;re not alone—<strong> over 90% of job seekers feel nervous before an interview.</strong> 
        The key to confidence? <strong> Practice.</strong>
      </p>
      <div className="bg-blue-100 p-4 rounded-lg mt-8 border-l-4 border-green-500 shadow-md">
          <p className="text-gray-700 font-semibold">
              <strong>Preparation and practice</strong> are the keys to confidence. The more you prepare, the better you perform.
          </p>
      </div>

  <ul className="space-y-3 mt-8">
    <li className="flex items-center text-gray-700 text-lg">
      ✅ Learn to stay calm under pressure
    </li>
    <li className="flex items-center text-gray-700 text-lg">
      ✅ Get comfortable answering tough questions
    </li>
    <li className="flex items-center text-gray-700 text-lg">
      ✅ Build confidence with structured practice
    </li>
  </ul>
      <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition">
        Start Practicing Today
      </button>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2">
      <Image src={'/confused-man.png'} width={500} height={200} alt='thininking' />
    </div>
  </section>
  )
}

export default Anxienty