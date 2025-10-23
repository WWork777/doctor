import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Хедер прямо в Hero */}
      {/*<div className={styles.container1}>*/} 
        <div className={styles.container2}>
          <div className={styles.content}>
            <h1>
              Кирокосьян Марселла <br /> Артуровна
            </h1>
            <h2>
              Врач нейрохирург <br /> с огромным стажем работы
            </h2>
            <hr />
            <h3>
              Всю свою жизнь я занимаюсь
              <br /> лечением следующих заболеваний:
            </h3>
            <ul>
              <li>Инсульты</li>
              <li>
                Переломы и кровоизлияния, затрагивающие спинной и головной мозг
              </li>
              <li>Патологии периферической и центральной нервной системы</li>
              <li>Воспалительные процессы оболочек головного мозга</li>
              <li>Неврологические синдромы</li>
              <li>Дисфункции сосудов, расположенных в головном и спинном мозге</li>
              <li>Аневризмы</li>
              <li>Травмы спинного и головного мозга</li>
            </ul>
          </div>
        </div>
      <div className={styles.image}>
          <img src="/images/doctor.webp" alt="Врач" />
        </div>
      {/*</div>*/}
    </section>
  );
}
