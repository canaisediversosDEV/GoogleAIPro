import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Features from './components/Features'
import Pricing from './components/Pricing'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <VideoSection />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
