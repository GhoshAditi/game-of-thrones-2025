import React from "react"
import EventCard from "./EventCard"

const events = [
    {
        title: "BADMINTON",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "BADMINTON",
    },
    {
        title: "FOOTBALL",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "FOOTBALL",
    },
    {
        title: "CHESS",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "CHESS",
    },
    {
        title: "TUG OF WAR",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "TUG-OF-WAR",
    },
    {
        title: "HANDBALL",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "HANDBALL",
    },
    {
        title: "KABADDI",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
        imageId: "KABADDI",
    },
]

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-transparent text-white relative overflow-hidden pt-32">
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-7xl font-bold text-center mb-16 font-sargento">EVENTS</h1>
                <div className="flex flex-wrap justify-center gap-32 px-20">
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            subtitle={event.subtitle}
                            dates={event.dates}
                            month={event.month}
                            imageId={event.imageId}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

