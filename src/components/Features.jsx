import './Features.css'

const items = [
  { icon: '🤖', name: 'Gemini Pro' },
  { icon: '🎨', name: 'Gerar imagens' },
  { icon: '🎬', name: 'Gerar vídeos' },
  { icon: '📚', name: 'NotebookLM' },
  { icon: '🎥', name: 'Google Flow' },
  { icon: '💻', name: 'IA p/ código' },
  { icon: '☁️', name: '5 TB storage' },
  { icon: '✨', name: 'IA nos apps Google' },
]

export default function Features() {
  return (
    <section className="feat">
      <div className="c">
        <p className="feat__eyebrow">O que você acessa</p>
        <h2 className="feat__h2">
          Tudo em um ecossistema.
        </h2>

        <div className="feat__grid">
          {items.map(i => (
            <div className="feat__card" key={i.name}>
              <span className="feat__icon">{i.icon}</span>
              <span className="feat__name">{i.name}</span>
            </div>
          ))}
        </div>

        <p className="feat__note">Use o que fizer sentido para você.</p>
      </div>
    </section>
  )
}
