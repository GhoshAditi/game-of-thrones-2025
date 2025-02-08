import { toast } from "sonner";

export const handleSaveChanges = async (
    formData: FormData,
    userData: any,
    updateUserData: (updatedData: any) => Promise<void> | void,
    closeModal: () => void
) => {
    const formDataObj = Object.fromEntries(formData.entries());

    if (!formDataObj.fullName) {
        toast.error("Full name is required");
        return;
    } else if (!formDataObj.phone) {
        toast.error("Phone number is required");
        return;
    }

    if (!userData?.id) {
        toast.error("User data not found");
        return;
    }

    const updatedData = {
        id: userData.id,
        full_name: formDataObj.fullName,
        phone: formDataObj.phone,
        gender: formDataObj.gender,
    };

    try {
        await updateUserData(updatedData);
        toast.success("Profile updated successfully");
    } catch (error) {
        console.error("Error updating user data:", error);
        toast.error("Failed to update profile");
    } finally {
        closeModal();
    }
};
