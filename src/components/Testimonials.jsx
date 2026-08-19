import './Testimonials.css'

const reviewImages = [
  'https://i.imgur.com/TbvtujW.png',
  'https://i.imgur.com/rIagcLE.png',
  'https://i.imgur.com/6seQHbX.png',
  'https://i.imgur.com/x6YB2P7.png'
]

export default function Testimonials() {
  return (
    <section className="testi">
      <div className="c">
        <p className="testi__eyebrow">Depoimentos</p>
        <h2 className="testi__h2">Quem Já Comprou Recomenda!</h2>

        <div className="testi__grid">
          {reviewImages.map((src, i) => (
            <div className="testi__image-wrapper" key={i}>
              <img src={src} alt={`Depoimento de cliente ${i+1}`} className="testi__image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
