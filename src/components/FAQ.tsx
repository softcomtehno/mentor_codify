import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

const faqs = [
  {
    question: 'Кто вы и чем занимаетесь в Codify?',
    answer:
      'Я работаю ментором в Codify с 2023 года. Веду подростковые группы, провожу пробные занятия и диагностики, готовлю студентов к проектной работе, Demo Day и хакатонам.',
  },
  {
    question: 'В чём особенность вашего подхода к обучению?',
    answer:
      'Я работаю по PBL-подходу — обучение через реальные проекты. Студенты не просто изучают темы, а создают сайты, продукты и презентуют результат, развивая уверенность и самостоятельность.',
  },
  {
    question: 'С какими студентами вы работаете?',
    answer:
      'В основном это дети и подростки. За это время через занятия и диагностики прошло несколько сотен учеников с разным уровнем подготовки — от полного нуля до продвинутых групп.',
  },
  {
    question: 'Какие результаты вы считаете самыми важными?',
    answer:
      'Рост уверенности студентов, первые публичные выступления на Demo Day, умение доводить проекты до результата и формирование реального портфолио ещё во время обучения.',
  },
  {
    question: 'Вносили ли вы вклад в развитие академии?',
    answer:
      'Да. Я участвовал в доработке учебных программ, создавал презентации и методические материалы, которые со временем начали использовать другие менторы Codify.',
  },
  {
    question: 'Почему вы участвуете в голосовании «Ментор года»?',
    answer:
      'Для меня это возможность показать результаты своей работы, поделиться подходом и подчеркнуть важность проектного обучения и менторства в развитии студентов.',
  },
];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Часто задаваемые{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              вопросы
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
           Коротко о моём подходе, опыте и работе в Codify
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-semibold text-lg text-slate-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-slate-700 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl font-bold mb-4"> Остались вопросы или хотите узнать больше?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
         Я открыт к диалогу — можно задать вопрос, уточнить детали
    или обсудить мой опыт и подход к обучению.
          </p>
          <a href='https://t.me/maksat_kanybekov' target='_blank' className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25">
           Задать вопрос
          </a>
        </div>
      </div>
    </section>
  );
}
