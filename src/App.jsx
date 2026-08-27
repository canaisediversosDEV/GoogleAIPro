import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import StickyMobileCTA from './components/StickyMobileCTA'
import Footer from './components/Footer'
import { CHECKOUT, handleCheckout } from './utils/tracking'

function ExitIntentPopup() {
  const [visible, setVisible] = useState(false)
  const [fired, setFired] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (!fired && e.clientY <= 0) {
        setVisible(true)
        setFired(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [fired])

  if (!visible) return null

  return (
    <div className="exit-overlay" onClick={() => setVisible(false)}>
      <div className="exit-modal" onClick={e => e.stopPropagation()}>
        <button className="exit-close" onClick={() => setVisible(false)} aria-label="Fechar">&times;</button>

        <span className="exit-badge">⏳ ESPERA! Antes de ir embora…</span>

        <h3 className="exit-title">Que tal R$ 10,90?</h3>
        <p className="exit-desc">
          Só por sair agora, você pode garantir o Google AI Pro 18 Meses por um valor ainda menor. Essa oferta não aparece em nenhum outro lugar.
        </p>

        <div className="exit-price">
          <div className="exit-price-old">De: R$ 14,90</div>
          <div className="exit-price-new">Por apenas R$ 10,90</div>
        </div>

        <button
          className="btn exit-accept"
          onClick={() => handleCheckout(CHECKOUT.exitOffer, 'exit-10-90')}
        >
          🔥 Quero por R$ 10,90
        </button>

        <button className="exit-decline" onClick={() => setVisible(false)}>
          Não, prefiro perder essa oferta
        </button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </>
  )
}
