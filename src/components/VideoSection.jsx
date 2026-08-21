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
          <wistia-player media-id="5gsq306rrk" aspect="1.7712177121771218"></wistia-player>
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
