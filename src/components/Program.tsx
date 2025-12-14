import {
  CheckCircle2,
  Code,
  Server,
  LayoutGrid as Layout,
  Lightbulb,
  Rocket,
  Users,
  Trophy,
  Atom,
  ServerCrash,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import GradImg from "../assets/grad.jpg"
import HackathonImg from "../assets/hackathon.jpg"
import DiagImg from "../assets/diag.jpg"
import OloloImg from "../assets/ololo.jpg"
import TrialImg from "../assets/trial.jpg"
import TeamImg from "../assets/team.jpg"


export default function Program() {
  const months = [
    {
      number: 1,
      title: 'Выпустил 8 групп(2025)',
      topics: [
        '115 студентов, обученных веб-разработке',
        'Сотни проектов, созданных студентами с нуля',
        '+8 Demo Day, проведённых для родителей и студентов',
      ],
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
      photo: GradImg,
    },
    {
      number: 5,
      title: 'Подготовил 3 свои группы на хакатон (Весна)',
      topics: [
        '10–15 проектов, защищённых подростками на хакатоне',
        'Некоторые их низ заняли призовые места',
      ],
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      photo: HackathonImg,
    },
    {
      number: 2,
      title: 'Работал на ДИАГНОСТИКАХ (Лето)',
      topics: [
        '~300 детей и подростков прошли диагностику',
        '~170 студентов после диагностики поступили на курсы Codify',
      ],
      icon: Code,
      color: 'from-cyan-500 to-teal-500',
      photo: DiagImg,
    },
    {
      number: 4,
      title: 'Event в Ololo (Июль)',
      topics: [
        'Представил Карту IT-профессий и нашу методику PBL для родителей.',
        'С ребятами создали свои первые сайты прямо на телефоне',
      ],
      icon: Atom,
      color: 'from-sky-500 to-sky-800',
      photo: OloloImg,
    },
    {
      number: 3,
      title: 'Пробные занятия (Ноябрь)',
      topics: [
        '5 часов — время, за которое дети с нуля, без знаний, создали свои первые сайты на пробных занятиях',
      ],
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500',
      photo: TrialImg,
    },

    {
      number: 5,
      title: 'Команда Менторов (2025)',
      topics: [
        'Участвовал в отборе 4 новых менторов',
        'Поддержка новых менторов в адаптации и старте работы',
      ],
      icon: Rocket,
      color: 'from-emerald-500 to-teal-500',
      photo: TeamImg,
    },
  ];



  return (
    <section>
      <div className="max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              2025
            </span>{' '}
            <br />
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Мой результат работы за этот год:
          </p>
          <small>
            P.S.:Некоторые картинки устарели, но содержание остаётся актуальным.
          </small>
        </div>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10 slider"
        >
          {months.map((month, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl p-6  transition-all border border-slate-200 group  flex flex-col h-full">
                <div className="flex items-center gap-3 min-h-[65px]">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${month.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <month.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {month.title}
                  </h3>
                </div>

                <ul className="space-y-2 mt-3 min-h-[150px] max-h-[150px]">
                  {month.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-start gap-2 text-sm text-slate-500 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <img
                  className="rounded-xl  w-full min-h-[200px] max-h-[200px] object-cover"
                  src={month.photo}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Примеры проектов моих студентов
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              За 2025 год мои студенты создали более 120 проектов — лендинги,
              сайты, мини-продукты. Каждый проект не только закрепляет навыки
              веб-разработки, но и формирует портфолио, которое можно показать
              работодателям или использовать для старта собственных идей.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
              >
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
