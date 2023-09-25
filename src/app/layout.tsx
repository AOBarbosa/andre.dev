import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'andre.dev',
  description: 'A site to introduce myself and show my work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
