import { Dot } from 'lucide-react';
interface HeroProps {
  onCTAClick: () => void;
}
export default function Footer({ onCTAClick }: HeroProps) {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col  justify-center items-center">
          <div className="flex items-center text-xl font-bold  mb-4">
            Ментор года 2025 <Dot /> Maksat
          </div>
          <p className="text-sm text-slate-500 max-w-md text-center ">
            P.S.: Копировать идеи с этого сайта без спроса — почти как списывать
            домашку у соседа: быстро, но потом может прилететь от учителя😅
          </p>
          <p className="text-sm mt-3 text-slate-500 max-w-md mb3 text-center ">
            Это футер по идеи
          </p>                    <button
                onClick={onCTAClick}
                className="group bg-gradient-to-r from-slate-500 to-black-500  text-white px-4 md:px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-slate-600 flex items-center justify-center gap-2 mt-3 shadow-xl shadow-black-500/25 r-md:flex-col"
              >
                 Нажмите чтобы выбрать кандидата
              </button>

        </div>
      </div>
    </footer>
  );
}
