import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { events } from "@/lib/types"

interface EventDetailsDialogProps {
    event: events | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function EventDetailsDialog({ event, open, onOpenChange }: EventDetailsDialogProps) {
    if (!event) return null

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{event.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <p>{event.description}</p>
                    <p className="mt-2">Schedule: {event.schedule}</p>
                    {/* Add more event details here */}
                </div>
            </DialogContent>
        </Dialog>
    )
}

