"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">Login</h3>
            <p className="mt-1.5 text-md font-medium text-white/50">
              Welcome back, enter your credentials to continue.
            </p>
          </div>


          <div className="flex justify-between p-6">
            <div className="flex-1 mr-1.5">
            <button
                className="w-full font-semibold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </button>
            </div>
              
            <div className="flex-1 mr-1.5">
            <button
                className="w-full font-semibold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
                onClick={() => signIn("github")}
              >
                Sign in with GitHub
              </button>
            </div>
              
            </div>

            <div
            className="my-3 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 dark:before:border-neutral-500 dark:after:border-neutral-500">
            <p
              className="mx-4 mb-0 text-center font-semibold dark:text-white">
              OR
            </p>
          </div>

          <div className="mt-6 p-6 pt-0">
            <form>
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
              
              <div className="mt-4 ml-3 flex justify-between">
                <Link
                  className="text-md font-medium text-foreground underline mt-1"
                  href="/forgot-password"
                >
                  Forgot password?
                </Link>
                <Link
                  className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                  href="/login"
                >
                  Log In
                </Link>
              </div>
              <div className="mt-4 flex items-center ml-3">
                <span>Dont have an account?</span>
                <Link
                  className="inline-flex items-center justify-center text-sky-200 text-md focus-visible:outline-none hover:text-sky-400 h-10 ml-3 text-md underline"
                  href="/signup"
                >
                  Sign Up
                </Link>
              </div>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
