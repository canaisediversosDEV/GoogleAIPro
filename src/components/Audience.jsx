import './Audience.css'

const profiles = [
  { icon: '🎨', label: 'Cria conteúdo' },
  { icon: '📱', label: 'Trabalha com redes sociais' },
  { icon: '📈', label: 'Trabalha com marketing' },
  { icon: '💻', label: 'Programa' },
  { icon: '📚', label: 'Estuda' },
  { icon: '🎬', label: 'Cria vídeos' },
  { icon: '🧠', label: 'Faz pesquisas' },
  { icon: '💼', label: 'Tem um negócio' },
  { icon: '🚀', label: 'Trabalha em projetos pessoais' },
]

export default function Audience() {
  return (
    <section className="audience section section--light" id="audience">
      <div className="container">
        {/* Headline */}
        <p className="section-tag" style={{ color: '#4f8ef7', background: 'rgba(79,142,247,0.1)', border: '1px solid rgba(79,142,247,0.3)' }}>Para quem é?</p>
        <h2 className="audience__headline">
          Se você faz uma dessas coisas,<br />
          <em>presta atenção.</em>
        </h2>

        {/* Profiles */}
        <div className="audience__grid">
          {profiles.map((p) => (
            <div className="audience__card" key={p.label}>
              <span className="audience__icon">{p.icon}</span>
              <span className="audience__label">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div className="audience__footer">
          <p className="audience__footer-main">
            Você não precisa ser especialista.
          </p>
          <p className="audience__footer-sub">
            Você só precisa saber o que quer fazer.
          </p>
        </div>
      </div>
    </section>
  )
}
