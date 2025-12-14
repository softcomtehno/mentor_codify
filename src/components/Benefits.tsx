import { Code2, Lightbulb, Users, Briefcase, Award, Target, Gamepad2, Globe } from 'lucide-react';

export default function Benefits() {
  const mainBenefits = [
    {
      icon: Code2,
      title: 'Расширение методики PBL по HTML/CSS/JS.',
      description: 'Еще больше проектов и задач с реальным результатом для студентов',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Lightbulb,
      title: 'Повышение вовлеченности студентов',
      description: 'Создание интерактивных программ и мини-хакатонов внутри групп.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Поддержка новых менторов',
      description: 'Помощь в адаптации и обучении новых коллег, чтобы академия росла качественно.',
      color: 'from-cyan-500 to-blue-500',
    },
  ];



  return (
    <section className="bg-white py-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Планы на  {""}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              следующий год
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
    Моя цель — сделать обучение в Codify ещё более интересным, эффективным и полезным для студентов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-slate-200 hover:border-blue-300"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
