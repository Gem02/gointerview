"use client";

import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useSession } from "next-auth/react";
import { generateInterview } from "@/app/action/interview";
import { useRouter } from "next/navigation";

const AddNewInterview: React.FC = () => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "" as string;
  const router = useRouter();
  

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [jobPosition, setJobPosition] = useState<string>("");
  const [jobDesc, setJobDesc] = useState<string>("");
  const [jobExperience, setJobExperience] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = async () => {
    setLoading(true);

    if (!jobPosition || !jobDesc || !jobExperience || !userEmail) {
      console.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      
        const response = await generateInterview(
        jobPosition,
        jobDesc,
        jobExperience
        );  

      if (response.success && response.id){
        setLoading(false);
        setOpenDialog(false);
        router.push(`/interview/${response.id}`)
      } 
    } catch (error) {
      console.error("Error submitting interview:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="px-6 py-2 mt-3 w-fit border rounded-lg bg-primary hover:scale-105 hover:shadow-md cursor-pointer transition-all text-white"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your job interview
            </DialogTitle>
            <DialogDescription>
              Fill out the details for AI-generated questions.
            </DialogDescription>
            <form action={handleSubmit}>
              <div>
                <h2>
                  Add details about your job position/role, job description, and
                  years of experience
                </h2>

                <div className="mt-7 my-3">
                  <label className="text-left">Job Role/Job Position</label>
                  <Input
                    className="mt-1"
                    placeholder="Ex. Full Stack Developer"
                    required
                    value={jobPosition}
                    onChange={(event) => setJobPosition(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label>Job Description/ Tech Stack (In Short)</label>
                  <Textarea
                    className="mt-1"
                    placeholder="Ex. React, Angular, NodeJs, MySql etc"
                    required
                    value={jobDesc}
                    onChange={(event) => setJobDesc(event.target.value)}
                  />
                </div>
                <div className="my-3">
                  <label>Years of experience</label>
                  <Input
                    className="mt-1"
                    placeholder="Ex. 5"
                    type="number"
                    max={100}
                    required
                    value={jobExperience}
                    onChange={(event) => setJobExperience(event.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <LoaderCircle className="animate-spin" /> Generating from AI
                    </>
                  ) : (
                    "Start Interview"
                  )}
                </Button>
              </div>
            </form>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
