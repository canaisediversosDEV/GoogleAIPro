import './StickyMobileCTA.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function StickyMobileCTA() {
  return (
    <div className="scta scta--on">
      <div className="scta__inner">
        <div className="scta__text-block">
          <span className="scta__title">🔥 18 MESES</span>
          <span className="scta__price">R$ 14,90</span>
          <span className="scta__sub">PAGAMENTO ÚNICO</span>
        </div>
        <button
          className="btn btn-primary scta__btn"
          id="scta-btn"
          onClick={() => handleCheckout(CHECKOUT.main, 'sticky-14-90')}
        >
          🔒 GARANTIR AGORA
        </button>
      </div>
    </div>
  )
}
