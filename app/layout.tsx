import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import HeaderContainer from '@/src/features/header/components/HeaderContainer';
import Providers from '@/src/providers/Providers';
import RenderMobileMenu from '@/src/features/mobileMenu/components/RenderMobileMenu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Venue App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={clsx("bg-background min-h-screen", inter.className)}>
          <HeaderContainer />
          <RenderMobileMenu/>
          {children}
        </body>
      </Providers>
    </html>
  )
}
