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
      photo: '/grad.jpg',
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
      photo: '/hackathon.jpg',
    },
    {
      number: 2,
      title: 'Работал на ДИАГНОСТИКАХ (Лето)',
      topics: [
        '~300 детей и подростков прошли диагностику навыков',
        '~170 студентов после диагностики поступили на курсы Codify',
      ],
      icon: Code,
      color: 'from-cyan-500 to-teal-500',
      photo: '/diag.jpg',
    },
    {
      number: 4,
      title: 'Event в Ololo (Июль)',
      topics: [
        'Представил Карту IT-профессий для родителей',
        'С ребятами создали свои первые сайты прямо на телефоне',
      ],
      icon: Atom,
      color: 'from-sky-500 to-sky-800',
      photo: '/ololo.jpg',
    },
    {
      number: 3,
      title: 'Пробные занятия (Ноябрь)',
      topics: [
        '5 часов — время, за которое дети с нуля, без знаний, создали свои первые сайты на пробных занятиях',
      ],
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500',
      photo: '/trial.jpg',
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
      photo: '/team.jpg',
    },
  ];

  const projects = [
    {
      title: 'Лендинг образовательного центра',
      description:
        'Одностраничный сайт с адаптивной версткой, современным дизайном и формой обратной связи',
      tech: ['HTML', 'CSS'],
    },
    {
      title: 'Интернет-магазин ресторана',
      description:
        'Онлайн-платформа для выбора блюд с меню и добавления блюда в меню',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Киносайт',
      description:
        'Приложение с каталогом фильмов, поиском и рейтингами на основе данных из публичного API',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      title: 'Стартап MVP',
      description:
        'Твой собственный fullstack-проект — от идеи до реализации и презентации продукта',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'MongoDB'],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              2025
            </span>{' '}
            <br />
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Мой результат работы за этот год:
          </p>
<small>P.S.:Некоторые картинки устарели, но содержание остаётся актуальным.</small>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {months.map((month, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-200 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${month.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <month.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {month.title}
                </h3>
              </div>

              <ul className="space-y-2">
                {month.topics.map((topic, topicIndex) => (
                  <li
                    key={topicIndex}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <img className="rounded-xl mt-2 w-full h-[200px] object-cover " src={month.photo} alt="" />
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white">
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
        </div>
      </div>
    </section>
  );
}
