import { Mail, Phone, MapPin, Dot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center text-xl font-bold  mb-4">
              Codify <Dot /> Maksat
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Моя цель — помогать студентом находить себя в технологиях и
              уверенно расти.
            </p>

            <p className="text-slate-500 text-sm mb-6">
              С 2023 года · Образование · Менторство 
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/maksat_kanybekov"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                target="_blank"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.999 15.199 9.8 19.4c.4 0 .6-.2.8-.4l2-1.8 4.199 3.1c.8.4 1.4.2 1.6-.8l2.899-13.6c.2-.9-.4-1.3-1.2-1l-17 6.5c-1 .4-1 .9-.2 1.1l4.3 1.3 9.9-6.2c.5-.3.9-.1.6.2L9.999 15.199z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#year" className="hover:text-white transition-colors">
                  2025
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-white transition-colors">
                  Мои планы
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#mems" className="hover:text-white transition-colors">
                  Мемы
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="mailto:maksatkanybekov2@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>maksatkanybekov2004@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+996708186699"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+996 552 07 79 70</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <span>7 микрорайон, Бишкек</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
