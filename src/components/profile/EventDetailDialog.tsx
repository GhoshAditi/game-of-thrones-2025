"use client"

import { useState, useEffect, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer"
import { Skeleton } from "@/components/ui/skeleton"
import type { events } from "@/lib/types"
import { fetchRegistrationDetails } from "@/utils/functions/profile/functions"
import { toast } from "sonner"
import { useIsMobile } from "@/hooks/useIsMobile"

interface EventDetailsDialogProps {
    event: events | null
    open: boolean
    onOpenChange: (open: boolean) => void
    userId: string
}

interface TeamMember {
    phone: string
    name: string
    email: string
}

export function EventDetailsDialog({ event, open, onOpenChange, userId }: EventDetailsDialogProps) {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
    const [loading, setLoading] = useState(false)
    const isMobile = useIsMobile()

    // Use a ref to store cached data for each event
    const teamMembersCache = useRef<Record<string, TeamMember[]>>({})

    useEffect(() => {
        if (event && open) {
            // If data is already cached for this event, use it and skip fetching.
            if (teamMembersCache.current[event.id]) {
                setTeamMembers(teamMembersCache.current[event.id])
                return
            }

            const loadTeamMembers = async () => {
                setLoading(true)
                try {
                    const data = await fetchRegistrationDetails(event.id, userId)
                    setTeamMembers(data)
                    // Cache the fetched data by event id.
                    teamMembersCache.current[event.id] = data
                } catch (error) {
                    console.error("Error fetching team members:", error)
                    toast.error("Failed to fetch team members")
                } finally {
                    setLoading(false)
                }
            }

            loadTeamMembers()
        }
    }, [event, open, userId])

    if (!event) return null

    // ContentWrapper can optionally render children.
    const ContentWrapper = ({ children }: { children?: React.ReactNode }) => (
        <div className="mt-4 space-y-4">
            <div>
                {loading ? (
                    <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="bg-zinc-800 p-4 rounded-lg space-y-2">
                                {!isMobile && <Skeleton className="h-4 w-3/4" />}
                                <Skeleton className="h-3 w-1/2" />
                                <Skeleton className="h-3 w-1/2" />
                            </div>
                        ))}
                    </div>
                ) : teamMembers.length > 0 ? (
                    <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-4`}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-zinc-800 p-4 rounded-lg">
                                <h4 className="text-lg font-bold text-white">{member.name}</h4>
                                <p className="text-sm text-gray-300">{member.email}</p>
                                <p className="text-sm text-gray-300">{member.phone}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-300">No team members found.</p>
                )}
            </div>
            {children}
        </div>
    )

    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent className="bg-zinc-900 text-white border-t border-zinc-800">
                    <DrawerHeader className="border-b border-zinc-800">
                        <DrawerTitle className="text-2xl font-got !tracking-widest">{event.name}</DrawerTitle>
                        <DrawerDescription className="text-sm text-gray-300">Team Members</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                        <ContentWrapper />
                    </div>
                </DrawerContent>
            </Drawer>
        )
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="bg-zinc-900 text-white border-zinc-800 min-w-xl max-w-3xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-got !tracking-widest">{event.name}</DialogTitle>
                    <DialogDescription className="text-sm text-gray-300">Team Members</DialogDescription>
                </DialogHeader>
                <ContentWrapper />
            </DialogContent>
        </Dialog>
    )
}
