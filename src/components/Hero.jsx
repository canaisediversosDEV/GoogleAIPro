import './Hero.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function Hero() {
  return (
    <section className="hero">

      <div className="c hero__body">

        <div className="hero__tag">
          <span className="hero__dot" />
          Google AI Pro
        </div>

        <h1 className="hero__h1">
          Acesse um <span className="text-gradient">ecossistema</span> oficial de inteligência artificial.
        </h1>

        <p className="hero__sub">
          Pare de pagar assinaturas isoladas. Tenha armazenamento em nuvem e acesso avançado ao Gemini em um só lugar.
        </p>

        {/* Pricing pills inline */}
        <div className="hero__pills">
          <a href="#pricing" className="hero__pill" id="hero-pill-6m">
            <span className="hero__pill-price">R$ 19,90</span>
            <span className="hero__pill-label">6 meses</span>
          </a>

          <a href="#pricing" className="hero__pill hero__pill--hot" id="hero-pill-18m">
            <span className="hero__pill-badge">Recomendado</span>
            <span className="hero__pill-price">R$ 29,90</span>
            <span className="hero__pill-label">18 meses</span>
          </a>
        </div>

        <a
          href="#pricing"
          className="btn btn-primary hero__cta"
          id="hero-cta"
        >
          🚀 Escolher meu plano
        </a>
      </div>
    </section>
  )
}
