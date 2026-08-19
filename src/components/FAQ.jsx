import './FAQ.css'
import { useState } from 'react'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

const faqs = [
  {
    q: 'Existe mensalidade?',
    a: 'Não! O pagamento é único e você terá o plano por 18 meses. Paga uma vez, usa à vontade.',
  },
  {
    q: 'Precisa colocar cartão de crédito?',
    a: 'Não precisa não. Você pode pagar pelo Pix mesmo, na hora, sem cadastrar cartão em lugar nenhum.',
  },
  {
    q: 'Como recebo o acesso após a compra?',
    a: 'Na hora! Assim que o pagamento cair, chega um e-mail com tudo que você precisa para acessar. Nada de esperar dias.',
  },
  {
    q: 'É seguro comprar aqui?',
    a: 'Sim, pode ficar tranquilo. O checkout é da Lowify, que é uma plataforma segura e bem estabelecida no mercado. Seus dados ficam protegidos.',
  },
  {
    q: 'Preciso usar todas as ferramentas?',
    a: 'Claro que não! Usa o que fizer sentido pra você. Tem gente que usa só o Drive e já considera que valeu. Outros usam tudo. Você decide.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Funciona sim. No celular, no tablet, no computador. Onde você estiver, tá disponível.',
  },
  {
    q: 'O que acontece quando o período acaba?',
    a: 'Nada automático, pode ficar tranquilo. Quando chegar perto do fim, você decide se quer renovar. Não tem cobrança surpresa.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq section section--dark" id="faq">
      <div className="container">
        <p className="section-tag">Tira-Dúvidas</p>
        <h2 className="faq__headline">Perguntas Frequentes</h2>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div
              className={`faq__item ${open === i ? 'faq__item--open' : ''}`}
              key={i}
            >
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-item-${i}`}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <span className="faq__chevron" aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="faq__answer">
                  {item.a.split('\n\n').map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decision helper */}
        <div className="faq__decision">
          <h3 className="faq__decision-headline">
            Você não precisa decidir muita coisa.
          </h3>
          <p className="faq__decision-sub">Você só precisa escolher:</p>

          <div className="faq__options">
            <button
              className="faq__option"
              onClick={() => handleCheckout(CHECKOUT.monthly, 'mensal')}
              id="faq-btn-monthly"
            >
              <span className="faq__option-price">R$ 9,90</span>
              <span className="faq__option-label">/mês</span>
            </button>
            <span className="faq__option-or">ou</span>
            <button
              className="faq__option"
              onClick={() => handleCheckout(CHECKOUT.sixMonths, '6-meses')}
              id="faq-btn-6m"
            >
              <span className="faq__option-price">R$ 19,90</span>
              <span className="faq__option-label">6 meses</span>
            </button>
            <span className="faq__option-or">ou</span>
            <button
              className="faq__option faq__option--featured"
              onClick={() => handleCheckout(CHECKOUT.eighteen, '18-meses')}
              id="faq-btn-18m"
            >
              <span className="faq__option-price">R$ 24,90</span>
              <span className="faq__option-label">18 meses</span>
            </button>
          </div>

          <p className="faq__decision-cta">
            E clicar.
          </p>
        </div>
      </div>
    </section>
  )
}
