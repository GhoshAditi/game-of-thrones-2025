import type React from "react"
import { Card } from "@/components/ui/card"
import styles from "./EventCard.module.css"

interface EventProps {
    title: string
    subtitle: string
    dates: string
    month: string
    imageId: string
}

const EventCard: React.FC<EventProps> = ({ title, subtitle, dates, month, imageId }) => {
    return (
        <Card
            className={`${styles.card} bg-black/40 max-w-[300px] w-full flex-shrink-0 backdrop-blur-sm border-none overflow-hidden group transition-transform duration-300`}
        >
            <div className={`${styles.cardContent} relative h-[400px] w-full`}>
                <div
                    className={`${styles.cardBackground} absolute inset-0 bg-cover bg-center`}
                    style={{
                        backgroundImage: "url(/image.png)", // Changed to public folder image
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-transparent" />
                <div className={`${styles.content} absolute inset-0 p-6 flex flex-col justify-between group`}>
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-8 bg-white/20 rounded-full" />
                        <span className="text-xs text-white font-instrumentSans">RCC INSTITUTE OF INFORMATION TECHNOLOGY</span>
                    </div>

                    <div className="space-y-2 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
                        <div className="space-y-1">
                            <p className="text-xl font-bold text-zinc-50">{dates}</p>
                            <p className="text-sm text-purple-300">{month}</p>
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-4xl font-bold tracking-wide" style={{ fontFamily: "Impact" }}>
                                {title}
                            </h2>
                            <p className="text-2xl text-red-500 font-bold tracking-wide" style={{ fontFamily: "Impact" }}>
                                {subtitle}
                            </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-white/20">
                            <p className="text-sm font-semibold">GAME OF THRONES</p>
                            <p className="text-xs opacity-60">One for all, All for One</p>
                        </div>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-full opacity-0 transform translate-y-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                        Register Now
                    </button>
                </div>
            </div>
        </Card>
    )
}

export default EventCard