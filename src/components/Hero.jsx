import './Hero.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function Hero() {
  return (
    <section className="hero">

      {/* ── Barra de Urgência no Topo ── */}
      <div className="hero__urgency-bar">
        <span className="hero__urgency-pulse" />
        <span>🔥 <strong>Últimas licenças disponíveis</strong> — Esta página pode sair do ar a qualquer momento</span>
      </div>

      <div className="c hero__body">

        <div className="hero__tag">
          <span className="hero__dot" />
          Google AI Pro — Oferta Exclusiva
        </div>

        <h1 className="hero__h1">
          Acesse a <span className="text-gradient">IA Mais Poderosa</span> do Google por 18 Meses
        </h1>

        <p className="hero__sub">
          Gemini Pro, 5TB de armazenamento, geração de vídeos e imagens com IA — tudo liberado no seu e-mail em minutos. Sem mensalidade, sem burocracia.
        </p>

        {/* ── Ancoragem de Preço no Hero ── */}
        <div className="hero__price-anchor">
          <span className="hero__price-old">De R$ 197,00</span>
          <span className="hero__price-arrow">→</span>
          <span className="hero__price-new">Por apenas <strong>R$ 14,90</strong></span>
          <span className="hero__price-badge">PAGAMENTO ÚNICO</span>
        </div>

        {/* ── CTA Principal → direto ao checkout ── */}
        <button
          className="btn btn-primary hero__cta"
          id="hero-cta"
          onClick={() => handleCheckout(CHECKOUT.main, 'hero-14-90')}
        >
          🔥 QUERO MEUS 18 MESES POR R$ 14,90
        </button>
        <p className="hero__micro">🔒 Pagamento seguro via PIX · Acesso imediato</p>

        {/* ────────────────────────────────────────────────
            SEÇÃO E MOLDURA DO VÍDEO
        ──────────────────────────────────────────────── */}
        <div className="hero__video-section">
          <div className="hero__video-header">
            <span className="hero__video-eyebrow">
              <span className="hero__video-pulse" />
              DEMONSTRAÇÃO EM VÍDEO
            </span>
            <h2 className="hero__video-title">
              Ativação do Plano <span className="text-gradient">na Prática</span>
            </h2>
            <p className="hero__video-subtitle">
              Veja em menos de 2 minutos como o acesso de 18 Meses ao Google AI Pro é liberado no seu e-mail.
            </p>
          </div>

          <div className="hero__video-card">
            {/* Top Bar / Moldura de App */}
            <div className="hero__video-bar">
              <div className="hero__video-dots">
                <span className="dot dot--red" />
                <span className="dot dot--yellow" />
                <span className="dot dot--green" />
              </div>
              <div className="hero__video-bar-title">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span>Ativação do Plano na Prática — Google AI Pro</span>
              </div>
              <div className="hero__video-badge">
                <span className="live-dot" />
                1080p HD
              </div>
            </div>

            {/* Container do Player */}
            <div className="hero__video-wrapper">
              <wistia-player media-id="5gsq306rrk" aspect="1.7712177121771218"></wistia-player>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
