"use server";

import connect from "@/app/mongodb/DBConnect";

export default async function updatePasswordAction() {
    await connect();
    
}