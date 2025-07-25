"use client"
import React from 'react'
import { Input } from '../components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Button } from '../components/ui/button'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Textarea } from '../components/ui/text-area'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, {
    message: "Please write something more descriptive.",
  }),
  social: z.string().url().optional().or(z.literal("")),
})

const Contact: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
      social: "",
    },
  })
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Get Google Form field names
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf8FmVZOfC7qviHKPsUTjkYwJ67fdoECUY3Wd7cKk9a75lZMw/formResponse";
    const EMAIL_FIELD = "emailAddress";
    const USERNAME_FIELD = "entry.566598764";
    const MESSAGE_FIELD = "entry.1113384356";
  
    const formData = new FormData();
    formData.append(EMAIL_FIELD, data.email ?? "");
    formData.append(USERNAME_FIELD, data.username ?? "");
    formData.append(MESSAGE_FIELD, data.message ?? "");
  
    try {
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      form.reset(); // Clear form on success
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div className='flex flex-col'>
      <span className='border-b border-gray-300 pb-2'>
        <div className='text-left text-primary text-3xl font-bold'>Contact</div>
        <p className='text-primary font-medium transition-colors'>
          Let's connect and explore collaborations.
        </p>
      </span>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Input your name" {...field} />
                </FormControl>
                <FormMessage className='text-destructive'/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-destructive'>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Input your email" {...field} />
                </FormControl>
                <FormMessage className='text-destructive'/>
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
                  <Input placeholder="Enter your message" {...field} />
                </FormControl>
                <FormMessage className='text-destructive'/>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="social"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social</FormLabel>
                <FormControl>
                  <Input placeholder="Input your social urls" {...field} />
                </FormControl>
                <FormMessage className='text-destructive'/>
              </FormItem>
            )}
          />
          <Button 
            size="lg"
            type='submit'
            disabled={form.formState.isSubmitting}
            className="bg-black text-white hover:bg-gray-200 hover:text-black transition-all duration-300 transform hover:scale-105 group"
          >
            {form.formState.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default Contact
