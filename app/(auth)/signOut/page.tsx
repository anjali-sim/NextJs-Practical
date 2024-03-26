"use client";

import Button from "@/app/components/ui/Button/Button";
import FormWrapper from "@/app/components/ui/Form/FormWrapper";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SignOut() {
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut();
        // redirect("/");
        router.push("/");
    }

    return (
        <div>
            <FormWrapper heading="Sign Out" content="Are you sure, you want to sign out?">
                <div className="mb-6 flex justify-center">
                <Button title="Sign Out" onClick={handleSignOut} />
                </div>
            </FormWrapper>
        </div>
    );
}