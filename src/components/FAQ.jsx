import './FAQ.css'
import { useState } from 'react'

const faqs = [
  {
    q: 'Por que o valor é tão baixo? É golpe?',
    a: 'Não. Nós adquirimos um lote gigantesco de licenças corporativas (Enterprise) diretamente com fornecedores em volume. Estamos repassando as licenças não utilizadas pelo preço de custo promocional para fechar o lote.',
  },
  {
    q: 'Vou precisar passar a senha do meu Gmail?',
    a: 'De forma alguma! Você NÃO precisa informar sua senha. O upgrade é feito através de um link de convite oficial enviado para o seu e-mail. Seus arquivos continuam 100% privados e criptografados, apenas você tem acesso.',
  },
  {
    q: 'Existe mensalidade?',
    a: 'Não! O pagamento é único e você terá o plano por 18 meses. Paga uma vez, usa à vontade.',
  },
  {
    q: 'Como posso pagar?',
    a: 'O pagamento é feito exclusivamente via PIX. A aprovação é imediata, segura e você não precisa cadastrar cartão de crédito ou dados bancários em lugar nenhum.',
  },
  {
    q: 'Como recebo o acesso após a compra?',
    a: 'Na hora! Assim que o pagamento via Pix for confirmado, você receberá um e-mail automático com o link de ativação imediata.',
  },
  {
    q: 'É seguro comprar aqui?',
    a: 'Sim, totalmente seguro. O checkout é processado pela Lowify, uma das plataformas mais seguras do Brasil. Seus dados ficam protegidos com criptografia militar.',
  },
  {
    q: 'Preciso usar todas as ferramentas?',
    a: 'Claro que não! Use o que fizer sentido para você. Há quem use apenas o Drive de 5TB e já considere que valeu a pena. Outros usam só o Gemini. Você decide.',
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


