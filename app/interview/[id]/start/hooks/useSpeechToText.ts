import { useEffect, useState } from 'react';
import useSpeechToTextLibrary from 'react-hook-speech-to-text';

export const useSpeechToText = () => {
  const [userAnswer, setUserAnswer] = useState<string>('');
 // const [isAnswerReady, setIsAnswerReady] = useState<boolean>(false);

  const {
    error,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToTextLibrary({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    const fullTranscript = results
      .filter((result) => typeof result === 'object' && 'transcript' in result)
      .map((result) => result.transcript)
      .join(' ');

    setUserAnswer(fullTranscript);

   /*  if (fullTranscript.length > 10) {
      setIsAnswerReady(true);
    } */
  }, [results]);

  return {
    error,
    isRecording,
    userAnswer,
    //isAnswerReady,
    startSpeechToText,
    stopSpeechToText,
   // setIsAnswerReady,
  };
};