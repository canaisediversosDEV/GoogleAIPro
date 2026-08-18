import './Simplicity.css'

const steps = [
  { input: '"Quero criar uma imagem de um pôr do sol futurista."', output: 'Imagem gerada em segundos.' },
  { input: '"Agora transforme em um vídeo curto."', output: 'Vídeo criado a partir da imagem.' },
  { input: '"Melhore a composição e ajuste as cores."', output: 'Versão refinada disponível.' },
  { input: '"Analise este documento e resuma os pontos principais."', output: 'Resumo com insights gerado.' },
]

export default function Simplicity() {
  return (
    <section className="simplicity section section--dark" id="simplicity">
      <div className="container">
        {/* Headline */}
        <p className="section-tag">Não sabe usar IA?</p>
        <h2 className="simplicity__headline">
          Sem problema.
        </h2>
        <p className="simplicity__sub">
          A interação pode começar com linguagem natural.
          Sem precisar aprender programação para explorar a maioria dos recursos.
        </p>

        {/* Steps */}
        <div className="simplicity__steps">
          {steps.map((s, i) => (
            <div className="simplicity__step" key={i}>
              {/* Input */}
              <div className="simplicity__bubble simplicity__bubble--user">
                <span className="simplicity__bubble-label">Você digita</span>
                <p className="simplicity__bubble-text">{s.input}</p>
              </div>

              {/* Arrow */}
              <div className="simplicity__arrow" aria-hidden="true">↓</div>

              {/* Output */}
              <div className="simplicity__bubble simplicity__bubble--ai">
                <span className="simplicity__bubble-label">IA responde</span>
                <p className="simplicity__bubble-text">{s.output}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="simplicity__step-arrow" aria-hidden="true">↓</div>
              )}
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="simplicity__note">
          <p>
            Você não precisa aprender programação para começar a explorar várias dessas ferramentas.
          </p>
          <p className="simplicity__note-small">
            Alguns recursos específicos podem exigir configurações adicionais, mas a maioria funciona com linguagem natural.
          </p>
        </div>
      </div>
    </section>
  )
}
