import styles from "./Header.module.scss";


export default function Header() {
  return (
    <div className={styles.container1}>
        <header className={styles.header}>
            <div className={styles.container2}>
                <nav className={styles.nav}>
                    <ul>
                    <li>
                        <a href="#about">Обо мне</a>
                    </li>
                    <li>
                        <a href="#reviews">Отзывы</a>
                    </li>
                    <li>
                        <a href="#consultation">Консультации</a>
                    </li>
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  );
}