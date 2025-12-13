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


export default function Mems() {
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

  return (
    <section id="mems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Мемы
            </span>
          </h2>
<small className="text-slate-500">
  P.S.: Все мемы опубликованы исключительно в юмористических целях,
  не направлены на дискриминацию и не имеют цели кого-либо задеть.
</small>
        </div> 

        <div className="flex justify-between">
          <div className="min-w-[250px] max-w-[250px] h-[400px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <img
              src="https://s4.ezgif.com/tmp/ezgif-44615d347d6c1a94.gif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="max-w-[300px] h-[400px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <img
              src="https://s4.ezgif.com/tmp/ezgif-435c17321b8f29e6.gif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="max-w-[300px] h-[400px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <img
              src="https://s4.ezgif.com/tmp/ezgif-4ba3848715c8ea31.gif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="max-w-[300px] h-[400px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-4 text-white relative overflow-hidden">
            <img
              src="https://s4.ezgif.com/tmp/ezgif-4ba3848715c8ea31.gif"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
