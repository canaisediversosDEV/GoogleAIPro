import './Testimonials.css'

const reviews = [
  {
    name: 'Mariana S.',
    role: 'Designer Freelancer',
    text: 'Uso o Gemini todo dia para criar textos e o Veo para gerar vídeos dos meus clientes. Valeu demais pelo preço que paguei.',
    stars: 5,
    initials: 'MS',
  },
  {
    name: 'Carlos R.',
    role: 'Empreendedor',
    text: 'Paguei uma única vez e esqueço. Sem mensalidade, sem surpresa no cartão. O Google Drive com 5 TB sozinho já justifica.',
    stars: 5,
    initials: 'CR',
  },
  {
    name: 'Juliana P.',
    role: 'Estudante de Marketing',
    text: 'O Gemini no Gmail e no Docs mudou minha rotina. Escrevo e-mails profissionais em segundos. Recomendo muito!',
    stars: 5,
    initials: 'JP',
  },
  {
    name: 'Fábio M.',
    role: 'Professor',
    text: 'Achei que seria complicado mas foi só comprar e acessar. O suporte foi rápido e o acesso chegou na hora.',
    stars: 5,
    initials: 'FM',
  },
  {
    name: 'Ana Lima',
    role: 'Criadora de Conteúdo',
    text: 'Gero roteiros com o Gemini e vídeos com o Veo 3.1. Meu canal cresceu depois que comecei a usar esse pacote.',
    stars: 5,
    initials: 'AL',
  },
  {
    name: 'Ricardo T.',
    role: 'Desenvolvedor',
    text: 'O Google AI Studio incluso é o diferencial. Acesso direto aos modelos mais recentes para testar prompts. Incrível.',
    stars: 5,
    initials: 'RT',
  },
]

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="c">
        <p className="testi__eyebrow">Depoimentos</p>
        <h2 className="testi__h2">Quem Já Comprou Recomenda!</h2>

        <div className="testi__grid">
          {reviews.map(r => (
            <div className="testi__card" key={r.name}>
              <div className="testi__stars">{'★'.repeat(r.stars)}</div>
              <p className="testi__text">"{r.text}"</p>
              <div className="testi__author">
                <div className="testi__avatar">{r.initials}</div>
                <div>
                  <div className="testi__name">{r.name}</div>
                  <div className="testi__role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
