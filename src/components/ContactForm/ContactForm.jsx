"use client";
import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot — если заполнен, молча выходим
    if (fd.get("website")) return;

    setStatus({ loading: true, ok: null, msg: "" });

    const payload = {
      name: fd.get("name")?.toString().trim(),
      email: fd.get("email")?.toString().trim(),
      message: fd.get("message")?.toString().trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Не удалось отправить");

      setStatus({ loading: false, ok: true, msg: "Спасибо! Сообщение отправлено." });
      form.reset();
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message || "Ошибка отправки" });
    }
  }

  return (
    <section id="consultation" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Узнайте второе докторское мнение у Марселлы Артуровны
        </h2>

        <div className={styles.grid}>
          <div className={styles.media} aria-hidden="true">
            <img src="/images/CntForm.png" alt="" />
          </div>

          <form className={styles.card} onSubmit={handleSubmit} noValidate>
            {/* honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
              aria-hidden="true"
            />

            <label className={styles.visuallyHidden} htmlFor="cf-name">Имя</label>
            <input id="cf-name" className={styles.input} type="text" name="name" placeholder="Имя" autoComplete="name" required />

            <label className={styles.visuallyHidden} htmlFor="cf-email">Почта</label>
            <input id="cf-email" className={styles.input} type="email" name="email" placeholder="Почта" autoComplete="email" required />

            <label className={styles.visuallyHidden} htmlFor="cf-msg">Комментарий</label>
            <textarea id="cf-msg" className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Комментарий" rows={4} />

            <p className={styles.note}>
              Нажимая «Получить консультацию», вы соглашаетесь с политикой обработки персональных данных
            </p>

            <button className={styles.button} type="submit" disabled={status.loading}>
              {status.loading ? "Отправляем..." : "Получить консультацию"}
            </button>

            {status.msg && (
              <div
                aria-live="polite"
                style={{ fontSize: 14, marginTop: 8, opacity: 0.95, color: status.ok ? "#d4f6da" : "#ffd6d6" }}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
