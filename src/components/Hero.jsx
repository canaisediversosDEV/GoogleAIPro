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
          GOOGLE IA PRO <span className="text-gradient">18 MESES</span> NO SEU EMAIL
        </h1>

        <p className="hero__sub">
          Pare de pagar assinaturas isoladas. Tenha armazenamento em nuvem e acesso avançado ao Gemini em um só lugar.
        </p>

        {/* ────────────────────────────────────────────────
            PLACEHOLDER DO VÍDEO
        ──────────────────────────────────────────────── */}
        <div className="hero__video-wrapper">
          <wistia-player media-id="5gsq306rrk" aspect="1.7712177121771218"></wistia-player>
        </div>

        <a
          href="#pricing"
          className="btn btn-primary hero__cta"
          id="hero-cta"
        >
          🔥 QUERO GARANTIR MEU ACESSO
        </a>
      </div>
    </section>
  )
}
