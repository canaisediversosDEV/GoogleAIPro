import './Features.css'

const benefits = [
  {
    icon: '☁️',
    title: '5 TB de armazenamento total',
    items: [
      'Espaço de armazenamento para o Google Fotos, Drive e Gmail',
      'Compartilhamento com até cinco pessoas',
    ],
  },
  {
    icon: '🤖',
    title: 'Gemini 3.1 Pro',
    items: [
      'A IA mais avançada do Google',
    ],
  },
  {
    icon: '🎬',
    title: 'Nano Banana Pro + Veo 3.1',
    items: [
      'Envie imagens para o modelo do Veo mais recente e crie narrativas mais dinâmicas com a geração nativa de áudio',
      'Crie vídeos incríveis',
    ],
  },
  {
    icon: '🎥',
    title: 'Google Flow',
    items: [
      'Dê forma às suas ideias',
      'Crie sem limites',
      'Edite com confiança',
    ],
  },
  {
    icon: '✨',
    title: 'Gemini no Gmail, Docs, Vids e outros apps',
    items: [
      'Ajuda você a escrever no Gmail e no Docs',
      'Gera imagens originais no Slides',
      'Melhora a qualidade do vídeo no Meet',
      'Crie vídeos interessantes no Vids',
    ],
  },
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
              <div className="feat__card-header">
                <span className="feat__icon">{b.icon}</span>
                <span className="feat__title">{b.title}</span>
              </div>
              <ul className="feat__list">
                {b.items.map(item => (
                  <li className="feat__item" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="feat__note">Use o que fizer sentido para você.</p>
      </div>
    </section>
  )
}

