import { Code2, Lightbulb, Users, Briefcase, Award, Target, Gamepad2, Globe } from 'lucide-react';

export default function Benefits() {
  const mainBenefits = [
    {
      icon: Code2,
      title: 'Расширение методики PBL по HTML/CSS/JS.',
      description: 'Ещё больше проектов и задач с реальным результатом для студентов',
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

  const additionalBenefits = [
    {
      icon: Globe,
      label: 'Новые презентации',
    },
    {
      icon: Users,
      label: 'Наставничество',
    },
    {
      icon: Gamepad2,
      label: 'Новые кахуты',
    },
    {
      icon: Award,
      label: 'Больше',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32">
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
{/* 
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            И это еще не все
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-slate-900" />
                </div>
                <p className="text-white font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                8 месяцев
              </div>
              <p className="text-slate-600 font-medium">Интенсивного обучения</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                200+ часов
              </div>
              <p className="text-slate-600 font-medium">Практики и проектов</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                24/7
              </div>
              <p className="text-slate-600 font-medium">Поддержка сообщества</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
