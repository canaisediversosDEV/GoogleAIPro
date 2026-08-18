import './FinalCTA.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function FinalCTA() {
  return (
    <section className="final-cta section" id="final-cta">
      {/* Background */}
      <div className="final-cta__bg" aria-hidden="true">
        <div className="final-cta__glow final-cta__glow--1" />
        <div className="final-cta__glow final-cta__glow--2" />
      </div>

      <div className="container final-cta__inner">
        {/* Headline */}
        <h2 className="final-cta__headline">
          Sua próxima ferramenta de IA<br />
          <span className="gradient-text">pode estar a um clique.</span>
        </h2>
        <p className="final-cta__sub">
          Escolha seu plano e vá direto para a ativação.
        </p>

        {/* Main CTA — 18 meses */}
        <div className="final-cta__main">
          <div className="final-cta__price-display">
            <span className="final-cta__price-label">18 meses · Pagamento único</span>
            <span className="final-cta__price-value">R$ 24,90</span>
            <span className="final-cta__price-equiv">≈ R$ 1,38/mês no equivalente</span>
          </div>

          <a
            href={CHECKOUT.eighteen}
            className="btn btn-primary btn-xl final-cta__btn-main"
            id="final-cta-btn-18m"
            onClick={(e) => { e.preventDefault(); handleCheckout(CHECKOUT.eighteen, '18-meses') }}
          >
            🚀 Quero meu acesso por R$ 24,90
          </a>
          <p className="final-cta__microcopy">Pagamento seguro. Você será direcionado ao checkout.</p>
        </div>

        {/* Divider */}
        <div className="final-cta__divider">
          <span>Prefere começar menor?</span>
        </div>

        {/* Secondary CTAs */}
        <div className="final-cta__secondary">
          <a
            href={CHECKOUT.sixMonths}
            className="btn btn-secondary final-cta__btn-secondary"
            id="final-cta-btn-6m"
            onClick={(e) => { e.preventDefault(); handleCheckout(CHECKOUT.sixMonths, '6-meses') }}
          >
            R$ 19,90 — 6 meses
          </a>
          <a
            href={CHECKOUT.monthly}
            className="btn btn-secondary final-cta__btn-secondary"
            id="final-cta-btn-monthly"
            onClick={(e) => { e.preventDefault(); handleCheckout(CHECKOUT.monthly, 'mensal') }}
          >
            R$ 9,90 — Mensal
          </a>
        </div>

        <p className="final-cta__secondary-microcopy">Escolha seu plano e finalize.</p>
      </div>
    </section>
  )
}
