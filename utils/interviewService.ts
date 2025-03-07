"use server"

import { db } from "./db";
import { MockInterview, UserAnswer } from "./schema";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

export const saveInterview = async (
  jsonMockResp: string,
  jobPosition: string,
  jobDesc: string,
  jobExperience: string,
  createdBy: string
): Promise<string | null> => {
  try {
    const [response] = await db.insert(MockInterview).values({
      mockId: uuidv4(),
      jsonMockResp,
      jobPosition,
      jobDesc,
      jobExperience,
      createdBy,
      createdAt: moment().format("DD-MM-yyyy"),
    }).returning({ mockId: MockInterview.mockId });

    return response?.mockId || null;
  } catch (error) {
    console.error("Database Insertion Error:", error);
    return null;
  }
};

export const saveAnswer = async (
  mockIdRef: string,
  question: string,
  correctAns: string,
  userAns: string,
  feedback: string,
  rating: string,
  userEmail: string
): Promise<boolean> => {
  try {
    await db.insert(UserAnswer).values({
      mockIdRef,
      question,
      correctAns,
      userAns,
      feedback,
      rating,
      userEmail,
      createdAt: moment().format("DD-MM-yyyy") 
    });

    return true; 
  } catch (error) {
    console.error("Error saving answer:", error); 
    return false; 
  }
};
