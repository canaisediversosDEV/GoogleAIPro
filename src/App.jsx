import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
