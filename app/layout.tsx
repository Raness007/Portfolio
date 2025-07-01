import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CustomCursor } from '@/components/CustomCursor';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson - Creative Developer & Designer',
  description: 'Modern portfolio showcasing creative development and design work',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomCursor />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}