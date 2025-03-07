"use client";
import { getInterviewAnswer } from '@/app/action/interview'
import { toast } from '@/hooks/use-toast';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import {UserAnswerData} from '@/app/types/interview';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDown } from 'lucide-react';

const Page = () => {

  const router=useRouter();
  const {id} = useParams();
  const [interviewAnswer, setInterviewAnswer] = useState<UserAnswerData[]>([]);

  useEffect(() =>{
    getAnswer()
  }, [id]);

  console.log(interviewAnswer)

    const getAnswer = async() =>{
      try {
        if (id && typeof id === 'string') {
          const res = await getInterviewAnswer(id);
          if (res.success && res.response) {
            console.log(res.response)
            setInterviewAnswer(res?.response);
            return
          }
        }
      } catch (error) {
        if (error) toast({variant: "destructive", description: "Error while fetching interview answers"})
      }
      
    }
  return (
    <div className='px-3 py-8'>
        
        {interviewAnswer?.length==0?
        <h2 className='font-bold text-xl text-gray-500'>No Interview Feedback Record Found</h2>  
          :
        <>
       <h2 className='text-3xl font-bold text-green-500'>Congratulation!</h2>
        <h2 className='font-bold text-2xl'>Here is your interview feedback</h2>
       
        {/* <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2> */}
   
        <h2 className='text-sm text-gray-500'>Find below interview question with correct answer, Your answer and feedback for improvement</h2>
        {interviewAnswer&&interviewAnswer.map((item,index)=>(
            <Collapsible key={index} className='mt-7'>
            <CollapsibleTrigger 
              className="p-2 bg-secondary rounded-lg flex items-center justify-between my-2 text-left w-full text-[13px] gap-3"
            >
              <div className="flex-1 sm:text-base">{item.question}</div> 
              <ChevronsUpDown className="h-5 w-5 flex-shrink-0" />
            </CollapsibleTrigger>

            <CollapsibleContent>
               <div className='flex flex-col gap-2'>
                <h2 className='text-red-500 p-2 border rounded-lg'><strong>Rating:</strong>{item.rating}</h2>
                <h2 className='p-2 border rounded-lg bg-red-50 text-[13px] text-red-900'><strong>Your Answer: </strong>{item.userAns}</h2>
                <h2 className='p-2 border rounded-lg bg-green-50 text-[13px] text-green-900'><strong>Correct Answer: </strong>{item.correctAns}</h2>
                <h2 className='p-2 border rounded-lg bg-blue-50 text-[13px] text-primary'><strong>Feedback: </strong>{item.feedback}</h2>
               
               </div>
            </CollapsibleContent>
            </Collapsible>
        ))}
 
  </>}
        
        <Button className='mt-10' onClick={()=>router.replace('/dashboard')}>Go Home</Button> 
    </div>
  )
}

export default Page