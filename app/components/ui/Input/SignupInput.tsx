"use client";

import { useFormState } from "react-dom";
import signupAction from "../../actions/signupAction";

interface Props {
  children: React.ReactNode;
}

const initialState = {
  message: "",
}

export default function SignupInput({ children }: Props) {

  const [state, formAction] = useFormState(signupAction, initialState);
  return (
    <div className="mt-6 p-6 pt-0">
      <form action={formAction}>
        <div className="group relative rounded-lg border focus-within:border-sky-200 px-3 pb-1.5 pt-2.5 duration-200 focus-within:ring focus-within:ring-sky-300/30">
          <div className="flex justify-between">
            <label className="text-md font-medium text-muted-foreground group-focus-within:text-white text-gray-400">
              Username
            </label>
          </div>
          <input
            type="text"
            name="username"
            className="block w-full border-0 bg-transparent p-0 text-md focus:outline-none"
          />
        </div>
        {state?.username && <p className="text-red-400">{state.username}</p>}

        <div className="mt-4">
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
        </div>
        {state?.password && <p className="text-red-400">{state.password}</p>}

        {children}
      </form>
    </div>
  );
}
