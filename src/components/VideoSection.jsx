import './VideoSection.css'
import { CHECKOUT, handleCheckout } from '../utils/tracking'

export default function VideoSection() {
  return (
    <section className="vid">
      <div className="c">

        <p className="vid__eyebrow">Veja funcionando</p>
        <h2 className="vid__h2">
          Menos de 2 minutos.<br />
          <span className="gradient-text">Você vai entender tudo.</span>
        </h2>

        {/* ────────────────────────────────────────────────
            PLACEHOLDER — substituir pelo vídeo real:

            OPÇÃO A (arquivo local):
              Coloque o vídeo em /public/demo.mp4
              Descomente <source> abaixo
              Remova o div.vid__ph

            OPÇÃO B (YouTube/Vimeo):
              Descomente o <iframe> abaixo
              Substitua SEU_ID pelo ID do vídeo
              Remova o div.vid__ph
        ──────────────────────────────────────────────── */}

        <div className="vid__frame">

          {/* Arquivo local — descomente quando tiver o vídeo */}
          {/*
          <video controls preload="none" poster="/poster.jpg">
            <source src="/demo.mp4" type="video/mp4" />
          </video>
          */}

          {/* YouTube — descomente e preencha SEU_ID */}
          {/*
          <iframe
            src="https://www.youtube.com/embed/SEU_ID?rel=0"
            title="Demonstração Google AI Pro"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
          */}

          {/* PLACEHOLDER — remover após adicionar o vídeo */}
          <div className="vid__ph">
            <div className="vid__play">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <p className="vid__ph-text">Demonstração do produto</p>
            <p className="vid__ph-hint">Adicione o vídeo em <code>VideoSection.jsx</code></p>
          </div>

        </div>

        <div className="vid__cta-wrap">
          <a
            href={CHECKOUT.eighteen}
            className="btn btn-primary"
            id="vid-cta"
            onClick={e => { e.preventDefault(); handleCheckout(CHECKOUT.eighteen, '18-meses') }}
          >
            Quero meu acesso agora
          </a>
        </div>

      </div>
    </section>
  )
}
