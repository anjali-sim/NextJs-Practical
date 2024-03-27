"use client";

import Button from "./auth-ui/Button/Button";
import FormWrapper from "./auth-ui/Form/FormWrapper";
import InputComponent from "./auth-ui/Input/InputComponent";
import Label from "./auth-ui/Label/Label";
import { mailAction } from "./actions/mailAction";
import { useState } from "react";

export default function InputEmailForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { success, message } = await mailAction({ email });
      if (success) {
        setMessage(message);
        setError("");
      } else {
        setError(message);
        setMessage("");
      }
    } catch (error) {
      setError("Error sending the email");
      setMessage("");
    }
  };
  return (
    // <FormWrapper heading="Forgot your password?" content="Enter your email address and we'll send you the link to reset password">
    <FormWrapper
      heading="Forgot your password?"
      content="Enter your email below to recieve password reset instructions."
    >
      <div>
        <div className="mt-3 p-6 pt-0">
          <form onSubmit={handleSubmit}>
            <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
              <div className="flex justify-between">
                <Label title="Email" />
              </div>
              <InputComponent
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {message && <p className="text-green-400">{message}</p>}
            {error && <p className="text-red-400">{error}</p>}
            <Button title="Reset Password" />
          </form>
        </div>
      </div>
    </FormWrapper>
  );
}
