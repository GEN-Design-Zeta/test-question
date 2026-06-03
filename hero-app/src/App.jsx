import Hero from './components/Hero.jsx'
import LogoStrip from './components/sections/LogoStrip.jsx'
import Approach from './components/sections/Approach.jsx'
import Platforms from './components/sections/Platforms.jsx'
import CaseStudy from './components/sections/CaseStudy.jsx'
import Infrastructure from './components/sections/Infrastructure.jsx'
import Insights from './components/sections/Insights.jsx'
import CTASection from './components/sections/CTASection.jsx'
import Footer from './components/sections/Footer.jsx'

export default function App() {
  return (
    <main className="bg-[#070612]">
      <Hero />
      <LogoStrip />
      <Approach />
      <Platforms />
      <CaseStudy />
      <Infrastructure />
      <Insights />
      <CTASection />
      <Footer />
    </main>
  )
}
