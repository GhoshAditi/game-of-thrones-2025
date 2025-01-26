import { v4 as uuidv4 } from "uuid"

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

const imageUrls = [
    "https://i.postimg.cc/76pkJL7R/7.png",
    "https://i.postimg.cc/LXFY8M0j/5.png",
    "https://i.postimg.cc/1RqPhp11/8.png",
    "https://i.postimg.cc/SRCp6pfx/6.png",
]

export async function generateEvents(num: number): Promise<Event[]> {
    const events: Event[] = []
    const names = ["Kashish-e-Haya", "Band Bash", "Dance Fusion", "Artistry Showcase"]
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

    for (let i = 0; i < num; i++) {
        const name = names[i % names.length]
        const registrationOpen = Math.random() < 0.5
        const day = Math.floor(Math.random() * 28) + 1
        const month = months[Math.floor(Math.random() * 12)]
        const date = `${day}th ${month} 2024`
        const fees = `700 /-`
        const prize = `/-`
        const minTeam = name === "Kashish-e-Haya" ? 6 : 4
        const maxTeam = name === "Kashish-e-Haya" ? 14 : 9
        const teamSize = `${minTeam} - ${maxTeam}`

        let description =
            name === "Kashish-e-Haya"
                ? "A graceful talent showcase emphasizing modesty. Teams perform with formations, music, and props, following strict safety rules. This event celebrates the beauty of modest expression through various art forms. Participants are encouraged to showcase their talents while adhering to the principles of modesty and grace. The performances will be judged on creativity, coordination, and adherence to the theme."
                : "A battle of bands with electrifying performances across genres. Musical talents collide in a symphony of sound. This high-energy event brings together diverse musical styles, from rock and pop to jazz and fusion. Bands will compete for the top spot, showcasing their original compositions and covers. The judging criteria include musicality, stage presence, and audience engagement."

        // Add disclaimer to description if it's Kashish-e-Haya
        if (name === "Kashish-e-Haya") {
            description +=
                " Important: The team must mail their song and prop list to rcciit.regalia.official@gmail.com by July 2024."
        }

        const rules =
            name === "Kashish-e-Haya"
                ? [
                    "Age limit 15-25",
                    `Minimum participants: ${minTeam}, maximum: ${maxTeam}`,
                    "Using slippery substances/fire/colored powder deducts marks",
                    "Minimum 4 performers on stage at all times",
                ]
                : [
                    "Age limit 16-30",
                    `Team size: ${minTeam}-${maxTeam} members`,
                    "Performances must not exceed 10 minutes",
                    "Equipment must be self-provided",
                ]

        const imageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)]

        events.push({
            id: uuidv4(),
            name,
            registrationOpen,
            date,
            fees,
            prize,
            teamSize,
            description,
            rules,
            imageUrl,
        })
    }
    return events
}

