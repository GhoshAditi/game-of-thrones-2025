import { Card } from "@/components/ui/card"

const events = [
    {
        title: "BADMINTON",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
    {
        title: "FOOTBALL",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
    {
        title: "CHESS",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
    {
        title: "TUG OF WAR",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
    {
        title: "HANDBALL",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
    {
        title: "KABADDI",
        subtitle: "TOURNAMENT",
        dates: "14TH 15TH",
        month: "FEBRUARY 2025",
    },
]

export default function EventsPage() {
    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden"
            style={{
                backgroundColor: "black",
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cDNvfC2atK2TkPURI4kFgtAfybszap.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container mx-auto px-4 py-16">
                <h1 className="text-7xl font-bold text-center mb-16 tracking-wider" style={{ fontFamily: "Impact" }}>
                    EVENTS
                </h1>
                <div className="flex flex-wrap justify-center gap-32 px-20">
                    {events.map((event, index) => (
                        <Card
                            key={index}
                            className="bg-black/40 max-w-[300px] w-full flex-shrink-0 backdrop-blur-sm border-none overflow-hidden group  transition-transform duration-300  "
                        >
                            <div className="relative h-[400px] w-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-white/20 rounded-full" />
                                        <span className="text-xs opacity-80">RCC INSTITUTE OF INFORMATION TECHNOLOGY</span>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="space-y-1">
                                            <p className="text-xl font-bold">{event.dates}</p>
                                            <p className="text-sm text-purple-300">{event.month}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <h2 className="text-4xl font-bold tracking-wide" style={{ fontFamily: "Impact" }}>
                                                {event.title}
                                            </h2>
                                            <p className="text-2xl text-red-500 font-bold tracking-wide" style={{ fontFamily: "Impact" }}>
                                                {event.subtitle}
                                            </p>
                                        </div>

                                        <div className="pt-4 mt-4 border-t border-white/20">
                                            <p className="text-sm font-semibold">GAME OF THRONES</p>
                                            <p className="text-xs opacity-60">One for all, All for One</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

