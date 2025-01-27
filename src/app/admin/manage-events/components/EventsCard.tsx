"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"

interface Event {
    id: string
    name: string
    registrationOpen: boolean
    date: string
    fees: string
    prize: string
    teamSize: string
    description: string
    rules: string[]
    imageUrl: string
}

interface EventCardsProps {
    events: Event[]
    onDeleteEvent?: (id: string) => void
}

export   function EventCards({ events, onDeleteEvent }: EventCardsProps) {
    onDeleteEvent = onDeleteEvent || (() => {})
    return (
        <div className="space-y-6 w-full max-w-6xl">
            {events.map((event) => (
                <Card key={event.id} className="bg-[#1e2432] text-white border-gray-700 w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-grow p-8 w-[70%]">
                            <CardHeader>
                                <CardTitle className="text-3xl font-bold text-white">{event.name}</CardTitle>
                                <CardDescription className="text-gray-300 text-lg">{event.date}</CardDescription>
                            </CardHeader>
                            <CardContent className="py-6">
                                <p className="mb-6 text-gray-100 leading-relaxed">{event.description}</p>
                                <div className="space-y-3">
                                    <p>
                                        <span className="font-semibold">Fees:</span> {event.fees}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Prize:</span> {event.prize}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Team Size:</span> {event.teamSize}
                                    </p>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start space-y-4">
                                <Badge variant={event.registrationOpen ? "default" : "secondary"} className="mb-2">
                                    {event.registrationOpen ? "Registration Open" : "Registration Closed"}
                                </Badge>
                                <div className="flex items-center gap-2">
                                    <Switch
                                        checked={event.registrationOpen}
                                        onCheckedChange={(checked) => console.log(checked)}
                                        className="data-[state=checked]:bg-green-500"
                                    />
                                    <span className="text-sm text-muted-foreground"> Registration Open </span>
                                </div>
                                <div className="flex space-x-3">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100">
                                                View Rules
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="bg-[#1e2432] text-white border-gray-700">
                                            <DialogHeader>
                                                <DialogTitle className="text-2xl font-bold text-white">Rules for {event.name}</DialogTitle>
                                                <DialogDescription className="text-gray-300">
                                                    Please read all rules carefully before registering
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="mt-6">
                                                <ul className="space-y-3">
                                                    {event.rules.map((rule, index) => (
                                                        <li key={index} className="flex items-start">
                                                            <span className="mr-2">•</span>
                                                            <span className="text-gray-100">{rule}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                                        <Link href={`/admin/manage-events/${event.id}`}>Edit Event</Link>
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
                                                Delete Event
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent className="bg-[#1e2432] text-white border-gray-700">
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription className="text-gray-300">
                                                    This action cannot be undone. This will permanently delete the event and remove all data
                                                    associated with it.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel className="bg-gray-700 text-white hover:bg-gray-600">
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    className="bg-red-600 text-white hover:bg-red-700"
                                                    onClick={() => onDeleteEvent(event.id)}
                                                >
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardFooter>
                        </div>
                        <div className="md:w-[30%] relative min-h-[300px] md:min-h-full">
                            <img
                                src={event.imageUrl || "/placeholder.svg"}
                                alt={event.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}

