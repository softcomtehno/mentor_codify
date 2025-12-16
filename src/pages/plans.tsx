const PlansPage = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      <h1 className="text-4xl py-20 md:text-5xl lg:text-6xl font-bold text-center leading-tight">
        Моя программа развития
      </h1>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6  pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-3xl  font-bold leading-tight">
              Полностью обновлю программу обучения по верстке
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Сделаю её более практичной, современной и ориентированной на
              реальные проекты и портфолио.
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>
          <div className=" relative">
            <div className="relative max-w-[370px] bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/b9/21/b4/b921b4eeeeefcf7f615b7a13510691a6.jpg"
                className="max-w-[full] rounded-md"
                alt=""
              />
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 r-md:-right-2">
                <div className="text-sm font-medium">новая программа</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6  pb-10 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative md:block hidden">
            <div className="relative max-w-[370px] bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/67/94/88/679488655c30b2b331ade2df468de355.jpg"
                className="max-w-[full] rounded-md"
                alt=""
              />
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 r-md:-right-2">
                <div className="text-sm font-medium">мини-хакатоны</div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="text-2xl md:text-3xl  font-bold leading-tight">
              Продумать формат мини-хакатонов внутри групп и между группами
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              Создам гайд и формат для проведения мини-хакатонов с четкими
              требованиями, дедлайнами и презентацией результатов — чтобы
              студенты учились работать в команде и доводить идеи до конца.(на этапе идеи)
            </p>
            <div className="flex flex-col sm:flex-row gap-4"></div>
          </div>
                    <div className="relative md:hidden block">
            <div className="relative max-w-[370px] bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/67/94/88/679488655c30b2b331ade2df468de355.jpg"
                className="max-w-[full] rounded-md"
                alt=""
              />
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3 r-md:-right-2">
                <div className="text-sm font-medium">мини-хакатоны</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
};

export default PlansPage;
