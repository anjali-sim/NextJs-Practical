"use client";

import { NextPage } from 'next';
import FormWrapper from "../components/ui/Form/FormWrapper";
import Label from "../components/ui/Label/Label";
import InputComponent from "../components/ui/Input/InputComponent";
import Button from "../components/ui/Button/Button";
import { useState } from "react";
import updatePasswordAction from "../components/actions/updatePasswordAction";
import { useSearchParams } from 'next/navigation';


const ResetPassword = () => {
const searchparams = useSearchParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ newPassword, confirmPassword });
    if (newPassword !== confirmPassword) {
        // Display an error message or handle the mismatch
        console.error("Passwords do not match");
        return;
      }
    await updatePasswordAction({ newPassword, token: searchparams.get("token") });
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
              <InputComponent type="password" name="password" onChange={(e) => setNewPassword(e.target.value)} />
            </div>

            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="Confirm Password" />
              </div>
              <InputComponent type="password" name="password" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <Button title="Change Password" isLogin={false} />
          </form>
        </div>
      </div>
    </FormWrapper>
  );
}

export default ResetPassword;