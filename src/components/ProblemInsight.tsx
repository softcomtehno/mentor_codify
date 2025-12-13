import { AlertTriangle, TrendingDown, Brain, Zap } from 'lucide-react';
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
      icon: TrendingDown,
      stat: '47%',
      label: 'профессий исчезнут к 2030',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Zap,
      stat: '85%',
      label: 'компаний нанимают удаленно',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      stat: 'Сможете',
      label: 'создать собственный стартап',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Подход ментора
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Ментор {''}
            </span>
            <br /> — <br /> это не про уроки, а про развитие человека
          </h2>

          <p className="text-lg md:text-lg text-default-500 max-w-3xl mx-auto leading-relaxed">
            За годы работы в Codify я убедился: навыки быстро устаревают, а
            мышление, уверенность и умение доводить проекты до результата —
            остаются. Поэтому в своей работе я делаю упор не только на
            технологии, но и на развитие самостоятельности студентов.
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

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 flex gap-2 items-center">
                Мои презентации{' '}
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-slate-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Многие из моих презентаций со временем стали внутренним
                стандартом для менторов Codify. Я делал их простыми, наглядными
                и легко воспринимаемыми — так, чтобы сложные вещи можно было
                объяснить понятно детям, подросткам и родителям.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
              <Swiper
                pagination={true}
                navigation={true}
                effect="card"
                modules={[Pagination, Navigation]}
                className="px-5 pb-3"
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
      </div>
    </section>
  );
}
