import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, Navbar } from '@/components';
import localFont from 'next/font/local';
import Link from 'next/link';
import Hydration from '@/stores/hydration';

const inter = Inter({ subsets: ['latin'] });
// const myFont = localFont({ src: './my-font.woff2' });
const satoshi = localFont({
  variable: '--satoshi-font',
  src: '../public/fonts/Satoshi-Variable.woff2',
  display: 'swap',
  style: 'normal',
});

const integralCF = localFont({
  variable: '--integral-cf-font',
  src: [
    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-regular.otf',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-demibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-extrabold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Integral_CF/Fontspring-DEMO-integralcf-heavy.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Shop.Co',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${satoshi.variable} ${integralCF.variable} h-full w-full`}
      >
        {/* flex-1 */}
        <div className="relative flex flex-col h-[100vh]">
          <Hydration />
          <Navbar />
          <main className="flex flex-col flex-1 h-fit">{children}</main>
          {modal}
          <div id="modal-root" />
          <Footer />
        </div>
      </body>
    </html>
  );
}

