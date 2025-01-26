"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { Loader2, Link2, Users, ImageIcon, Trophy, Calendar, ClipboardList } from "lucide-react"
import "react-quill/dist/quill.snow.css"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

const formSchema = z.object({
  name: z.string().min(2, "Event name must be at least 2 characters"),
  price: z.string(),
  prize: z.string(),
  imagePath: z.string().url("Please enter a valid image URL"),
  minTeamSize: z.number().min(1),
  maxTeamSize: z.number().min(1),
  schedule: z.string(),
  description: z.string(),
  rules: z.string(),
  coordinators: z.array(
    z.object({
      name: z.string(),
      email: z.string().email(),
    }),
  ),
  links: z.array(
    z.object({
      title: z.string(),
      url: z.string().url(),
    }),
  ),
})

export default function EditEventPage() {
  const params = useParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      prize: "",
      imagePath: "",
      minTeamSize: 1,
      maxTeamSize: 1,
      schedule: "",
      description: "",
      rules: "",
      coordinators: [],
      links: [],
    },
  })

  useEffect(() => {
    // Simulate loading event data
    setTimeout(() => {
      setLoading(false)
      // Populate form with mock data
      form.reset({
        name: "Sample Event",
        price: "500",
        prize: "10000",
        imagePath: "https://example.com/image.jpg",
        minTeamSize: 2,
        maxTeamSize: 4,
        schedule: "<p>Event Schedule</p>",
        description: "<p>Event Description</p>",
        rules: "<p>Event Rules</p>",
        coordinators: [],
        links: [],
      })
    }, 1000)
  }, [form.reset]) // Added form.reset to dependencies

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success("Event updated successfully")
      router.push("/manage-events")
    } catch (error) {
      toast.error("Failed to update event")
    }
  }

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto" />
          <p className="mt-2 text-sm text-muted-foreground">Loading event details...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container max-w-7xl py-8  min-h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight font-sargento text-white">Edit Event</h1>
              <p className="text-sm text-muted-foreground mt-1 text-gray-300">
                Make changes to your event here. Click save when you're done.
              </p>
            </div>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#a383e6] via-[#9158FF] to-[#9158FF] hover:opacity-90 transition-opacity"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </div>

          <Card className="transition-transform hover:shadow-lg hover:shadow-[#9158FF]/20 bg-[#2a3142] border-none">
            <CardHeader className="">
              <CardTitle className="text-white">Basic Information</CardTitle>
              <CardDescription className="text-gray-400">
                The core details about your event that participants need to know.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Event Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter event name"
                          {...field}
                          className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Registration Fee</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5">₹</span>
                          <Input
                            className="pl-7 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                            placeholder="0.00"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="prize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Prize Pool</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5">₹</span>
                          <Input
                            className="pl-7 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                            placeholder="0.00"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imagePath"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Cover Image URL</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <ImageIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            className="pl-9 bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                            placeholder="https://"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="minTeamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Minimum Team Size</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          {...field}
                          className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxTeamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Maximum Team Size</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          {...field}
                          className="bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-transform  bg-[#2a3142] border-none hover:shadow-lg hover:shadow-[#9158FF]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-white">Schedule</CardTitle>
                <Calendar className="h-4 w-4 text-white " />
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="schedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ReactQuill
                          theme="snow"
                          value={field.value}
                          onChange={field.onChange}
                          className="[&_.ql-toolbar]:bg-[#2a3142] [&_.ql-container]:bg-[#1e2432] [&_.ql-toolbar]:border-gray-600 [&_.ql-container]:border-gray-600 [&_.ql-editor]:text-white [&_.ql-editor]:min-h-[120px] [&_.ql-editor]:focus:border-[#9158FF] [&_.ql-editor]:focus:ring-[#9158FF] bg-[#1e2432] text-white border-gray-600 focus-visible:ring-[#9158FF] focus-visible:border-[#9158FF] "
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card className="transition-transform  hover:shadow-lg bg-[#2a3142] border-none  hover:shadow-[#9158FF]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-white">Description</CardTitle>
                <ClipboardList className="h-4 w-4 text-white" />
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ReactQuill
                          theme="snow"
                          value={field.value}
                          onChange={field.onChange}
                          className="[&_.ql-toolbar]:bg-[#2a3142] [&_.ql-container]:bg-[#1e2432] [&_.ql-toolbar]:border-gray-600 [&_.ql-container]:border-gray-600 [&_.ql-editor]:text-white [&_.ql-editor]:min-h-[120px] [&_.ql-editor]:focus:border-[#9158FF] [&_.ql-editor]:focus:ring-[#9158FF]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          <Card className="transition-transform  hover:shadow-lg bg-[#2a3142] border-none  hover:shadow-[#9158FF]/20">
            <CardHeader>
              <CardTitle className="text-white">Rules & Guidelines</CardTitle>
              <CardDescription className="text-gray-400">
                Set clear rules and guidelines for participants to follow.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="rules"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <ReactQuill
                        theme="snow"
                        value={field.value}
                        onChange={field.onChange}
                        className="[&_.ql-toolbar]:bg-[#2a3142] [&_.ql-container]:bg-[#1e2432] [&_.ql-toolbar]:border-gray-600 [&_.ql-container]:border-gray-600 [&_.ql-editor]:text-white [&_.ql-editor]:min-h-[200px] [&_.ql-editor]:focus:border-[#9158FF] [&_.ql-editor]:focus:ring-[#9158FF]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-transform bg-[#2a3142] border-none  hover:shadow-lg hover:shadow-[#9158FF]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-white">Links</CardTitle>
                  <CardDescription className="text-gray-400">Add relevant links for the event.</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#9158FF] text-[#9158FF] hover:bg-[#9158FF]/20 bg-[#1e2432] "
                >
                  <Link2 className="h-4 w-4 mr-2" />
                  Add Link
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Links will be rendered here */}
                <div className="text-sm text-gray-200 text-center py-4">No links added yet</div>
              </CardContent>
            </Card>

            <Card className="transition-transform bg-[#2a3142] border-none  hover:shadow-lg hover:shadow-[#9158FF]/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-white">Coordinators</CardTitle>
                  <CardDescription className="text-gray-400">Manage event coordinators.</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#9158FF] text-[#9158FF] hover:bg-[#9158FF]/20 bg-[#1e2432]"
                >
                  <Users className="h-4 w-4 mr-2" />
                  Add Coordinator
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Coordinators will be rendered here */}
                <div className="text-sm text-gray-200 text-center py-4">No coordinators added yet</div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  )
}

