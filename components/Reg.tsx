"use client";
import React, { useState, useEffect } from "react";
import {ReactTyped} from "react-typed"; // Import the ReactTyped effect library

const Regpage = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  // Set of headings and descriptions
  const sets = [
    {
      heading: "Prepare for Success",
      description:
        "Let AI coach you through real-life mock interview scenarios.",
    },
    {
      heading: "Master Mock Interviews",
      description:
        "With personalized feedback, improve your interview skills every day.",
    },
    {
      heading: "Shine in Every Interview",
      description: "Start now and boost your confidence with expert guidance.",
    },
  ];

  useEffect(() => {
    if (typingComplete) {
      // Delay the transition to the next set after both texts disappear
      const timeout = setTimeout(() => {
        setCurrentSet((prevSet) => (prevSet + 1) % sets.length);
        setTypingComplete(false); // Reset for the next round
      }, 4000); // After both heading and description disappear (3000ms)

      return () => clearTimeout(timeout);
    }
  }, [typingComplete]);

  return (
  
      
        
        <div className="w-1/2 hidden bg-green-500 md:flex items-center text-white p-10">
          <div className="text-left">
            {/* Animated Typewriter Effect for Main Heading */}
            <div>
              <ReactTyped
                className="text-5xl font-bold mb-4"
                strings={[sets[currentSet].heading]}
                typeSpeed={50}
                backSpeed={50}
                backDelay={1000}
                onComplete={() => setTypingComplete(true)} // When heading completes
                loop={false}
                showCursor={false} // Disable the cursor
              />
            </div>

            {/* Animated Typewriter Effect for Description */}
            <div>
              <ReactTyped
                className="mt-4 text-xl"
                strings={[sets[currentSet].description]}
                typeSpeed={30}
                backSpeed={30}
                backDelay={1500} // Delay for description after heading
                onComplete={() => setTypingComplete(true)} // When description completes
                loop={false}
                showCursor={false} // Disable the cursor
              />
            </div>
          </div>
        </div>


  )
};

export default Regpage;

