import { supabase } from "../supabase-client";

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.href = "/";
    if (error) {
        throw new Error("Logout failed");
    }
}