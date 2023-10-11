'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { LucideGithub, LucideLinkedin, Mail } from 'lucide-react'
import { WhatsappLogo } from 'phosphor-react'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip'

import { EmailDialog } from './EmailDialog'

type CardProps = React.ComponentProps<typeof Card>

export function ContactCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-full', className)} {...props}>
      <CardHeader>
        <CardTitle>Lets build something together?</CardTitle>
        <CardDescription>
          If you have any project ideas in mind or wish to have a conversation,
          please feel free to contact me.
        </CardDescription>
        <EmailDialog />
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-row items-center justify-center mt-4">
        <div className="flex justify-center items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'}>
                  <Link href="https://github.com/AOBarbosa">
                    <LucideGithub className="text-blue-500" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-full h-full p-2 bg-slate-50 opacity-70 rounded text-black text-xs">
                  Github
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'}>
                  <Link href="https://www.linkedin.com/in/andre-o-barbosa/">
                    <LucideLinkedin className="text-blue-500" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-full h-full p-2 bg-slate-50 opacity-70 rounded text-black text-xs">
                  Linkedin
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'}>
                  <Link href="https://wa.me/5584999113003">
                    <WhatsappLogo className="w-6 h-6 text-blue-500" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-full h-full p-2 bg-slate-50 opacity-70 rounded text-black text-xs">
                  WhatsApp
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant={'ghost'}>
                  <Link href="mailto:andre.barbosa.076@ufrn.edu.br?subject=Vim através do seu site e gostaria de [Digite o assunto]">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-full h-full p-2 bg-slate-50 opacity-70 rounded text-black text-xs">
                  E-mail
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )
}
