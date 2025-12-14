import { useInView } from "react-intersection-observer";

export default function VideoMeme({ videoSrc, text }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Загружаем только один раз
    threshold: 0.5, // 50% видео в области видимости
  });

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">

        {/* Видео */}
        <div className="w-full lg:w-1/2" ref={ref}>
          {inView && (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto rounded-lg"
            />
          )}
        </div>

        {/* Текст */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center max-w-sm lg:text-left text-gray-800">
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}
