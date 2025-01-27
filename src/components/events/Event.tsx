"use client"

import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
    const controls = useAnimation()
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2  ,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
    }, [controls, inView])

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    }

    return (
        <div className="min-h-screen bg-transparent text-white relative overflow-hidden pt-32">
            <div className="container mx-auto px-4 py-28">
                <h1 className="text-7xl font-bold text-center mb-16 font-sargento">EVENTS</h1>
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className="flex flex-wrap justify-center gap-28"
                >
                    {events.map((event, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <EventCard
                                title={event.title}
                                subtitle={event.subtitle}
                                dates={event.dates}
                                month={event.month}
                                imageId={event.imageId}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

