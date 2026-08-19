import { useState } from 'react'
import './Pricing.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'
import UpsellModal from './UpsellModal'

// O componente OnceTag foi removido pois a tag foi integrada diretamente no design do card.

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
  const [upsellType, setUpsellType] = useState(null)

  // Função para interceptar o clique no plano de 6 meses
  const handleSixMonthsClick = (e) => {
    e.preventDefault()
    setUpsellType('main')
  }

  // Função para processar o aceite do Upsell
  const handleUpsellAccept = () => {
    // Upsell do 6 meses: 18 meses por 24,90
    handleCheckout('https://pay.lowify.com.br/go.php?offer=pej40yu', 'upsell_24_90')
  }

  // Função para processar a recusa do Upsell (redireciona pro original)
  const handleUpsellDecline = () => {
    handleCheckout(CHECKOUT.sixMonths, '6-meses')
  }

  return (
    <section className="price" id="pricing">
      <div className="c">
        <h2 className="price__h2">Escolha seu acesso.</h2>
        <p className="price__sub">Você escolhe quanto quer pagar.</p>

        <div className="price__grid">

          {/* 6 MESES — LINHA DE FRENTE */}
          <div className="price__card" id="card-6m">
            <div className="price__period">
              <span>Plano Básico (6 Meses)</span>
            </div>
            <div className="price__amount">
              <span className="price__old">R$ 97,00</span>
              <span className="price__currency">R$</span>
              <span className="price__num">19,90</span>
            </div>
            <p className="price__desc">Ideal para quem quer experimentar o ecossistema com pagamento único acessível.</p>

            <Benefits />
            
            <button
              className="btn btn-price"
              id="price-btn-6m"
              onClick={handleSixMonthsClick}
            >
              ESCOLHER R$ 19,90
            </button>
          </div>

          {/* 18 MESES — MAIS VENDIDO / RECOMENDADO */}
          <div className="price__card price__card--hot">
            <span className="price__badge">Selo Google AI Pro</span>
            <div className="price__period">
              <span>Plano Premium (18 Meses)</span>
            </div>
            <div className="price__amount">
              <span className="price__old">R$ 197,00</span>
              <span className="price__currency">R$</span>
              <span className="price__num">29,90</span>
            </div>
            <p className="price__desc">Maior custo-benefício. Acesso estendido aos apps da nuvem do Google com todas as atualizações.</p>

            <Benefits />
            
            <button
              className="btn btn-price btn-price--hot"
              id="price-btn-18m"
              onClick={(e) => { e.preventDefault(); handleCheckout(CHECKOUT.eighteen, '18-meses') }}
            >
              ESCOLHER R$ 29,90
            </button>
          </div>

        </div>

        <p className="price__micro">Pagamento seguro. Você será direcionado ao checkout.</p>

      </div>

      <UpsellModal 
        type={upsellType} 
        onAccept={handleUpsellAccept} 
        onDecline={handleUpsellDecline} 
      />
    </section>
  )
}
