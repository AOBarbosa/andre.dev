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
import { DiscordLogoIcon } from '@radix-ui/react-icons'

type CardProps = React.ComponentProps<typeof Card>

export function ContactCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn('w-full', className)} {...props}>
      {/* <h3 className="text-3xl">Let's build a something together?</h3>
            <span className="text-muted-foreground">
              If you have any project ideas in mind or wish to have a conversation,
              please feel free to contact me.
            </span> */}

      <CardHeader>
        <CardTitle>Lets build something together?</CardTitle>
        <CardDescription>
          If you have any project ideas in mind or wish to have a conversation,
          please feel free to contact me.
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="flex flex-row items-center justify-center mt-4">
        <div className="flex justify-center items-center gap-4">
          <Button>
            <Link href="https://github.com/AOBarbosa">
              <LucideGithub />
            </Link>
          </Button>

          <Button>
            <Link href="https://www.linkedin.com/in/andre-o-barbosa/">
              <LucideLinkedin />
            </Link>
          </Button>

          <Button>
            <Link href="https://wa.me/5584999113003">
              <WhatsappLogo className="w-6 h-6" />
            </Link>
          </Button>

          <Button>
            <Link href="mailto:andre.barbosa.076@ufrn.edu.br?subject=Vim através do seu site e gostaria de [Digite o assunto]">
              <Mail className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
