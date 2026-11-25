import { BOOK_URL, heroHair } from '../data'

export function Hero() {
  return (
    <section className="hero" id="top" aria-label="РИМ — студия красоты">
      <div className="hero__stone" aria-hidden="true">
        <img
          className="hero__photo"
          src={heroHair}
          alt=""
          width={1600}
          height={2000}
        />
      </div>
      <div className="hero__content">
        <div className="plaque" role="img" aria-label="Логотип РИМ студия красоты">
          <div className="plaque__inner">
            <span className="plaque__mono">RS</span>
            <p className="plaque__word">РИМ</p>
            <span className="plaque__sub">студия красоты</span>
          </div>
        </div>

        <h1 className="hero__headline">Все дороги ведут сюда</h1>
        <p className="hero__meta">Окрашивание · Стрижка · Обучение · Красноуральск</p>

        <div className="hero__actions">
          <a className="btn" href={BOOK_URL} target="_blank" rel="noreferrer">
            Записаться
          </a>
          <a className="btn-link" href="#works">
            Смотреть работы →
          </a>
        </div>
      </div>
    </section>
  )
}
