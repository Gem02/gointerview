"use client";

import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary opacity-20 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary opacity-10 rounded-full"></div>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-primary text-white relative z-10">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="mt-3 text-lg">Your ultimate AI-powered interview preparation platform.</p>
      </section>

      {/* Steps Section */}
      <section className="max-w-5xl mx-auto py-16 px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center">Get Started in 3 Simple Steps</h2>
        
        <div className="mt-10 space-y-10">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-secondary opacity-30 rounded-full"></div>
            <Image src="/step1-signup.png" width={300} height={200} alt="Sign Up" className="rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold">Step 1: Sign Up & Create a Profile</h3>
              <p className="text-gray-600 mt-2">
                Register for a free account and provide details about your industry, job role, and experience.
                This helps our AI customize interview questions for you.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 relative">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary opacity-20 rounded-full"></div>
            <Image src="/step2-ai.png" width={300} height={200} alt="AI Interview" className="rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold">Step 2: Generate AI-Powered Questions</h3>
              <p className="text-gray-600 mt-2">
                Our AI analyzes your profile and generates a tailored set of interview questions. 
                You can also upload your resume for more precise questions.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 relative">
            <div className="absolute -bottom-10 left-10 w-28 h-28 bg-secondary opacity-20 rounded-full"></div>
            <Image src="/step3-practice.png" width={300} height={200} alt="Practice" className="rounded-lg" />
            <div>
              <h3 className="text-xl font-semibold">Step 3: Practice & Get Feedback</h3>
              <p className="text-gray-600 mt-2">
                Practice answering questions with AI feedback. 
                Improve your responses, learn best practices, and gain confidence before your real interview.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16 px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center">Why Choose Our Platform?</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow relative">
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-primary opacity-10 rounded-full"></div>
            <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
            <p className="text-gray-600 mt-2">Get instant AI feedback and personalized question recommendations.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow relative">
            <div className="absolute -top-5 right-5 w-14 h-14 bg-secondary opacity-10 rounded-full"></div>
            <h3 className="text-xl font-semibold">Resume-Based Questions</h3>
            <p className="text-gray-600 mt-2">Upload your resume and receive custom-tailored questions.</p>
          </div>

          <div className="p-6 bg-gray-100 rounded-lg shadow relative">
            <div className="absolute bottom-5 left-5 w-12 h-12 bg-primary opacity-20 rounded-full"></div>
            <h3 className="text-xl font-semibold">Realistic Mock Interviews</h3>
            <p className="text-gray-600 mt-2">Simulate real interview scenarios and refine your responses.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action (CTA) */}
      <section className="text-center py-16 bg-primary text-white relative z-10">
        <h2 className="text-3xl font-bold">Ready to Land Your Dream Job?</h2>
        <p className="mt-2 text-lg">Start practicing today with AI-powered mock interviews.</p>
        <Link href="/signup">
          <button className="mt-5 px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow hover:bg-gray-200 transition">
            Get Started for Free
          </button>
        </Link>
      </section>
    </div>
  );
}
