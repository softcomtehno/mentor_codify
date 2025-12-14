

export default function VideoMeme({ videoSrc, text }) {
  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">

        <div className="w-full lg:w-1/2">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-sm lg:text-left text-gray-800">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}