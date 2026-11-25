import { ADDRESS, BOOK_URL, PHONE, PHONE_HREF } from '../data'

export function Booking() {
  return (
    <section className="booking" id="booking">
      <div className="wrap">
        <div className="booking__panel">
          <div>
            <p className="section-label">Запись</p>
            <h2 className="section-title">Запишитесь онлайн</h2>
            <p className="section-lead">
              Выберите услугу и время в YClients — или позвоните администратору.
            </p>

            <div className="booking__meta">
              <a href={PHONE_HREF}>{PHONE}</a>
              <span>{ADDRESS}</span>
            </div>
          </div>

          <div className="booking__side">
            <a className="btn" href={BOOK_URL} target="_blank" rel="noreferrer">
              Открыть запись
            </a>
            <p className="booking__note">
              Мастера: Римма Римская, Фируза Долганова. Рейтинг сообщества VK — 5,0.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
