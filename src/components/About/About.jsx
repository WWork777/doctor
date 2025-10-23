"use client";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <div className={styles.eyebrow}>Обо мне</div>

            <p className={styles.lead}>
              Я врач старой закалки и мой взгляд на лечение очень консервативный
              и планомерный.
            </p>

            <hr />

            <p className={styles.p}>
              На протяжении долгих лет своей врачебной практики считаю своими
              самыми важными качествами умение разрабатывать план лечения
              заболеваний взрослых людей и тяжёлых состояний моих пациентов, с
              учётом их диагноза, возраста и клинической картины, в соответствии
              с действующими порядками оказания медицинской помощи, клиническими
              рекомендациями по вопросам оказания медицинской помощи,
              стандартами медицинской помощи, и для меня важным является
              правильное назначение лекарственных препаратов с учётом диагноза,
              возраста и клинической картины болезни, в том числе в соответствии
              с действующими клиническими рекомендациями и протоколами лечения.
            </p>

            <p className={styles.p2}>
              С 2024 года я нахожусь на заслуженном пенсионном отдыхе и
              продолжаю активно помогать молодым докторам, бесплатно
              супервизируя трудные случаи. Для меня это огромная радость и
              служение моей профессии, в которой я нахожусь всю свою жизнь.
            </p>
          </div>

          <div className={styles.pills} aria-hidden="true">
            <div className={styles.pill}>
              <img src="/images/about/1.png" alt="" loading="lazy" />
            </div>
            <div className={styles.pill}>
              <img src="/images/about/2.png" alt="" loading="lazy" />
            </div>
            <div className={styles.pill}>
              <img src="/images/about/3.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
