import { works } from '../data'

export function Works() {
  return (
    <section className="works" id="works">
      <div className="wrap">
        <p className="section-label">Работы</p>
        <h2 className="section-title">Портфолио с кресла</h2>
        <p className="section-lead">
          Реальные результаты студии: цвет, форма и финиш. Больше кадров — в сообществе VK.
        </p>

        <div className="works__grid">
          {works.map((item) => (
            <figure
              key={item.src + item.label}
              className={`works__item${item.tall ? ' works__item--tall' : ''}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
