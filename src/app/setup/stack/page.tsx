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

export default function Stack() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl">Stack</h1>
        <p className="text-lg text-muted-foreground">
          Seguem as tecnologias e serviços que utilizo no meu dia a dia.
        </p>
      </div>

      <main className="grid grid-cols-4 gap-4 mt-6">
        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={htmlIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={cssIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={jsIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={tsIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={swiftIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={reactIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={nodeIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={nextIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={tailwindIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={reactTestLibIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={jestIMG} alt="" />
          </CardContent>
        </Card>

        <Card className="w-48 h-48 flex items-center justify-center">
          <CardContent>
            <Image className="mt-6" src={cypressIMG} alt="" />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
