import { BOOK_URL, PHONE_HREF, VK_URL } from '../data'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div>
          <div className="footer__brand">РИМ</div>
          <p className="footer__copy">Студия красоты · Фира про Волосы · Красноуральск</p>
        </div>
        <div className="footer__links">
          <a href={VK_URL} target="_blank" rel="noreferrer">
            VK
          </a>
          <a href={BOOK_URL} target="_blank" rel="noreferrer">
            YClients
          </a>
          <a href={PHONE_HREF}>Позвонить</a>
        </div>
      </div>
    </footer>
  )
}
