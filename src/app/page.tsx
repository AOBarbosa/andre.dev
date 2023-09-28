'use client'

import { Code2 } from 'lucide-react'
import { TypingWritter } from '@/components/TypingWritter'
import { NavMenu } from '@/components/NavMenu'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { ContactCard } from '@/components/ContactCard'

export default function Home() {
  return (
    <div className="w-full h-full px-40 flex flex-col items-center justify-center gap-10">
      <nav className="w-full h-20 px-4 flex flex-row justify-between items-center ">
        <Link
          href="/"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Code2 className="w-14 h-14" />
        </Link>

        <NavMenu />
      </nav>

      <main className="">
        <div className="flex flex-col gap-4">
          <div className="h-full w-full text-5xl">
            <h1
              data-testid="presentation-text"
              className="font-bold w-122 h-44"
            >
              <TypingWritter content="Hello, i'm" showCursor />

              <span className="text-7xl text-blue-500">
                <TypingWritter
                  content="André Barbosa"
                  delay={1300}
                  showCursor
                />
              </span>

              <TypingWritter
                content="Front-end Developer"
                delay={2800}
                showCursor
              />
            </h1>
          </div>

          <span
            data-testid="presentation-description"
            className="text-xl text-gray-400 h-8"
          >
            <TypingWritter
              content="Transforming your ideas into code"
              delay={4800}
            />
          </span>
        </div>
      </main>

      <Separator className="w-full" />

      <ContactCard />
    </div>
  )
}
