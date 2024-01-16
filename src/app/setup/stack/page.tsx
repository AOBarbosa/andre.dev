import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import htmlIMG from '@/assets/html5-original.svg'
import cssIMG from '@/assets/css3-original.svg'
import jsIMG from '@/assets/javascript-original.svg'
import tsIMG from '@/assets/typescript-original.svg'
import swiftIMG from '@/assets/swift-original.svg'
import reactIMG from '@/assets/react-original.svg'
import nextIMG from '@/assets/nextjs-original.svg'
import tailwindIMG from '@/assets/tailwindcss-plain.svg'
import reactTestLibIMG from '@/assets/react-test-lib.png'
import jestIMG from '@/assets/jest-plain.svg'
import cypressIMG from '@/assets/cypress-logo.png'
import nodeIMG from '@/assets/nodejs-original.svg'
import Link from 'next/link'

export default function Stack() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Stack</h1>
        <p className="text-lg text-muted-foreground">
          Here are the technologies and services I use in my daily life.
        </p>
      </div>

      <main className="grid grid-cols-2 xs:grid-cols-3 mm:grid-cols-4 gap-4 mt-6">
        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={htmlIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={cssIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={jsIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://www.typescriptlang.org/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={tsIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://www.swift.org/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={swiftIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://react.dev/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={reactIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://nodejs.org/en">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={nodeIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://nextjs.org/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={nextIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://tailwindcss.com/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={tailwindIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://testing-library.com/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={reactTestLibIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://jestjs.io/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={jestIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Link href="https://www.cypress.io/">
              <Image
                className="mt-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                src={cypressIMG}
                alt=""
              />
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
