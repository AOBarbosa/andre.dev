'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { User } from 'lucide-react'
import Link from 'next/link'

export default function AbouteMe() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row items-center justify-between gap-16">
        <Avatar className="w-96 h-96">
          <AvatarImage
            src="https://github.com/AOBarbosa.png"
            alt="Andre profile pic"
          />
          <AvatarFallback>
            <Skeleton className="w-96 h-96 rounded-full">
              <User className="w-full h-full text-zinc-500 opacity-50" />
            </Skeleton>
          </AvatarFallback>
        </Avatar>

        <div className="">
          <h1>My name is André de Oliveira Barbosa</h1>
          <p className="text-justify">
            A technology enthusiast front-end developer, constantly seeking new
            challenges to enhance my skills and deepen my knowledge. Currently,
            I work with <span className="text-blue-400">React</span>,{' '}
            <span className="text-blue-400">Typescript</span>, and{' '}
            <span className="text-blue-400">NextJs</span>, always dedicated to
            expanding my abilities and expertise in the field, applying them in
            a professional environment. I firmly believe that an excellent
            developer is not limited to mastering only one technology or
            programming language and recognizes the importance of being open to
            new approaches and emerging technologies.
          </p>

          <p className="text-justify">
            I have experience in the following technologies:{' '}
            <span className="text-blue-400">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <Link href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                  HTML
                </Link>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                  CSS
                </a>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://react.dev/">React</a>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://nextjs.org/">Next.js</a>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://tailwindcss.com/">Tailwindcss</a>
              </button>
              ,{' '}
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a href="https://styled-components.com/">Styled Components</a>
              </button>{' '}
              .
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center gap-16">
        <h1 className="text-2xl font-bold text-blue-400">Qualifications</h1>

        <div className="flex justify-around w-full h-64 gap-10 items-center text-sm">
          <div className="w-full h-full flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Academics</h1>

            <div className="flex flex-col">
              <Link
                href="https://www.metropoledigital.ufrn.br/portal/ensino/graduacao"
                className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                Bachelor&#39;s in Information Technology
              </Link>

              <span className="text-sm text-zinc-400">
                2021.1 (in progress), UFRN
              </span>
            </div>
          </div>

          <Separator orientation="vertical" decorative />

          <div className="w-full h-full flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Certificates</h1>

            <ScrollArea>
              <div className="flex flex-col">
                <Link
                  href="https://app.rocketseat.com.br/certificates/1c22816e-7b79-48c4-ba95-a88947d9a937"
                  className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  ReactJS and NextJs
                </Link>
                <Link
                  href="https://www.rocketseat.com.br/ignite"
                  className="text-sm text-zinc-400 hover:text-zinc-300"
                >
                  by Rocketseat
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://cursos.alura.com.br/certificate/1834a8d8-df60-4074-928d-c1971c0bf7dc?lang=en"
                  className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  ReactJS: tests with Jest and Testing Library
                </Link>
                <Link
                  href="https://www.alura.com.br/"
                  className="text-sm text-zinc-400 hover:text-zinc-300"
                >
                  by Alura
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://cursos.alura.com.br/certificate/e4a46924-5239-4bcc-8c9d-06856937333a?lang=en"
                  className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  React: integration Tests and Mocks on the Front-end
                </Link>
                <Link
                  href="https://www.alura.com.br/"
                  className="text-sm text-zinc-400 hover:text-zinc-300"
                >
                  by Alura
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://cursos.alura.com.br/certificate/a18c3692-f65c-4649-b98e-ce2e28595713?lang=en"
                  className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  Swift Fundamentals
                </Link>
                <Link
                  href="https://www.alura.com.br/"
                  className="text-sm text-zinc-400 hover:text-zinc-300"
                >
                  by Alura
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href="https://cursos.alura.com.br/certificate/dd483bd6-6a6e-4e1b-9563-d7f4325a2393?lang=en"
                  className="w-full text-center text-lg font-bold hover:text-blue-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                >
                  OOP with Swift
                </Link>
                <Link
                  href="https://www.alura.com.br/"
                  className="text-sm text-zinc-400 hover:text-zinc-300"
                >
                  by Alura
                </Link>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  )
}
