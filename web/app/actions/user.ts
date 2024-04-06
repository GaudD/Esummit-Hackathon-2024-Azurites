"use server"

import prisma from "@/db";

export async function signup(username: string, password: string ) {
    
    try {
        await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        })
        return "Signed Up Successfully";
    } catch(e) {
        return "Error while Signing up";
    }

}