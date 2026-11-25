import { useState } from 'react'
import { BOOK_URL } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className={`header${open ? ' is-open' : ''}`}>
      <div className="header__inner">
        <a className="header__brand" href="#top" onClick={close}>
          РИМ
        </a>

        <button
          className="header__menu"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className="header__nav" aria-label="Основная навигация">
          <a href="#roads" onClick={close}>
            Услуги
          </a>
          <a href="#works" onClick={close}>
            Работы
          </a>
          <a href="#training" onClick={close}>
            Обучение
          </a>
          <a className="header__cta" href={BOOK_URL} target="_blank" rel="noreferrer" onClick={close}>
            Запись
          </a>
        </nav>
      </div>
    </header>
  )
}
