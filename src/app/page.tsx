'use client'

import { TypingWritter } from '@/components/TypingWritter'

export default function Home() {
  return (
    <div>
      <main>
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
    </div>
  )
}
