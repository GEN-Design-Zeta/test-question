import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ApproachSection from './components/ApproachSection'
import ProofSection from './components/ProofSection'
import PlatformSection from './components/PlatformSection'
import TechSection from './components/TechSection'
import InsightsSection from './components/InsightsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  // Scroll-reveal system — runs once after mount.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('on', 'visible')
        }),
      { threshold: 0.07, rootMargin: '0px 0px -24px 0px' },
    )
    document.querySelectorAll('.rv, .reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <ApproachSection />
      <ProofSection />
      <PlatformSection />
      <TechSection />
      <InsightsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
