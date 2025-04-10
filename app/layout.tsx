import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] });
const monaco = localFont({
  src: '../public/fonts/monaco.ttf',
  variable: '--font-monaco'
});

export const metadata: Metadata = {
  title: 'Eduardo Link Bio',
  description: 'Link Bio',
  keywords: ['Eduardo Link Bio', 'Eduardo Lima', 'Desenvolvedor Web', 'Desenvolvedor Mobile'],
  icons: {
    icon: '/assets/Logo-Branca.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${monaco.variable}`}>
      <body className="font-monaco">{children}</body>
    </html>
  );
}
