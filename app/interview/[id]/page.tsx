"use client";

import { getInterviewDetails } from "@/app/action/interview";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Webcam from 'react-webcam'
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton"


// Define the type for a single interview
type InterviewType = {
  id: number;
  jsonMockResp: string;
  jobPosition: string;
  jobDesc: string;
  jobExperience: string;
  createdBy: string;
  createdAt: string | null;
  mockId: string;
};

interface PageProps {
  params: Promise<{ id: string }>; // Mark params as a Promise
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [interviewData, setInterviewData] = useState<InterviewType | null>(null);
  const [webCamEnabled, setWebCamEnabled] = useState<boolean>(false);
  const [interviewId, setInterviewId] = useState<string | null>(null);
  //const [webCam, setWebCam] = useState<boolean>(false)

  
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setInterviewId(resolvedParams.id);
    }

    unwrapParams();
  }, [params]);


  useEffect(() => {
    fetchInterview();
  }, [interviewId]);

  const fetchInterview = async () => {
    if (!interviewId) return;
    try {
      const data = await getInterviewDetails(interviewId);
      if (data?.result) {
        setInterviewData(data.result);
      }
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-700">Interview</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <div className='flex flex-col my-7 gap-5 '>
        <div className='flex flex-col p-5 rounded-lg border gap-5'>
            <h2 className='text-lg flex items-center gap-2 line-clamp-1'>
                <strong>Job Role/Job Position:</strong>
                {interviewData?.jobPosition || <Skeleton className='w-[200px] h-[20px] rounded-full' />}
            </h2>
            <h2 className='text-lg flex items-center gap-2 line-clamp-1'>
                <strong>Job Description:</strong>
                {interviewData?.jobDesc || <Skeleton className='w-[200px] h-[20px] rounded-full' />}
            </h2>
            <h2 className='text-lg flex items-center gap-2 line-clamp-1'>
                <strong>Years of Experience:</strong>
                {interviewData?.jobExperience || <Skeleton className='w-[50px] h-[20px] rounded-full' />}
            </h2>
        </div>
            <div className='p-5 border rounded-lg border-yellow-200 bg-yellow-100'>
                <h2 className='flex gap-2 items-center text-yellow-500'> <Lightbulb/><strong>Information</strong></h2>
                <h2 className='mt-3 text-yellow-600 text-sm'>Hello, congratulations on your forth coming. take this interview serious as though it is a real life interview in order to see its effectiveness </h2>
            </div>
        </div>
        
        <div>
          {webCamEnabled ? (
            <Webcam
            onUserMedia={() => setWebCamEnabled(true)}
            onUserMediaError={() => setWebCamEnabled(true)}
            mirrored={true}
            className="md:max-w-96 rounded-lg"
            />
          ) : (
            <div className="">
              <WebcamIcon className='h-72 w-full my-7 p-20 bg-secondary rounded-lg border' />
              <Button onClick={() => setWebCamEnabled(true) } className="w-full bg-secondary text-slate-800">Enable Web Cam and Microphone</Button>
          </div>
          
          )}
        </div>

      </section>

      <div className='flex mt-2 justify-end items-end'>
        <Link href={`/interview/${interviewId}/start`}>
          <Button >Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
