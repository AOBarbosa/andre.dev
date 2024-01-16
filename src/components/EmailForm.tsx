'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

import Lottie from 'react-lottie-player'
import sendEmailAnimation from '../lottie/senEmailAnimation.json'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from './ui/use-toast'
import { Textarea } from './ui/textarea'
import { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Toaster } from './ui/toaster'

const sendEmailFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'O nome precisa ter, pelo menos, 3 caracteres.' }),
  lastName: z
    .string()
    .min(3, { message: 'O nome precisa ter, pelo menos, 3 caracteres.' }),
  email: z.string().email({ message: 'Endereço de email inválido.' }),
  phoneNumber: z.string().length(11, 'O número deve conter 11 dígitos'),
  message: z
    .string()
    .max(280, { message: 'Must be 280 or fewer characters long' }),
})

type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export function EmailForm() {
  const form = useForm<SendEmailFormData>({
    resolver: zodResolver(sendEmailFormSchema),
  })

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await emailjs.sendForm(
        'service_gqb6qdn',
        'template_d1ybjn8',
        event.currentTarget,
        'gA0rJLmZnCIp2z3ii',
      )

      toast({
        title: 'Sua mensagem foi enviada com sucesso!',
        description: (
          <Lottie
            loop={false}
            animationData={sendEmailAnimation}
            play
            style={{ width: 144, height: 144 }}
          />
        ),
      })
    } catch (error: any) {
      console.log(error.text)
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Inform your first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Inform your last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Inform your e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Inform your phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="resize-none"
                  placeholder="Inform your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
      <Toaster />
    </Form>
  )
}
