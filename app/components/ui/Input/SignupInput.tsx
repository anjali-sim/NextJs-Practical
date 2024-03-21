"use client";

import { useFormState } from "react-dom";
import signupAction from "../../actions/signupAction";
import InputComponent from "./InputComponent";
import Label from "../Label/Label";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  message: "",
};

export default function SignupInput({ children }: Props) {
  const [state, formAction] = useFormState(signupAction, initialState);
  return (
    <div className="mt-6 p-6 pt-0">
      <form action={formAction}>
        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
          <div className="flex justify-between">
            <Label title="Username" />
          </div>
          <InputComponent type="text" name="username" />
        </div>
        {state?.username && <p className="text-red-400">{state.username}</p>}

        <div className="mt-4">
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <div className="flex justify-between">
              <Label title="Email" />
            </div>
            <InputComponent type="email" name="email" />
          </div>
        </div>
        {state?.email && <p className="text-red-400">{state.email}</p>}

        <div className="mt-4">
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <div className="flex justify-between">
              <Label title="Password" />
            </div>
            <div className="flex items-center">
              <InputComponent type="password" name="password" />
            </div>
          </div>
        </div>
        {state?.password && <p className="text-red-400">{state.password}</p>}

        {children}
      </form>
    </div>
  );
}
