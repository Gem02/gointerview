import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

interface MockQuestion {
  question: string;
  answer: string;
}

interface QuestionSectionProps {
  mockInterviewQuestion: MockQuestion[];
  activeQuestionIndex: number;
  onQuestionClick: (index: number) => void;
}

const textToSpeech = (text: string) => {
  if ("speechSynthesis" in window) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  } else {
    alert("Sorry, Your browser does not support text to speech");
  }
};

const QuestionSection: React.FC<QuestionSectionProps> = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  onQuestionClick,
}) => {
  return (
    <div className="p-5 border rounded-lg sm:my-10 mb-5">
      <div className="flex gap-1 flex-wrap sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
        {mockInterviewQuestion.map((_, index) => (
          <h2
            key={index}
            onClick={() => onQuestionClick(index)}
            className={`p-2 border rounded-full text-xs md:text-sm text-center cursor-pointer ${
              activeQuestionIndex === index && "bg-primary text-white"
            }`}
          >
            Q. {index + 1}
          </h2>
        ))}
      </div>

      <h2 className="my-5 text-sm">
        {mockInterviewQuestion[activeQuestionIndex]?.question}
      </h2>

      <Volume2
        className="cursor-pointer"
        onClick={() =>
          textToSpeech(mockInterviewQuestion[activeQuestionIndex]?.question)
        }
      />

      <div className="border rounded-lg p-5 bg-blue-100 mt-5 sm:mt-20">
        <h2 className="flex gap-2 items-center text-primary">
          <Lightbulb />
          <strong>Note:</strong>
        </h2>
        <h2 className="text-sm text-primary my-2">
          Click on the question number to navigate the next question
        </h2>
      </div>
    </div>
  );
};

export default QuestionSection;
