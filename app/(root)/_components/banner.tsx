export default function BannerSection() {
    return (
      <section className="relative w-full bg-gradient-to-r max-w-6xl mx-auto from-green-600 to-green-800 text-white py-16 px-6 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-white opacity-20 rounded-full"></div>
          <div className="absolute inset-0 bg-pattern opacity-5"></div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Ace Your Next Interview with Confidence
            </h1>

            <p className="text-lg md:text-xl mt-4 opacity-90">
              Get  <strong>AI-powered</strong> mock interviews, real-time feedback, and expert insights to help you land your dream job.
            </p>

            <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
              <a href="/start" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all">
                Start Practicing Now
              </a>
            </div>
          </div>
      </section>

    );
  }