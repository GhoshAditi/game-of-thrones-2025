import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AddLinkDialog() {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle the submission logic here
        console.log("Submitted:", { title, url })
        setOpen(false)
        setTitle("")
        setUrl("")
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="border-[#9158FF] text-[#9158FF] hover:bg-[#9158FF]/20 bg-[#1e2432]"
                >
                    Add Link
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-[#2a3142] text-white border-gray-700">
                <DialogHeader>
                    <DialogTitle>Add Link</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="col-span-3 bg-[#1e2432] border-gray-700 text-white"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="url" className="text-right">
                            URL
                        </Label>
                        <Input
                            id="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="col-span-3 bg-[#1e2432] border-gray-700 text-white"
                        />
                    </div>
                    <Button type="submit" className="bg-[#9158FF] hover:bg-[#9158FF]/90 text-white mt-4">
                        Add Link
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

