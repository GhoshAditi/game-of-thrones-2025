import { supabase } from "./supabase-client";

/**
 * Uploads the payment screenshot file to the Supabase Storage bucket.
 *
 * @param file - The File object representing the payment screenshot.
 * @param eventName - The name of the event (used to create a folder).
 * @returns The public URL of the uploaded file.
 * @throws An error if the upload fails.
 */
export async function uploadPaymentScreenshot(file: File, eventName: string) {
    const bucket = 'fests';

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${timestamp}-${file.name}`;
    const filePath = `got-2025/${eventName}/${fileName}`;
    const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);

    console.log(data);

    if (error) {
        console.error('Error uploading file:', error);
        throw error;
    }

    // Get the public URL of the uploaded file.
    const publicUrl = supabase.storage.from(bucket).getPublicUrl(filePath).data?.publicUrl;

    if (!publicUrl) {
        throw new Error('Failed to get public URL for the uploaded file.');
    }

    // Return the public URL.
    return publicUrl;
}
