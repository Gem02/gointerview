"use server";

import { saveAnswer, saveInterview } from "@/utils/interviewService";
import { chatSession } from "@/utils/GeminiAiModel";
import { auth } from "@/auth";
import { db } from "@/utils/db";
import { MockInterview, UserAnswer } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import {UserAnswerData, MockInterviewData} from '@/app/types/interview';



export async function generateInterview(
  jobPosition: string,
  jobDesc: string,
  jobExperience: string
): Promise<{ success: boolean; error: string, id: string }> {
  
  const session = await auth();
  const userEmail = session?.user?.email;

  if (!userEmail) {
    return { success: false, error: "User is not authenticated.", id: '' };
  }

  const inputPrompt = `position: ${jobPosition}, job description: ${jobDesc}, years of experience: ${jobExperience}. Depending on this information, give me five interview questions with answers in JSON format.`;

  try {
    const result = await chatSession.sendMessage(inputPrompt);
    const rawText = result?.response?.text();
    const jsonMockResp = rawText.replace("```json", "").replace("```", ""); // Extract text response

    if (!jsonMockResp) {
      return { success: false, error: "AI service is very busy right now. Please try again later.", id:'' };
    }

    const interviewId = await saveInterview(jsonMockResp, jobPosition, jobDesc, jobExperience, userEmail);

    if (!interviewId) {
      return { success: false, error: "Failed to save interview", id:'' };
    }

    return { success: true, error: "", id: interviewId};
  } catch (error) {
    console.error("Error generating interview:", error);
    return { success: false, error: "An unexpected error occurred.", id:'' };
  }
}

export async function generateFeedback(
  prompt: string,
  
): Promise<{ success: boolean; error: string; response: { rating: string; feedback: string }}> {
  let jsonFeedback: { rating: string; feedback: string } = { rating: "", feedback: "" }; // ✅ Default Value

  try {
    const result = await chatSession.sendMessage(prompt);
    const rawText = result?.response?.text();

    if (!rawText) {
      return { success: false, error: "AI service is busy.", response: jsonFeedback };
    }
    jsonFeedback = JSON.parse(rawText.replace("```json", "").replace("```", ""));
  
  } catch (err) {
    if (err) return { success: false, error: "Invalid AI response format.", response: jsonFeedback };
  }

  return { success: true, error: "", response: jsonFeedback };
}

export const saveFeedbackAndAnswer = async (
  mockIdRef: string,
  question: string,
  correctAns: string,
  userAns: string,
  feedback: string,
  rating: string,
  userEmail: string
): Promise<{success: boolean, error: string}> => {
  try {
    const savedAnswer = await saveAnswer(
      mockIdRef,
      question,
      correctAns,
      userAns,
      feedback,
      rating,
      userEmail
    );

    if (!savedAnswer) {
      return { success: false, error: "Sorry, your answer was not saved." };
    }

    
  } catch (error) {
    if (error) return { success: false, error: "An error occurred while saving." };
  }

  return { success: true, error: '' };
};

export const getInterviewDetails = async (id:string) => {
  try {
    const result = await db 
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, id));

    if (result.length > 0) {
      return {result: result[0]}; 
    }
  } catch (error) {
    if(error) return ({error: 'Error fetching interview details'});
  }
};

export const getInterviewAnswer = async (
  interviewId: string
): Promise<{ success: boolean; error?: string; response?: UserAnswerData[] }> => {
  try {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, interviewId))
      .orderBy(UserAnswer.id);

    if (!result || result.length === 0) {
      return { success: false, error: "No interview answers found." };
    }

    return { success: true, response: result };
  } catch (error) {
    if (error)  return { success: false, error: "Error fetching interview feedback." };
  }
  return {success: false}
};

export const getInterviewList = async (
  userEmail: string
): Promise<{ success: boolean, error?: string, response?: MockInterviewData[]}> => {
  try {
    const req = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, userEmail))
      .orderBy(desc(MockInterview.id));

    if (req.length) {
      return { success: true, response: req };
    }

    return { success: false, error: "No interviews found" };
  } catch (error) {
    if (error) return { success: false, error: "Sorry! Something went wrong" };
  }
  return { success: false };
};

export const deleteInterview = async (mockId: string) => { 
  try {
    const result = await db.delete(MockInterview).where(eq(MockInterview.mockId, mockId));
    
    if (result) {
     // console.log("Interview deleted successfully:", mockId);
      return true; 
    } else {
     // console.error("Failed to delete interview:", mockId);
      return false; 
    }
  } catch (error) {
    if (error) return false;  
  }
};
