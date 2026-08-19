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
          {/* PLACEHOLDER — remover após adicionar o vídeo real (iframe do YouTube ou <video> local) */}
          <div className="hero__video-ph">
            <div className="hero__video-play">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="hero__video-ph-text">Demonstração do produto</p>
            <p className="hero__video-ph-hint">Adicione o vídeo em <code>Hero.jsx</code></p>
          </div>
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
