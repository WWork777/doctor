import './globals.scss';
import { Wix_Madefor_Display, Inter, TikTok_Sans } from 'next/font/google';


const wixMadefor = Wix_Madefor_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['400','500','600'], // Regular + SemiBold
  variable: '--font-wix',
  display: 'swap',
});

const tikTokSans = TikTok_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', "600","700","900"],
  variable: '--font-tikTokSans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Кирокосьян Марселла Артуровна',
  description: 'Врач нейрохирург с огромным стажем работы',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='ru'
      className={`${wixMadefor.variable} ${tikTokSans.variable} ${inter.variable}`}
    >
      <body>
        
        <main className='main'>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
