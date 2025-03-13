import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { deleteInterview } from '@/app/action/interview';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function InterviewItemCard({ interview, onDelete }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const onStart = () => {
        router.push(`/interview/${interview?.mockId}`);
    };

    const onFeedbackPress = () => {
        router.push(`/interview/${interview.mockId}/feedback`);
    };

    const deleteInterviewHere = async () => {
        setIsDeleting(true);
        try {
            const res = await deleteInterview(interview.mockId);
            if (res) {
                onDelete(interview.mockId);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className='border shadow-sm rounded-lg p-3'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-primary line-clamp-1'>{interview?.jobPosition}</h2>

                {/* 🔹 Delete Button with Confirmation Dialog */}
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <button className='bg-red-100 text-red-600 px-2 py-1 cursor-pointer hover:scale-110 rounded-lg text-[12px]' size="sm">Delete</button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. You will permanently delete this interview.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={deleteInterviewHere} disabled={isDeleting}>
                                {isDeleting ? "Deleting..." : "Confirm"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>

            <h2 className='text-sm text-gray-600'>{interview?.jobExperience} Years of Experience</h2>
            <h2 className='text-xs text-gray-400'>Created At: {interview.createdAt}</h2>

            <div className='flex justify-between mt-2 gap-5'>
                <Button size="sm" variant="outline" className="w-full" onClick={onFeedbackPress}>
                    Feedback
                </Button>
                <Button size="sm" className="w-full" onClick={onStart}>
                    Re-Take
                </Button>
            </div>
        </div>
    );
}

export default InterviewItemCard;
