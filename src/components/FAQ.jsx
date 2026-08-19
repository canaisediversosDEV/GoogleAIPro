import './FAQ.css'
import { useState } from 'react'

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
    a: 'Sim, pode ficar tranquilo. O checkout é da Lowify, uma plataforma segura e bem estabelecida no mercado. Seus dados ficam protegidos.',
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

const ChevronIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18" height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`faq__chevron-svg${open ? ' faq__chevron-svg--open' : ''}`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="c">
        <p className="faq__eyebrow">Tira-Dúvidas</p>
        <h2 className="faq__h2">Perguntas Frequentes</h2>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div className="faq__card" key={i}>
              <button
                className="faq__question"
                onClick={() => setOpen(open === i ? null : i)}
                id={`faq-item-${i}`}
                aria-expanded={open === i}
              >
                <span>{item.q}</span>
                <ChevronIcon open={open === i} />
              </button>
              {open === i && (
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


