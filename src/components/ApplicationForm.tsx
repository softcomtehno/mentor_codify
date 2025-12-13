import { useState } from 'react';
import { X, Play } from 'lucide-react';
import HabibVideo from "../assets/habib.mp4"
import SuccessVideo from "../assets/success.mp4";

interface SupportFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationForm({ isOpen, onClose }: SupportFormProps) {
  const [videoOpened, setVideoOpened] = useState<'support' | 'other' | null>(null);
  const [finalChoice, setFinalChoice] = useState<'support' | null>(null);

  if (!isOpen) return null;

  const handleSupportClick = () => {
    setVideoOpened('support');
    setFinalChoice('support'); // фиксируем выбор навсегда
  };

  const handleOtherClick = () => {
    setVideoOpened('other'); // открываем видео, но выбор не фиксируем
  };

  const handleBackToChoice = () => {
    setVideoOpened(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-4">
        <div className="sticky top-0 bg-gradient-to-br from-slate-900 to-blue-900 text-white px-6 py-5 flex items-center justify-between rounded-t-3xl">
          <h2 className="text-2xl font-bold">Выбор кандидата</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          {videoOpened ? (
            <div className="text-center">
              <div className="aspect-video w-full mb-6 rounded-xl overflow-hidden bg-black">
                <img
                  src={
                    videoOpened === 'support'
                      ? '/success.gif'
                      : '/habib.gif'
                  }
                  className="w-full h-full"
                />
                 <video
                  src={
                    videoOpened === 'support'
                      ? SuccessVideo
                      : HabibVideo
                  }
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>

              {videoOpened === 'other' && !finalChoice && (
                <button
                  onClick={handleBackToChoice}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
                >
                  😱Я передумал, поддержу тебя
                </button>
              )}

              {videoOpened === 'support' && (
                <p className="text-slate-700 text-lg font-medium">
                 Спасибо за ваш выбор!💙
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button
                onClick={handleSupportClick}
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
              
                Обязательно тебя поддержу
              </button>

              <button
                onClick={handleOtherClick}
                className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white px-6 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
               
                У меня, к сожалению, другой кандидат
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
