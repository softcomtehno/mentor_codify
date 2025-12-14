import { Quote, Star, Briefcase, TrendingUp, Send, User } from 'lucide-react';
import DanilImg from "../assets/danil.png"
import OrmonImg from "../assets/ormon.jpg"
export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ормон Мамбеткулов',
      role: 'Ментор по верстке',
      company: 'Асылташ',
      avatar: OrmonImg,
      text: 'Я попал в академию благодаря Максату: он присутствовал на моих первых занятиях и помогал с проведением занятий. Его подход к обучению прост и понятен, и он вдохновляет студентов на новые идеи. ',
      telegram: 'https://t.me/keorilan',
    },
    {
      name: 'Данил Петров',
      role: 'Ментор по JS',
      company: '7 микрорайон',
      avatar: DanilImg,
      text: 'Максат всегда, когда свободен, может подстраховать и провести занятие, если вы не сможете прийти. Помимо этого, я, как и многие, использую его презентации в работе.',
      telegram: 'https://t.me/Danny_dev_l',
    },
    {
      name: 'Руслан',
      role: 'Ментор по верстке',
      company: '7 микрорайон',
      avatar: '',
      text: 'При поступлении на работу Максат был человеком, который проверял мои навыки. Я сидел на его уроке, и он очень хорошо объяснял материал. Его наставничество помогает студентам достигать целей быстрее и увереннее. Я точно за него буду голосовать!',
      telegram: 'https://t.me/sorryi4got',
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Что говорят мои{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              коллеги
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Реальные отзывы о том, как я помогаю людям учиться, развиваться и
            достигать целей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                {testimonial.avatar === '' ? (
                  <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-black/80">
                    <User className="text-white" size={65} />
                  </div>
                ) : (
                  <img
                    src={testimonial.avatar}
                    className="w-[100px] h-[100px] rounded-full object-cover object-top"
                  />
                )}

                <div className="flex-1">
                  <h4 className="font-bold text-md text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-600">{testimonial.role}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
                <Quote className="w-8 h-8 text-blue-200" />
              </div>

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <a
                className="bg-sky-500 flex py-3 items-center justify-center text-white gap-2 font-bold rounded-2xl hover:bg-sky-600 transition-colors"
                href={testimonial.telegram}
                target="_blank"
              >
                <Send />
                Написать в Telegram
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
