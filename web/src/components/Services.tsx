import { services } from '../data'

export function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <p className="section-label">Процедуры</p>
        <h2 className="section-title">Что делаем в студии</h2>
        <p className="section-lead">
          Коротко по направлениям — детали и длительность уточним при записи.
        </p>

        <ul className="services__list">
          {services.map((item) => (
            <li className="services__item" key={item.name}>
              <h3 className="services__name">{item.name}</h3>
              <p className="services__desc">{item.desc}</p>
              <span className="services__tag">{item.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
