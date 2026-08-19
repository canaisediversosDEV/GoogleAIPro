import './UpsellModal.css'

export default function UpsellModal({ type, onAccept, onDecline }) {
  if (!type) return null

  // Mapear os dados de acordo com a origem do clique
  const content = {
    monthly: {
      badge: '⚠️ ESPERE! VOCÊ VAI PAGAR MAIS CARO?',
      title: 'Por R$ 5 de diferença, você se livra da mensalidade.',
      desc: 'Essa diferença não paga nem um cafezinho. Faça um upgrade agora e leve o plano de 6 Meses com um desconto exclusivo.',
      oldPrice: 'R$ 19,90',
      newPrice: 'R$ 14,90',
      acceptText: '🚀 Sim, quero 6 meses (Recomendado)',
      declineText: 'Não, quero continuar pagando mensalidade',
    },
    main: {
      badge: '⚠️ OFERTA ÚNICA DE UPGRADE',
      title: 'Por apenas R$ 5 de diferença...',
      desc: 'Você garante acesso PREMIUM por 18 meses! Essa pequena diferença não paga nem um lanche. Vale muito a pena ficar com o Premium.',
      oldPrice: 'R$ 29,90',
      newPrice: 'R$ 24,90',
      acceptText: '🚀 Sim, quero Premium (Recomendado)',
      declineText: 'Não, quero ficar com o plano básico de 6 meses',
    }
  }

  const data = content[type]
  if (!data) return null

  return (
    <div className="upsell-overlay">
      <div className="upsell-modal">
        <button className="upsell__close" onClick={onDecline} aria-label="Fechar">&times;</button>
        <span className="upsell__badge">{data.badge}</span>
        <h3 className="upsell__title">{data.title}</h3>
        <p className="upsell__desc">{data.desc}</p>

        <div className="upsell__price">
          <div className="upsell__price-old">De: {data.oldPrice}</div>
          <div className="upsell__price-new">Por apenas {data.newPrice}</div>
        </div>

        <div className="upsell__actions">
          <button className="btn upsell__accept" onClick={onAccept}>
            {data.acceptText}
          </button>
          <button className="upsell__decline" onClick={onDecline}>
            {data.declineText}
          </button>
        </div>
      </div>
    </div>
  )
}
