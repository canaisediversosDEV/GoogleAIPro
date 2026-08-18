import { useState } from 'react'
import './Pricing.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'
import UpsellModal from './UpsellModal'

// O componente OnceTag foi removido pois a tag foi integrada diretamente no design do card.

function Benefits() {
  return (
    <ul className="price__benefits">
      <li className="price__benefit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <strong>5 TB</strong> de armazenamento total no Gmail, Fotos e Drive
      </li>
      <li className="price__benefit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Acesso ao <strong>Gemini 3 Pro</strong> Premium
      </li>
      <li className="price__benefit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Criação de <strong>Imagens e Vídeos</strong>
      </li>
      <li className="price__benefit">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        IA no Gmail, Docs e Planilhas
      </li>
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
      {/* Background glow */}
      <div className="price__glow" aria-hidden="true" />

      <div className="c">
        <h2 className="price__h2">Escolha seu acesso.</h2>
        <p className="price__sub">Você escolhe quanto quer pagar.</p>

        <div className="price__grid">

          {/* 6 MESES — LINHA DE FRENTE */}
          <div className="price__card" id="card-6m">
            <span className="price__period">BÁSICO</span>
            <div className="price__pricing-block">
              <span className="price__old">De R$ 97,00</span>
              <div className="price__num">
                R$ <strong>19,90</strong>
              </div>
              <span className="price__micro-tag">PAGAMENTO ÚNICO</span>
            </div>
            <Benefits />
            <button
              className="btn btn-price"
              id="price-btn-6m"
              onClick={handleSixMonthsClick}
            >
              🚀 ESCOLHER R$ 19,90
            </button>
          </div>

          {/* 18 MESES — MAIS VENDIDO / RECOMENDADO */}
          <div className="price__card price__card--hot" id="card-18m">
            <span className="price__badge">RECOMENDADO</span>
            <span className="price__period" style={{color:'#93c5fd', borderColor: 'rgba(147, 197, 253, 0.3)'}}>PREMIUM</span>
            
            <div className="price__pricing-block">
              <span className="price__old">De R$ 197,00</span>
              <div className="price__num price__num--big">
                R$ <strong>29,90</strong>
              </div>
              <span className="price__micro-tag">PAGAMENTO ÚNICO</span>
            </div>

            <Benefits />
            <button
              className="btn btn-price btn-price--hot"
              id="price-btn-18m"
              onClick={(e) => { e.preventDefault(); handleCheckout(CHECKOUT.eighteen, '18-meses') }}
            >
              🚀 ESCOLHER R$ 29,90
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
