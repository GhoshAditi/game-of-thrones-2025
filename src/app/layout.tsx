import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components/common';
import { constructMetaData } from '@/utils/functions/metadata';
import SessionProvider from '@/components/SessionProvider';
import { Toaster } from 'sonner';
import Link from 'next/link';

export const metadata: Metadata = constructMetaData({
  title: 'Game Of Thrones 2025',
  description: 'The Official Sports Fest of RCCIIT.',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <SessionProvider />
        <Footer />
        <Toaster position="bottom-right" richColors duration={5000} />
      </body>
    </html>
  );
}
