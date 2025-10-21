import Hero from '@/components/Hero/Hero';
import Support from '@/components/Support/Support';
import About from '@/components/About/About';
import Team from '@/components/Team/Team';
import Reviews from '@/components/Reviews/Reviews';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';


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
