"use server"
import { generateFeedback, saveFeedbackAndAnswer } from "@/app/action/interview";

export interface FeedbackResult { success: boolean; error: string; response: { rating: string; feedback: string; }; }

export const creatFeedback = async (currentQuestion: string, userAnswer: string): Promise<FeedbackResult> => {
  const feedbackPrompt = `Question: ${currentQuestion},
        User Answer: ${userAnswer}, 
        Based on the interview question and user answer,
        please provide a rating and improvement feedback in JSON format with:
        - "rating" field
        - "feedback" field (3 to 5 lines)`;
  const response = await generateFeedback(feedbackPrompt)
  return response;
};

export const saveFeedback = async (data: {
  mockId: string;
  question: string;
  answer: string;
  userAnswer: string;
  feedback: string;
  rating: string;
  userEmail: string;
}): Promise<{ success: boolean }> => {
  const response = await saveFeedbackAndAnswer(data.mockId, data.question, data.answer, data.userAnswer, data.feedback, data.rating, data.userEmail)
  return response
};