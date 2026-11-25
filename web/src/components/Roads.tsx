import { roadStrips, roads } from '../data'

export function Roads() {
  return (
    <section className="roads" id="roads">
      <div className="wrap">
        <div className="roads__head">
          <p className="section-label">Дороги</p>
          <h2 className="section-title">Куда ведёт ваша дорога</h2>
          <p className="section-lead">
            Четыре направления студии — от кресла мастера до внутреннего обучения. Выберите свою.
          </p>
        </div>

        <div className="roads__track">
          {roads.map((road) => (
            <a className="road" key={road.id} href={road.href}>
              <span className="road__index">{road.index}</span>
              <h3 className="road__title">{road.title}</h3>
              <p className="road__text">{road.text}</p>
            </a>
          ))}
        </div>

        <div className="roads__strip" aria-hidden="true">
          {roadStrips.map((src) => (
            <figure key={src}>
              <img src={src} alt="" loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
