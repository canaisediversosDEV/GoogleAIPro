import './Features.css'

const benefits = [
  { icon: '☁️', title: '5 TB de armazenamento total' },
  { icon: '🤖', title: 'Gemini 3.1 Pro' },
  { icon: '🎬', title: 'Veo 3.1 + Geração de Imagens' },
  { icon: '🧪', title: 'Google AI Studio' },
  { icon: '🎥', title: 'Google Flow' },
  { icon: '✨', title: 'Gemini no Gmail, Docs, Vids e outros apps' },
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
          {benefits.map(b => (
            <div className="feat__card" key={b.title}>
              <span className="feat__icon">{b.icon}</span>
              <span className="feat__title">{b.title}</span>
            </div>
          ))}
        </div>

        <p className="feat__note">Use o que fizer sentido para você.</p>
      </div>
    </section>
  )
}

