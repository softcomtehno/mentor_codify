import { useState } from 'react'
import Hero from './components/Hero'
import ProblemInsight from './components/ProblemInsight'
import Benefits from './components/Benefits'
import Program from './components/Program'
import Testimonials from './components/Testimonials'
import Instructors from './components/Instructors'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import ApplicationForm from './components/ApplicationForm'
import Footer from './components/Footer'
import Mems from './components/Mems'

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const handleCTAClick = () => {
    setIsFormOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero onCTAClick={handleCTAClick} />
      <ProblemInsight />
      <Program />
      <Benefits />
      <Mems/>
      <Testimonials />
      {/* <Instructors /> */}
      <FAQ />
      <Footer />
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  )
}

export default App
