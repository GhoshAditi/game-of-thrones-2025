import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import  FormElement from "./form-element"
import { useState } from "react"

interface LinkFormProps {
    isOpen: boolean
    onClose: () => void
    onAddLink: (link: any) => void
}

export function LinkForm({ isOpen, onClose, onAddLink }: LinkFormProps) {
    const [link, setLink] = useState<any>({
        title: "",
        url: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddLink(link)
        setLink({ title: "", url: "" })
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-[#1e2432] text-white border-gray-700">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Add Link</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <FormElement
                        name="Title"
                        value={link.title}
                        id="title"
                        onChange={(e) => setLink({ ...link, title: e.target.value })}
                        type="text"
                    />
                    <FormElement
                        name="URL"
                        value={link.url}
                        id="url"
                        onChange={(e) => setLink({ ...link, url: e.target.value })}
                        type="url"
                    />
                    <Button type="submit" className="w-full">
                        Add Link
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

