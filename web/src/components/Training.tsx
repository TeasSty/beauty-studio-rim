import { trainPhoto, VK_URL } from '../data'

export function Training() {
  return (
    <section className="training" id="training">
      <div className="wrap training__layout">
        <div>
          <p className="section-label">Обучение</p>
          <h2 className="section-title">Фира про волосы — и про тех, кто учится</h2>
          <p className="section-lead">
            Внутри студии идёт постоянный учебный процесс: базовые стрижки, семинары по окрашиванию
            и подбору цвета, набор моделей. Авторский подход — без пафоса, с юмором и практикой.
          </p>

          <ul className="training__points">
            <li>Семинары по базовым окрашиваниям и подбору цвета</li>
            <li>Практика на моделях — открытые наборы в VK</li>
            <li>Обучение парикмахерскому делу и курс «Сам себе визажист»</li>
          </ul>

          <div className="training__actions">
            <a className="btn-link" href={VK_URL} target="_blank" rel="noreferrer">
              Актуальные наборы в VK →
            </a>
          </div>
        </div>

        <figure className="training__visual">
          <img
            src={trainPhoto}
            alt="Работа мастера в студии — практика и обучение"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  )
}
