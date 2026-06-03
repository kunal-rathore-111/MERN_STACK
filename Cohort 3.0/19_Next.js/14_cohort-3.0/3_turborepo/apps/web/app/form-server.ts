"use server"

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";




// form action function to redirect to /room/dynamic_id

export default async function formAction(initialState: any, formData: FormData) {

    try {
        const { roomId } = Object.fromEntries(formData);

        if (typeof roomId !== "string") throw new Error("invalid id");
        const roomIdNo = Number(roomId);

        console.log(roomIdNo);

        if (isNaN(roomIdNo) || roomIdNo <= 0 || roomIdNo > 5) throw new Error("invalid id (Id must be in between 1 to 5)");

        else {
            redirect(`/chat-room/${roomId}`);
        }

    } catch (error) {
        if (isRedirectError(error)) throw error;
        const message = error instanceof Error ? error.message : "Something went wrong";
        return { success: false, message };
    }

}
