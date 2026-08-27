import './StickyMobileCTA.css'

export default function StickyMobileCTA() {
  return (
    <div className="scta scta--on">
      <div className="scta__inner">
        <div className="scta__text-block">
          <span className="scta__title">🔥 18 MESES</span>
          <span className="scta__price">R$ 14,90</span>
          <span className="scta__sub">PAGAMENTO ÚNICO</span>
        </div>
        <a
          href="#pricing"
          className="btn btn-primary scta__btn"
          id="scta-btn"
        >
          🔒 GARANTIR ACESSO
        </a>
      </div>
    </div>
  )
}
