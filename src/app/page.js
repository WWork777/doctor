import Hero from '@/components/Hero/Hero';
import Support from '@/components/Support/Support';
import About from '@/components/About/About';
import Team from '@/components/Team/Team';
import Reviews from '@/components/Reviews/Reviews';
import ContactForm from '@/components/ContactForm/ContactForm';

export const metadata = {
  title: "Кирокосьян Марселла Артуровна — Врач нейрохирург",
  description:
    "Кирокосьян Марселла Артуровна - врач нейрохирург с огромным стажем. Консультации и второе врачебное мнение по инсультам, травмам мозга, аневризмам и заболеваниям нервной системы.",
  alternates: {
    canonical: "https://doctor-kirokosyan.ru", // ← замените на реальный домен
  },
  keywords: [
    "нейрохирург",
    "второе врачебное мнение",
    "консультация нейрохирурга",
    "Марселла Артуровна",
    "врач нейрохирург",
    "инсульт консультация",
    "травмы головного мозга",
    "аневризма лечение",
    "заболевания нервной системы",
    "нейрохирург Москва",
    "спинальный нейрохирург",
    "консультация врача онлайн",
    "супервизия врачей",
    "лечение инсульта",
    "травмы спинного мозга",
    "патологии ЦНС",
    "неврологические синдромы",
  ],
  openGraph: {
    title: "Кирокосьян Марселла Артуровна — Врач нейрохирург",
    description:
      "Врач нейрохирург с огромным стажем. Консультации, второе врачебное мнение и супервизия по заболеваниям нервной системы. Специализация: инсульты, травмы мозга, аневризмы.",
    url: "https://doctor-kirokosyan.ru", // ← замените на реальный URL
    images: [
      {
        url: "/images/doctor.webp", // рекомендуется добавить фото доктора
        alt: "Кирокосьян Марселла Артуровна - врач нейрохирург",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
    <Hero />
    <Support />
    <About/>
    <Team />
    <Reviews />
    <ContactForm />

      {/* Далее будут секции: Хит продаж, Акции, Отзывы и т.д. */}
    </>
  );
}
