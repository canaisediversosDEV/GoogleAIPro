import './Pricing.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

const benefitGroups = [
  {
    icon: '☁️',
    title: '5 TB de armazenamento total',
    subs: [
      'Google Fotos, Drive e Gmail incluídos',
      'Compartilhamento com até 5 pessoas',
    ],
  },
  {
    icon: '🤖',
    title: 'Gemini 3.1 Pro',
    subs: [
      'A IA mais avançada do Google',
    ],
  },
  {
    icon: '🎬',
    title: 'Veo 3.1 + Geração de Imagens',
    subs: [
      'Crie vídeos com narração e áudio nativo',
      'Imagens originais geradas por IA',
    ],
  },
  {
    icon: '🧪',
    title: 'Google AI Studio',
    subs: [
      'Acesso direto aos modelos Gemini mais recentes',
      'Crie e teste prompts avançados sem limites',
    ],
  },
  {
    icon: '✨',
    title: 'Gemini nos apps Google',
    subs: [
      'IA no Gmail, Docs, Slides, Meet e Vids',
    ],
  },
]

function Benefits() {
  return (
    <ul className="price__benefits">
      {benefitGroups.map(b => (
        <li className="price__benefit" key={b.title}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="price__check"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          <div className="price__benefit-body">
            <span className="price__benefit-title">
              <span className="price__benefit-icon">{b.icon}</span>
              {b.title}
            </span>
            {b.subs.map(s => (
              <span className="price__benefit-sub" key={s}>{s}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Pricing() {
  return (
    <section className="price" id="pricing">
      <div className="c">
        <h2 className="price__h2">Garanta Seu Acesso Promocional</h2>
        <p className="price__sub">Pagamento Único — Sem mensalidades.</p>

        <div className="price__grid price__grid--single">

          {/* PLANO ÚNICO */}
          <div className="price__card price__card--hot" id="card-main">
            <span className="price__badge">🔥 ESGOTANDO — ÚLTIMAS UNIDADES</span>

            {/* Barra de Escassez / Progresso */}
            <div className="price__stock-bar">
              <div className="price__stock-info">
                <span className="price__stock-label">⚠️ Licenças promocionais restantes:</span>
                <span className="price__stock-count">14 de 100</span>
              </div>
              <div className="price__progress-track">
                <div className="price__progress-fill" />
              </div>
            </div>

            <div className="price__period">
              <span>Google AI Pro — 18 Meses</span>
            </div>
            <div className="price__amount">
              <span className="price__old">R$ 197,00</span>
              <span className="price__currency">R$</span>
              <span className="price__num">14,90</span>
            </div>
            <p className="price__desc">Acesso completo por 18 meses. Pagamento único, sem renovação automática.</p>

            <Benefits />

            <button
              className="btn btn-price btn-price--hot"
              id="price-btn-main"
              onClick={() => handleCheckout(CHECKOUT.main, '14-90')}
            >
              GARANTIR ACESSO — R$ 14,90
            </button>
          </div>

        </div>

        <div className="price__trust">
          <div className="price__trust-item">
            <span className="price__trust-icon">🔒</span>
            <span>Checkout Seguro Lowify</span>
          </div>
          <div className="price__trust-item">
            <span className="price__trust-icon">⚡</span>
            <span>Entrega Automática</span>
          </div>
          <div className="price__trust-item">
            <span className="price__trust-icon">💳</span>
            <span>Pagamento Único</span>
          </div>
        </div>

        {/* Selo de Garantia 7 Dias */}
        <div className="price__guarantee">
          <div className="price__guarantee-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34a853" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div className="price__guarantee-content">
            <h4 className="price__guarantee-title">Garantia Incondicional de 7 Dias</h4>
            <p className="price__guarantee-desc">
              Teste o <strong>Google AI Pro</strong> sem nenhum risco. Se por qualquer motivo você não ficar 100% satisfeito, devolvemos todo o seu dinheiro sem burocracia.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}


