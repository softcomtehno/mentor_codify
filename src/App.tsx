import { useState } from 'react';
import Hero from './components/Hero';
import ProblemInsight from './components/ProblemInsight';
import Benefits from './components/Benefits';
import Program from './components/Program';
import Testimonials from './components/Testimonials';
import Instructors from './components/Instructors';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import VideoMeme from './components/Mems';
import ConorVideo from './assets/conor.mp4';
import PlakiVideo from './assets/plaki.mp4';
import AAVideo from './assets/aaa.mp4';
import SuccessVideo from './assets/success_2.mp4';
import SearchVideo from './assets/search.mp4';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCTAClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero onCTAClick={handleCTAClick} />
      <Program />
      <VideoMeme
        videoSrc={ConorVideo}
        text="Это я, пытаясь объяснить, почему я заслуживаю звания 'Ментор года'"
      />
      <ProblemInsight />
      <VideoMeme
        videoSrc={SearchVideo}
        text="Как я искал материал, для этого сайта "
      />
      <Benefits />
      <VideoMeme
        videoSrc={SuccessVideo}
        text="Вот так мы радуемся, когда вы делаете правильный выбор"
      />
      <Testimonials />
      <VideoMeme
        videoSrc={PlakiVideo}
        text="Я ночью, если проиграю в голосовании "
      />
      <Footer />
      <VideoMeme
        videoSrc={AAVideo}
        text="Ваши эмоции, когда мой сайт убедил вас выбрать меня"
      />
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
}

export default App;
