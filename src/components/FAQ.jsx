import './FAQ.css'
import { useState } from 'react'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

const faqs = [
  {
    q: 'E se eu quiser começar pequeno?',
    a: 'Comece pelo plano mensal de R$ 9,90. Sem compromisso de longo prazo.',
  },
  {
    q: 'Quero pagar uma vez e esquecer.',
    a: 'O plano de 6 ou 18 meses funciona com pagamento único. Paga uma vez, acessa durante todo o período.',
  },
  {
    q: 'Quero o maior período disponível.',
    a: 'O plano de 18 meses é a opção de maior duração disponível.',
  },
  {
    q: 'Não sei qual plano escolher.',
    a: 'Se você quer testar, comece pelo mensal.\n\nSe quer pagamento único, escolha 6 ou 18 meses.\n\nSe quer o maior período pelo menor custo equivalente, escolha 18 meses.',
  },
  {
    q: 'Preciso usar todas as ferramentas?',
    a: 'Não. Use os recursos que fizerem sentido para suas necessidades. Não é obrigatório explorar tudo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq section section--dark" id="faq">
      <div className="container">
        <p className="section-tag">Ainda está pensando?</p>
        <h2 className="faq__headline">Dúvidas rápidas.</h2>

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
