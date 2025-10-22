import styles from './Support.module.scss';

export default function Support() {
  return (
    <section className={styles.familySection}>
      <div className={styles.background}></div> {/* фиксированный фон */}
      <div className={styles.overlay}>
        <p>
          Главной опорой моей жизни являются мой муж, дети и три прекрасных внука.
          <br />
          Я счастливая жена, мама и бабушка. Благодаря моей семье я стала хорошим
          специалистом, и позвольте мне немного рассказать о моём профессиональном пути.
        </p>
      </div>
    </section>
  );
}
