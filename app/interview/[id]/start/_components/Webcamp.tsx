import Image from 'next/image';
import Webcam from 'react-webcam';

export const WebcamView = () => {
  return (
    <div className="flex flex-col sm:mt-10 justify-center items-center bg-black rounded-lg p-5 relative">
      <Image
        src={'/webcam.png'}
        alt="webcam"
        width={150}
        height={150}
        className="absolute opacity-45"
      />
      <p className="text-slate-200 font-bold absolute">Webcam Not Activated</p>
      <Webcam
        mirrored
        style={{
          height: 200,
          width: 300,
          zIndex: 10,
        }}
      />
    </div>
  );
};