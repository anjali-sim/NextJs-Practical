"use client";

import Button from "@/app/components/auth-ui/Button/Button";
import FormWrapper from "@/app/components/auth-ui/Form/FormWrapper";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/login" });
    router.push(data.url);
  };

  return (
    <div>
      <FormWrapper
        heading="Sign Out"
        content="Are you sure, you want to sign out?"
      >
        <div className="mb-6 flex justify-center">
          <Button title="Sign Out" onClick={handleSignOut} />
        </div>
      </FormWrapper>
    </div>
  );
}
