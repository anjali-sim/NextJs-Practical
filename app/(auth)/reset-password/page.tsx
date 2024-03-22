"use client";

import FormWrapper from "@/app/components/ui/Form/FormWrapper";
import Label from "@/app/components/ui/Label/Label";
import InputComponent from "@/app/components/ui/Input/InputComponent";
import Button from "@/app/components/ui/Button/Button";
import { useState } from "react";
import updatePasswordAction from "@/app/components/actions/updatePasswordAction";
import { useSearchParams } from "next/navigation";

const ResetPassword = () => {
  const searchparams = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    await updatePasswordAction({
      newPassword,
      token: searchparams.get("token"),
    });
  };

  return (
    <FormWrapper heading="Reset Password">
      <div>
        <div className="mt-3 p-6 pt-0">
          <form onSubmit={handleFormSubmit}>
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="New Password" />
              </div>
              <InputComponent
                type="password"
                name="password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="Confirm Password" />
              </div>
              <InputComponent
                type="password"
                name="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-red-400">{error}</p>}
            <Button title="Change Password" isLogin={false} />
          </form>
        </div>
      </div>
    </FormWrapper>
  );
};

export default ResetPassword;
