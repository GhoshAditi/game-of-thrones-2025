"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useUser } from "@/lib/stores"
import { Skeleton } from "@/components/ui/skeleton"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { supabase } from "@/utils/functions/supabase-client"
import { logout } from "@/utils/functions/auth/logout"
import { toast } from "sonner"

export default function ProfilePage() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const { userData, userLoading, updateUserData } = useUser()
  const [profileImage, setProfileImage] = useState<string | undefined>(undefined)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [name, setName] = useState<string | undefined>(undefined)
  const router = useRouter()

  useEffect(() => {
    const readUserSession = async () => {
      const { data } = await supabase.auth.getSession()
      if (data?.session?.user.user_metadata?.avatar_url) {
        setName(data.session.user.user_metadata.full_name)
        setProfileImage(data.session.user.user_metadata.avatar_url)
      }
    }
    readUserSession()
  }, [])

  const handleLogout = async () => {
    await logout()
    router.push("/")
  }

  const handleSaveChanges = async (formData: FormData) => {

    const formDataObj = Object.fromEntries(formData.entries());

    if (!formDataObj.fullName) {
      toast.error("Full name is required");
      return;
    }
    else if (!formDataObj.phone) {
      toast.error("Phone number is required");
      return;
    }
    if (!userData?.id) {
      toast.error("User data not found");
      return;
    }


    const updatedData = {
      id: userData?.id,
      full_name: formDataObj.fullName,
      phone: formDataObj.phone,
      gender: formDataObj.gender,
    };


    try {
      updateUserData(updatedData);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsEditModalOpen(false);
    }
  };


  if (userLoading) {
    return (
      <div className="min-h-screen b mt-32">
        <main className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-card rounded-xl bg-violet-500 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Skeleton className="w-32 h-32 rounded-full" />
              <div className="space-y-4 flex-1">
                <div>
                  <Skeleton className="h-8 w-48" />
                  <Skeleton className="h-4 w-32 mt-2" />
                </div>
                <div className="flex gap-4">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-24" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen  mt-32">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-card rounded-xl bg-violet-500 p-8 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <Avatar className="w-32 h-32">
              {!imageLoaded && <Skeleton className="w-full h-full rounded-full absolute inset-0" />}
              <AvatarImage
                src={profileImage}
                alt={userData?.name || "Profile"}
                onLoad={() => setImageLoaded(true)}
                className={imageLoaded ? "block" : "hidden"}
              />
              <AvatarFallback>{userData?.name?.[0] || "U"}</AvatarFallback>
            </Avatar>
            <div className="space-y-4 flex-1">
              <div>
                <h1 className="text-2xl font-semibold text-white">{userData?.name ? userData?.name : name}</h1>
                <p className="text-muted-foreground text-white">{userData?.email}</p>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setIsEditModalOpen(true)}>
                  Edit Profile
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Events Registered</h2>
          {/* Ticket content would go here */}
        </div>
      </main>

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-black border border-[#8B5CF6] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-white">Edit Profile</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveChanges(new FormData(e.currentTarget));
            }}
          >
            <div className="grid gap-6 py-4">
              <div className="flex justify-center">
                <Avatar className="w-24 h-24 border-2 border-violet-500">
                  <AvatarImage
                    src={profileImage}
                    alt={userData?.name || "Profile"}
                  />
                  <AvatarFallback className="bg-violet-500 text-white">
                    {userData?.name?.[0] || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="grid gap-2">
                <label htmlFor="fullName" className="text-white">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  defaultValue={userData?.name || name}
                  className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="gender" className="text-white">
                  Gender
                </label>
                <Select name="gender" defaultValue={userData?.gender || ""}>
                  <SelectTrigger className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border border-gray-500">
                    <SelectItem value="female" className="text-white hover:bg-[#8B5CF6]/20">
                      Female
                    </SelectItem>
                    <SelectItem value="male" className="text-white hover:bg-[#8B5CF6]/20">
                      Male
                    </SelectItem>
                    <SelectItem value="other" className="text-white hover:bg-[#8B5CF6]/20">
                      Other
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-white">
                  Email ID
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue={userData?.email || ""}
                  className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                  readOnly
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="phone" className="text-white">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue={userData?.phone || ""}
                  className="bg-black border border-gray-500 focus:border-[#8B5CF6] focus:outline-none text-white rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
                className="bg-white text-black hover:bg-white/90 border-0"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-[#8B5CF6] text-white hover:bg-[#8B5CF6]/90 border-0"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

