import {
  AlertTriangle,
  TrendingDown,
  Brain,
  Zap,
  TrendingUp,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function ProblemInsight() {
  const stats = [
    {
      icon: TrendingUp,
      stat: '+18 групп',
      label: 'выпустил  с реальными проектами (5-10 проектов в каждой)',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Zap,
      stat: '+270 студентов',
      label: 'которые стали увереннее работать с технологиями и компьютером',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      stat: 'Уже 2 года',
      label: 'обучаю через проекты, командную работу и практику',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Ментор {''}
            </span>
            <br /> это не про уроки, а про развитие человека
          </h2>

          <p className="text-lg md:text-lg text-default-500 max-w-3xl mx-auto leading-relaxed">
            Я работаю в Codify с 2023 года. За это время академия сильно
            изменилась и выросла вместе с ней рос и я: набирался опыта, улучшал
            подход к обучению и вместе с командой влиял на развитие студентов и
            самой экосистемы Codify.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div
                className={`text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}
              >
                {item.stat}
              </div>
              <p className="text-slate-600 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex gap-2 items-center">
                Мои презентации
              </h3>
              <p className=" text-lg leading-relaxed mb-6">
                Многие из моих коллег используют мои презентаций, чему я ооочень
                рад. Я делал их простыми, наглядными и легко воспринимаемыми
                так, чтобы сложные вещи можно было объяснить понятно детям,
                подросткам и родителям.
              </p>
            </div>

            <div className="  rounded-2xl">
              <Swiper
                pagination={true}
                navigation={true}
                effect="card"
                modules={[Pagination, Navigation]}
                className="px-5  slider"
              >
                <SwiperSlide>
                  {' '}
                  <div className="aspect-video flex flex-col  rounded-lg gap-2 items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      loading="lazy"
                      src="https://www.canva.com/design/DAG3JyKlh58/rMN2IrSq98YdzqJ2DliImg/view?embed"
                      allowFullScreen
                      className="w-[90%] h-[80%] rounded-xl"
                    ></iframe>
                    <p className="text-slate-400 text-sm text-center">
                      Для пробных занятий по верстке
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="aspect-video  rounded-lg flex flex-col gap-2 items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      loading="lazy"
                      src="https://www.canva.com/design/DAGOCCeqpuo/lW1_dOy3OKce5XsL9RAeeA/view?embed"
                      className="w-[90%] h-[80%] rounded-xl"
                      allowFullScreen
                    ></iframe>
                    <p className="text-slate-400 text-sm text-center">
                      Для занятий на тему "Искусственный интеллект"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="aspect-video  rounded-lg flex flex-col gap-2 items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      loading="lazy"
                      src="https://www.canva.com/design/DAG4Lrw0OZ0/M8FQQNYKrgBLxV6HuaO_Cw/view?embed"
                      className="w-[90%] h-[80%] rounded-xl"
                      allowFullScreen
                    ></iframe>
                    <p className="text-slate-400 text-sm text-center">
                      Для занятий на тему "Инженерное мышление"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="aspect-video  rounded-lg flex flex-col gap-2 items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      loading="lazy"
                      src="https://www.canva.com/design/DAFa_6jpNhc/Rbz7EiNHiG-_o238wk3lOQ/view?embed"
                      className="w-[90%] h-[80%] rounded-xl"
                      allowFullScreen
                    ></iframe>
                    <p className="text-slate-400 text-sm text-center">
                      Для занятий на тему "Введение в JS" и "Введение в DOM"
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {' '}
                  <div className="aspect-video  rounded-lg flex flex-col gap-2 items-center justify-center mb-4 overflow-hidden">
                    <iframe
                      loading="lazy"
                      src="https://www.canva.com/design/DAGt4cSboUk/QO1Y9xb-Ur961ffdjcb0kA/view?embed"
                      className="w-[90%] h-[80%] rounded-xl"
                      allowFullScreen
                    ></iframe>
                    <p className="text-slate-400 text-sm text-center">
                      Для занятий на тему "Основы Операционной системы"
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className=" grid  grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-2  ">
            <h3 className="text-2xl md:text-3xl font-bold ">
              Моя программа обучения
            </h3>
            <p className="text-lg md:row-start-2 md:col-span-3 leading-relaxed ">
              До внедрения единой программы обучения, моя программа по верстке
              долгое время служила внутренним стандартом для менторов Codify.
              Сейчас она уже устарела, но в свое время была очень востребована
              среди менторов.
            </p>
            <div className=" md:col-span-2 border rounded-lg p-4 hover:shadow-lg transition-shadow max-h-[120px] md:max-h-full flex items-center gap-4 overflow-hidden">
              <a
                href="https://kanybekovmaksat.notion.site/ebd//087f7b2300054156844ef581a7d43f26"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center gap-4"
              >
                <img
                  src="https://www.notion.so/images/favicon.ico"
                  alt="Notion logo"
                  className="w-10 h-10 rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-blue-600 text-sm md:text-base">
                    Simple Frame
                  </p>
                  <p className="text-xs md:text-sm text-slate-600">
                    © Программа обучения для изучения технологий HTML, CSS.
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    kanybekovmaksat.notion.site/ebd/087f7b2300054156844ef581a7d43f26
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
