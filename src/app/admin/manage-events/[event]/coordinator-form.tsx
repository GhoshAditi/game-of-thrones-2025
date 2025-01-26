"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import  FormElement  from "./form-element"

interface Coordinator {
    name: string
    email: string
}

interface CoordinatorFormProps {
    isOpen: boolean
    onClose: () => void
    onAddCoordinator: (coordinator: Coordinator) => void
}

export function CoordinatorForm({ isOpen, onClose, onAddCoordinator }: CoordinatorFormProps) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        if (name && email) {
            onAddCoordinator({ name, email })
            setName("")
            setEmail("")
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-[#1e2432] text-white border-gray-700">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">Add Coordinator</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <FormElement
                        name="Name"
                        value={name}
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter coordinator name"
                    />
                    <FormElement
                        name="Email"
                        value={email}
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Enter coordinator email"
                    />
                </div>
                <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={onClose} className="bg-gray-700 text-white hover:bg-gray-600">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        disabled={!name || !email}
                    >
                        Add Coordinator
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

