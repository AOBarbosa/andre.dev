'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'
import { EmailForm } from './EmailForm'

export function EmailDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-32" asChild>
        <Button variant="outline">Contact me</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send me a message</DialogTitle>
          <DialogDescription>
            Fill the form below, and an email will be sent directly to me.
          </DialogDescription>
        </DialogHeader>

        <EmailForm />
      </DialogContent>
    </Dialog>
  )
}
