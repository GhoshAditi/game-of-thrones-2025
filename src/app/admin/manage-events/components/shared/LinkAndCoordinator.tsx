import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AddLinkDialog } from "./AddlinkDialog"
import { AddCoordinatorDialog } from "./AddCoordinatorDialog"

export function LinksAndCoordinators() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            <Card className="transition-transform bg-[#2a3142] border-none hover:shadow-lg hover:shadow-[#9158FF]/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <CardTitle className="text-white">Links</CardTitle>
                        <CardDescription className="text-gray-400">Add relevant links for the event.</CardDescription>
                    </div>
                    <AddLinkDialog />
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Links will be rendered here */}
                    <div className="text-sm text-gray-200 text-center py-4">No links added yet</div>
                </CardContent>
            </Card>

            <Card className="transition-transform bg-[#2a3142] border-none hover:shadow-lg hover:shadow-[#9158FF]/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div>
                        <CardTitle className="text-white">Coordinators</CardTitle>
                        <CardDescription className="text-gray-400">Manage event coordinators.</CardDescription>
                    </div>
                    <AddCoordinatorDialog />
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Coordinators will be rendered here */}
                    <div className="text-sm text-gray-200 text-center py-4">No coordinators added yet</div>
                </CardContent>
            </Card>
        </div>
    )
}

