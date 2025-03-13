import Image from 'next/image';
import Webcam from 'react-webcam';

export const WebcamView = () => {
  return (
    <div className="flex flex-col mt-10 justify-center items-center bg-black rounded-lg p-5 relative">
      <Image
        src={'/webcam.png'}
        alt="webcam"
        width={200}
        height={200}
        className="absolute opacity-45"
      />
      <p className="text-slate-400 font-bold">Webcam Not Activated</p>
      <Webcam
        mirrored
        style={{
          height: 300,
          width: 500,
          zIndex: 10,
        }}
      />
    </div>
  );
};