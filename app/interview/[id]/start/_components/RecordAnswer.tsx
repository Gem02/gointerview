import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"
import { Mic } from 'lucide-react';
import React from 'react';
import { useSession } from 'next-auth/react';
import { useSpeechToText } from '../hooks/useSpeechToText';
import { WebcamView } from './Webcamp';
import { creatFeedback, saveFeedback } from '../services/feedbackService';

interface MockQuestion {
  question: string;
  answer: string;
}

interface QuestionSectionProps {
  mockInterviewQuestion: MockQuestion[];
  activeQuestionIndex: number;
  interviewData: { mockId: string };
}

const RecordAnswer: React.FC<QuestionSectionProps> = ({ mockInterviewQuestion, activeQuestionIndex, interviewData }) => {
  const { data: session } = useSession();
  const userEmail = session?.user?.email || "";
  //const [feedback, setFeedback] = useState<string>('');
  //const [rating, setRating] = useState<string>('');
  const { toast } = useToast();

  const {
    error,
    isRecording,
    userAnswer,
    //isAnswerReady,
    startSpeechToText,
    stopSpeechToText,
   // setIsAnswerReady,
  } = useSpeechToText();


/*   useEffect(() => {
    if (isAnswerReady) {
      handleAnswerReady();
    }
  }, [isAnswerReady]); */

  const handleAnswerReady = async () => {
    const { feedback, rating } = await getFeedback();
  await saveAnswerNow(feedback, rating);
  //  setIsAnswerReady(false);
  };

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer?.length < 10) {
        toast({
          description: "Answer is too short. Please record again",
        });
        return;
      }
      await handleAnswerReady()
    } else {
      startSpeechToText();
    }
  };

  const getFeedback = async () => {
    console.log("Getting feedback...");
    try {
      const q = await creatFeedback(mockInterviewQuestion[activeQuestionIndex]?.question, userAnswer); 
      if (q?.success) {
        return { feedback: q.response?.feedback, rating: q.response?.rating };
      } else {
        toast({ description: q?.error, variant: 'destructive' });
        return { feedback: '', rating: '' };
      }
    } catch (err) {
      console.error('Failed to fetch feedback:', err);
      toast({ description: 'Failed to generate feedback. Please try again.', variant: 'destructive' });
      return { feedback: '', rating: '' };
    }
  };

  const saveAnswerNow = async (feedback: string, rating: string) => {
    try {
      const save = await saveFeedback({
        mockId: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        answer: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAnswer: userAnswer,
        feedback: feedback ,
        rating: rating,
        userEmail: userEmail,
      });

      if (save?.success) {
        toast({description: "Answer Saved!"})
      }
    } catch (error) {
      console.log('Error in saveAnswerNow:', error);
    }
  };

  if (error) {
    return <p>Web Speech API is not available in this browser 🤷‍</p>;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <WebcamView />

      <Button variant="outline" className="my-5" onClick={StartStopRecording}>
        {isRecording ? (
          <h2 className="text-red-600 animate-pulse flex gap-2 items-center">
            <Mic /> Stop Recording
          </h2>
        ) : (
          <h2 className="text-primary font-bold flex gap-2 items-center">
            <Mic /> Record Answer
          </h2>
        )}
      </Button>
    </div>
  );
};

export default RecordAnswer;