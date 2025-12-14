import { Dot } from 'lucide-react';

export default function Footer() {
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
        </div>
      </div>
    </footer>
  );
}
