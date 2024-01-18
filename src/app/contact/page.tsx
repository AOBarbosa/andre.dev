'use client'

import Image from 'next/image'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import memojiAndre from '@/assets/memojiAndreMac.png'
import { Button } from '@/components/ui/button'
import { Linkedin, Mail } from 'lucide-react'
import { WhatsappLogo } from 'phosphor-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col w-full justify-center sm:flex-row gap-6">
      <Card className="flex flex-col items-center">
        <Image src={memojiAndre} quality={100} alt="" />

        <CardHeader>
          <CardTitle>Hello, i&apos;m André Barbosa!</CardTitle>
          <CardDescription>
            If you want to contact me, please feel free to use any of these
            alternatives.
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="flex flex-col gap-3 sm:w-126">
        <Link href="mailto:andre.barbosa.076@ufrn.edu.br?subject=Vim através do seu site e gostaria de [Digite o assunto]">
          <Button
            className="w-full h-12 sm:h-16 rounded-full flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
            variant="default"
          >
            E-mail
            <Mail />
          </Button>
        </Link>

        <Link href="https://wa.me/5584999113003">
          <Button
            className="w-full h-12 sm:h-16 rounded-full flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
            variant="default"
          >
            WhatsApp
            <WhatsappLogo className="w-6 h-6" />
          </Button>
        </Link>

        <Link href="https://www.linkedin.com/in/andre-o-barbosa/">
          <Button
            className="w-full h-12 sm:h-16 rounded-full flex justify-between transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
            variant="default"
          >
            Linkedin <Linkedin />
          </Button>
        </Link>
      </div>
    </div>
  )
}
