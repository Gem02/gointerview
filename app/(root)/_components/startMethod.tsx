import React from 'react'
import Image from 'next/image'

const StartMethod = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-10">
      {/* Image on the left */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src="/thumbs-up.png" 
          alt="Interview Tip"
          width={500}
          height={250}
        />
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Ace Your Next Interview with Confidence
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Behavioral questions can be tricky, but with the right approach, you can turn them into opportunities to shine. The <strong className="text-blue-600">STAR method</strong> (Situation, Task, Action, Result) is a proven framework to structure your answers effectively. Here’s how it works:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          <li><strong>Situation:</strong> Describe the context or challenge you faced.</li>
          <li><strong>Task:</strong> Explain your role and responsibilities in that situation.</li>
          <li><strong>Action:</strong> Detail the steps you took to address the challenge.</li>
          <li><strong>Result:</strong> Share the outcome and what you learned.</li>
        </ul>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ready to master your next interview? Explore our comprehensive guide and practice with real-world examples.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold"
        >
          Get Interview Ready Now
        </a>
      </div>
    </div>
  )
}

export default StartMethod