import './StickyMobileCTA.css'
import { useEffect, useState } from 'react'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 320)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className={`scta ${show ? 'scta--on' : ''}`} aria-hidden={!show}>
      <div className="scta__inner">
        <div>
          <p className="scta__title">🔥 6 meses — R$ 19,90</p>
          <p className="scta__sub">Pagamento único · Mais vendido</p>
        </div>
        <a
          href="#pricing"
          className="btn btn-primary scta__btn"
          id="scta-btn"
        >
          Quero agora
        </a>
      </div>
    </div>
  )
}
