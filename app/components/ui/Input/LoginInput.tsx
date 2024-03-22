"use client";

import loginAction from "../../actions/loginAction";
import { useFormState } from "react-dom";
import InputComponent from "./InputComponent";
import Label from "../Label/Label";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  message: "",
};

export default function LoginInput({ children }: Props) {
  const [state, formAction] = useFormState(loginAction, initialState);
  // console.log(state.message)

  return (
    <div className="mt-6 p-6 pt-0">
      <form action={formAction}>
        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
          <div className="flex justify-between">
            <Label title="Email" />
          </div>
          <InputComponent type="email" name="email" />
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
          {state?.password && <p className="text-red-400">{state.password}</p>}
        </div>

        {state?.message && <p className="text-red-400">{state.message}</p>}
        {children}
      </form>
    </div>
  );
}
