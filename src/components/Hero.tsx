import { ArrowRight, Code2, Heart, Rocket } from 'lucide-react';
import Countdown from './CountDown';

interface HeroProps {
  onCTAClick: () => void;
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative md:h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6  py-20 ">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-8">
            <Countdown />

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Максат Каныбеков - {''} 
              <span className="text-transpare bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ментор года
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Мой вклад в развитие студентов Codify, проектного обучения и
              уверенности подростков через реальные IT-проекты.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onCTAClick}
                className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 r-md:flex-col"
              >
                Поддержать в голосовании
                <Heart className="w-5 h-5 group-hover:translate-x-1 transition-transform r-md:rotate-90" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-[370px] bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <img
                src="/maksat.jpg"
                className="max-w-[full] rounded-md"
                alt=""
              />

              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 r-md:-right-2">
                <div className="text-sm font-medium">ментор квартала</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-xl transform -rotate-3 r-md:-left-2">

              <div className="font-bold text-lg">голосуй 💙</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}
