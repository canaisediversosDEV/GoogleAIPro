import './PainPoint.css'

const tools = [
  { task: 'Texto', icon: '✍️' },
  { task: 'Imagem', icon: '🎨' },
  { task: 'Vídeo', icon: '🎬' },
  { task: 'Pesquisa', icon: '🔍' },
  { task: 'Código', icon: '💻' },
  { task: 'Documentos', icon: '📄' },
]

const pains = [
  'Mais abas abertas',
  'Mais contas para criar',
  'Mais senhas para lembrar',
  'Mais ferramentas para aprender',
  'Mais mensalidades',
  'Mais tempo perdido',
]

export default function PainPoint() {
  return (
    <section className="pain section section--dark2" id="pain">
      <div className="container">
        {/* Headline */}
        <p className="section-tag">O problema</p>
        <h2 className="pain__headline">
          Quantas ferramentas você precisa<br />
          abrir para fazer <em>uma coisa simples?</em>
        </h2>

        {/* Tool grid */}
        <div className="pain__tools">
          {tools.map((t) => (
            <div className="pain__tool" key={t.task}>
              <span className="pain__tool-icon">{t.icon}</span>
              <span className="pain__tool-task">{t.task}</span>
              <span className="pain__tool-arrow">→</span>
              <span className="pain__tool-label">IA</span>
            </div>
          ))}
        </div>

        {/* Statement */}
        <p className="pain__statement">Uma ferramenta para cada coisa.</p>
        <p className="pain__sub">E no final, várias assinaturas.</p>

        {/* Pain list */}
        <ul className="pain__list">
          {pains.map((p) => (
            <li className="pain__item" key={p}>
              <span className="pain__item-icon">❌</span>
              {p}
            </li>
          ))}
        </ul>

        {/* Pivot */}
        <div className="pain__pivot">
          <div className="pain__pivot-line" aria-hidden="true" />
          <div className="pain__pivot-box">
            <p className="pain__pivot-question">
              E se você pudesse ter tudo isso<br />
              em um só ecossistema?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
