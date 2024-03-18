"use client";

import loginAction from "../../actions/loginAction";
import { useFormState } from "react-dom";

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
            <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
              Email
            </label>
          </div>
          <input
            type="email"
            name="email"
            className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
          />
        </div>
        {state?.email && <p className="text-red-400">{state.email}</p>}

        <div className="mt-4">
          <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
            <div className="flex justify-between">
              <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
                Password
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="password"
                name="password"
                className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
              />
            </div>
          </div>
          {state?.password && <p className="text-red-400">{state.password}</p>}
        </div>
        {children}
      </form>
    </div>
  );
}
