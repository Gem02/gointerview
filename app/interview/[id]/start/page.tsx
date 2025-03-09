import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { getInterviewDetails } from "@/app/action/interview";
import QuestionSection from "./_components/questionSection";
import RecordAnswer from "./_components/RecordAnswer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MockQuestion {
  question: string;
  answer: string;
}

interface InterviewData {
  jsonMockResp: string;
  jobPosition: string;
  jobDesc: string;
  jobExperience: string;
  createdBy: string;
  createdAt: string | null;
  mockId: string;
}

const Page = () => {
  const params = useParams();
  const interviewId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState<MockQuestion[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [interviewData, setInterviewData] = useState<InterviewData>({
    jsonMockResp: "",
    jobPosition: "",
    jobDesc: "",
    jobExperience: "",
    createdBy: "",
    createdAt: null,
    mockId: "",
  });

  
  const fetchData = useCallback(async () => {
    if (interviewId && typeof interviewId === "string") {
      try {
        const response = await getInterviewDetails(interviewId);

        if (response?.result) {
          setInterviewData(response.result);

          try {
            const parsedQuestions: MockQuestion[] = JSON.parse(response.result.jsonMockResp);
            setMockInterviewQuestion(parsedQuestions);
          } catch (error) {
            console.error("Error parsing mock interview questions:", error);
            setMockInterviewQuestion([]);
          }
        }
      } catch (error) {
        console.error("Error fetching interview details:", error);
      }
    }
  }, [interviewId]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]); 

  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row gap-10 items-start">
        <div className="flex-1 min-h-[300px] overflow-auto">
          <QuestionSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            onQuestionClick={(index: number) => setActiveQuestionIndex(index)}
          />
        </div>

        <div className="flex-1 min-h-[300px] overflow-auto">
          <RecordAnswer
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
        </div>
      </div>

      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>Previous Question</Button>
        )}
        {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
          <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>Next Question</Button>
        )}
        {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
          <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
