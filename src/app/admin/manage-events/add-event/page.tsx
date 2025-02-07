"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"
import "react-quill/dist/quill.snow.css"
import { BasicInformation, ScheduleAndDescription, RulesAndGuidelines, LinksAndCoordinators } from "../components"
import { addEvent } from "@/utils/functions/addEvent"
import { Coordinator, Link } from "@/lib/types/events"

const formSchema = z.object({
  name: z.string().min(2, "Event name must be at least 2 characters"),
  registration_fees: z.string(),
  prize_pool: z.string(),
  image_url: z.string().url("Please enter a valid image URL"),
  min_team_size: z.coerce.number().min(1, "Minimum team size must be at least 1"),
  max_team_size: z.coerce.number().min(1, "Maximum team size must be at least 1"),
  schedule: z.string(),
  description: z.string(),
  rules: z.string(),
  coordinators: z.array(
    z.object({
      name: z.string(),
      phone: z.string()
    })
  ).optional(),
  links: z.array(
    z.object({
      title: z.string(),
      url: z.string().url(),
    })
  ).optional(),
})

export default function AddEventPage() {
  const [links, setLinks] = useState<Link[]>([])
  const [coordinators, setCoordinators] = useState<Coordinator[]>([])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      registration_fees: "",
      prize_pool: "",
      image_url: "",
      min_team_size: 1,
      max_team_size: 1,
      schedule: "",
      description: "",
      rules: "",
      coordinators: [],
      links: [],
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const eventData = {
        ...values,
        min_team_size: Number(values.min_team_size),
        max_team_size: Number(values.max_team_size),
        links: links,
        coordinators: coordinators,
      }
      await addEvent(eventData)
      toast.success("Event created!")
      form.reset() // Clears the form fields
      setLinks([]) // Resets links
      setCoordinators([]) // Resets coordinators
    } catch (error: any) {
      toast.error("Failed to create event. " + error.message)
    }
  }

  return (
    <div className="container max-w-7xl py-8 min-h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-sargento text-white">Add New Event</h1>
              <p className="text-sm text-muted-foreground mt-1 text-gray-300">
                Create a new event by filling out the details below.
              </p>
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#a383e6] via-[#9158FF] to-[#9158FF] hover:opacity-90 transition-opacity"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Create Event
            </Button>
          </div>

          <BasicInformation form={form} />
          <ScheduleAndDescription form={form} />
          <RulesAndGuidelines form={form} />
          <LinksAndCoordinators
            links={links}
            setLinks={setLinks}
            coordinators={coordinators}
            setCoordinators={setCoordinators}
          />
        </form>
      </Form>
    </div>
  )
}
