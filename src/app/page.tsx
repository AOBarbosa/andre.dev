'use client'

import { Code2 } from 'lucide-react'
import { TypingWritter } from '@/components/TypingWritter'
import { NavMenu } from '@/components/NavMenu'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="w-full h-full px-40 flex-col items-center justify-center">
      <nav className="w-full h-full flex flex-row justify-between items-center">
        <Code2 className="w-12 h-12" />

        <NavMenu />
      </nav>

      <main>
        <div className="h-full w-full text-3xl">
          <h1 className="font-bold">
            <TypingWritter content="Hello, i'm" showCursor />

            <span className="text-5xl text-blue-500">
              <TypingWritter content="André Barbosa" delay={1300} showCursor />
            </span>

            <TypingWritter content="a Front-end Developer" delay={2800} />
          </h1>
        </div>

        <Button>Clink me</Button>
      </main>
    </div>
  )
}
