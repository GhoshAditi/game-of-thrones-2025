import { toast } from "sonner";
import { supabase } from "../supabase-client"

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

/**
 * Fetches registration details for a given event and authenticated user.
 *
 * This function calls the Supabase RPC `get_event_registration_details_by_userid` to securely
 * retrieve participant details (phone, name, email) based on the user's ID. Internally, the RPC
 * function looks up the user's email from the `users` table using the provided user ID.
 *
 * The returned array contains:
 * - For solo events: A single object with the user's phone, name, and email.
 * - For team events where the user is the team lead: An array of objects representing all team members.
 * - For team events where the user is a team member: An array of objects representing all team members.
 *
 * @param {string} eventId - The UUID of the event.
 * @param {string} userId - The authenticated user's UUID.
 * @returns {Promise<Array<{ phone: string; name: string; email: string }>>} A promise that resolves to an array of registration detail objects.
 */
export async function fetchRegistrationDetails(
    eventId: string,
    userId: string
): Promise<Array<{ phone: string; name: string; email: string }>> {
    const { data, error } = await supabase.rpc('get_event_registration_details_by_userid', {
        p_event_id: eventId,
        p_user_id: userId,
    });

    if (error) {
        console.error('Error fetching registration details:', error);
        throw new Error('Failed to fetch registration details');
        return [];
    }

    // data is expected to be an array of objects like: [{ phone, name, email }, ...]
    console.log('Registration Details:', data);
    return data;
}
