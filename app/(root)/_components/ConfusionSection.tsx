import Image from "next/image";

const ConfusedSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 md:p-12 space-y-8 md:space-y-0 md:space-x-10">
      {/* Image on the left */}
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src="/big-question-mark.png" // Replace with your image path
          alt="Confused Person"
          width={500}
          height={300}
        />
      </div>

      {/* Text on the right */}
      <div className="w-full md:w-2/3 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Feeling Overwhelmed by Interview Prep?
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          You&apos;re not alone! Many job seekers feel unsure about how to prepare for interviews. From tricky behavioral questions to technical challenges, it&apos;s easy to feel stuck. But don’t worry—we’ve got your back.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Here&apos;s how we can help:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
          <li><strong>Step-by-Step Guides:</strong> Learn how to tackle common interview questions with confidence.</li>
          <li><strong>Practice Tools:</strong> Simulate real interviews and get instant feedback.</li>
          <li><strong>Expert Tips:</strong> Discover strategies from industry professionals to stand out.</li>
        </ul>
        <p className="text-gray-600 text-lg leading-relaxed">
          Let&apos;s turn your confusion into clarity and help you land your dream job.
        </p>
        <a
          href="#"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold"
        >
          Start Your Prep Today
        </a>
      </div>
    </div>
  );
};

export default ConfusedSection;