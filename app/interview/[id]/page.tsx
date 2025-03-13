"use client";

import { getInterviewDetails } from "@/app/action/interview";
import { Lightbulb, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  params: Promise<{ id: string }>;
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [interviewData, setInterviewData] = useState<InterviewType | null>(null);
  const [webCamEnabled, setWebCamEnabled] = useState<boolean>(false);
  const [interviewId, setInterviewId] = useState<string | null>(null);
  const { data: session, status } = useSession();
  const router = useRouter();

  // ✅ UseEffect to handle authentication redirect
  useEffect(() => {
    if (status === "loading") return; // Wait for session to load
    if (!session) {
      router.push("/signin"); // Redirect to signin if not authenticated
    }
  }, [session, status, router]);

  // ✅ UseEffect to resolve params and store the interview ID
  useEffect(() => {
    params.then((resolvedParams) => {
      setInterviewId(resolvedParams.id);
    });
  }, [params]);

  // ✅ Fetch interview data only when interviewId is available
  useEffect(() => {
    if (!interviewId) return;

    const fetchInterview = async () => {
      try {
        const data = await getInterviewDetails(interviewId);
        if (data?.result) {
          setInterviewData(data.result);
        }
      } catch (error) {
        console.error("Error fetching interview details:", error);
      }
    };

    fetchInterview();
  }, [interviewId]);

  // ✅ Don't render if session is still loading
  if (!session) {
    return null;
  }

  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-semibold text-slate-700">Interview</h2>
      <section className="md:grid flex flex-col-reverse md:grid-cols-2 gap-3">
        {/* Left Section - Job Info */}
        <div className="flex flex-col my-7 gap-5">
          <div className="flex flex-col p-3 rounded-lg border gap-2">
            <h2 className="text-base flex items-center gap-2 line-clamp-1">
              <strong>Job Position:</strong>
              {interviewData?.jobPosition || <Skeleton className="w-[200px] h-[20px] rounded-full" />}
            </h2>
            <h2 className="text-base flex items-center gap-2 line-clamp-2">
              <strong>Job Description:</strong>
              {interviewData?.jobDesc || <Skeleton className="w-[200px] h-[20px] rounded-full" />}
            </h2>
            <h2 className="text-base flex items-center gap-2 line-clamp-1">
              <strong>Years of Experience:</strong>
              {interviewData?.jobExperience || <Skeleton className="w-[50px] h-[20px] rounded-full" />}
            </h2>
          </div>
          {/* Info Box */}
          <div className="p-5 border rounded-lg border-yellow-200 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-600 text-sm">
              Hello, congratulations on your forthcoming interview. Take this interview seriously as though it were a real-life interview to see its effectiveness.
            </h2>
          </div>
        </div>

        {/* Right Section - Webcam */}
        <div>
          {webCamEnabled ? (
            <Webcam
              onUserMedia={() => setWebCamEnabled(true)}
              onUserMediaError={() => setWebCamEnabled(true)}
              mirrored={true}
              className="md:max-w-96 rounded-lg"
            />
          ) : (
            <div>
              <WebcamIcon className="h-fit w-full my-7 p-20 bg-secondary rounded-lg border" />
              <Button onClick={() => setWebCamEnabled(true)} className="w-full bg-secondary text-slate-800">
                Enable Web Cam and Microphone
              </Button>
            </div>
          )}

          <div className="md:hidden flex mt-2 justify-end items-end">
            {interviewId && (
              <Link href={`/interview/${interviewId}/start`}>
                <Button>Start Interview</Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Start Interview Button */}
      <div className="md:flex hidden mt-2 justify-end items-end">
        {interviewId && (
          <Link href={`/interview/${interviewId}/start`}>
            <Button>Start Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Page;
