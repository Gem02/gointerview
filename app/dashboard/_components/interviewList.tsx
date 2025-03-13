"use client";
import { toast } from '@/hooks/use-toast';
import React, { useEffect, useState } from 'react';
import InterviewItemCard from '@/app/dashboard/_components/InterviewItemCard';
import { useSession } from 'next-auth/react';
import { getInterviewList } from '@/app/action/interview';
import { MockInterviewData } from '@/app/types/interview'; 

const InterviewList = () => {
    const { data: session } = useSession();
    const userEmail = session?.user?.email || "";

    const [interviewList, setInterviewList] = useState<MockInterviewData[]>([]);
    const [loading, setLoading] = useState(true);

    const reqList = async () => {
        setLoading(true);
        const response = await getInterviewList(userEmail);

        if (response.success && response.response) {
            if (response.response.length === 0) {
                toast({
                    description: "No interview found.",
                });
            }
            setInterviewList(response.response);
        } else {
            toast({
                variant: "destructive",
                description: response.error || "Something went wrong",
                title: "Error!"
            });
        }
        setLoading(false);
    };

    useEffect(() => {
        if (userEmail) {
            reqList();
        }
    }, [userEmail]);

    // ✅ Function to remove deleted interview from state
    const handleDelete = (mockId: string) => {
        setInterviewList((prev) => prev.filter((interview) => interview.mockId !== mockId));
    };

    return (
        <div className='mt-10'>
            <h2 className='font-semibold text-lg'>Previous Mock Interview</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
                {loading ? (
                    [1, 2, 3, 4].map((_, index) => (
                        <div key={index} className='h-[100px] w-full bg-gray-200 animate-pulse rounded-lg'></div>
                    ))
                ) : interviewList.length > 0 ? (
                    interviewList.map((interview, index) => (
                        <InterviewItemCard 
                            interview={interview}
                            key={index}
                            onDelete={handleDelete} // ✅ Pass handleDelete function
                        />
                    ))
                ) : (
                    <div className='bg-secondary flex flex-col p-6 items-center justify-center h-52'>
                        <p className='font-bold text-slate-700'>No interview Found</p>
                        <p className='text-[13px] text-slate-500'>Create New Interview from the button above</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InterviewList;
