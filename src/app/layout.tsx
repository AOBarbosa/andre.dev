import { NavMenu } from '@/components/NavMenu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Code2 } from 'lucide-react'
import { ContactCard } from '@/components/ContactCard'
import { Separator } from '@/components/ui/separator'

const inter = Inter({ subsets: ['latin'] })

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
      <body
        className={`${inter.className} w-2xl h-full px-40 flex flex-col items-center justify-center gap-10`}
      >
        <nav className="w-full h-20 px-4 flex flex-row justify-between items-center ">
          <Link
            href="/"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-blue-500"
          >
            <Code2 className="w-14 h-14" />
          </Link>

          <NavMenu />
        </nav>

        {children}

        <Separator decorative className="w-full" />

        <ContactCard className="mb-8" />
      </body>
    </html>
  )
}
