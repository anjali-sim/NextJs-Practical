"use client";

import Button from "./ui/Button/Button";
import FormWrapper from "./ui/Form/FormWrapper"
import InputComponent from "./ui/Input/InputComponent";
import Label from "./ui/Label/Label";
import { mailAction } from "./actions/mailAction";
import { useState } from "react";

export default function InputEmailForm() {

    const [email, setEmail] = useState("");

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(email);
        await mailAction({email});
    }
  return (
    // <FormWrapper heading="Forgot your password?" content="Enter your email address and we'll send you the link to reset password"> 
    <FormWrapper heading="Forgot your password?" content="Enter your email below to recieve password reset instructions."> 
    <div>
      <div className="mt-3 p-6 pt-0">
        <form onSubmit={handleSubmit}>
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30 mb-3">
            <div className="flex justify-between">
                <Label title="Email" />
          </div>
          <InputComponent type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <Button title="Reset Password" />
        </form>
      </div>
    </div>
    </FormWrapper>
  );
}
