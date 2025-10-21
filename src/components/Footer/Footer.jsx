import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Навигация в футере">
          <a href="#about">Обо мне</a>
          <a href="#reviews">Отзывы</a>
          <a href="#consultation">Консультация</a>
        </nav>

        <div className={styles.meta}>
          <a href="/policy" className={styles.policy}>
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </footer>
  );
}
