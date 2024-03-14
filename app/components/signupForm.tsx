import Link from "next/link";

export default function SignupForm() {
  return (
    <div className="bg-black text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-2xl font-semibold">SignUp</h3>
            <p className="mt-1.5 text-md font-medium text-white/50">
              Create your account
            </p>
          </div>
          <div className="p-6 pt-0">
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

              <div className="mt-4 flex items-center ml-3 justify-between">
                <div>
                  <span>Already have an account?</span>
                  <Link
                    className="inline-flex items-center justify-center text-sky-200 text-md focus-visible:outline-none hover:text-sky-400 h-10 ml-3 text-md underline"
                    href="/login"
                  >
                    Log In
                  </Link>
                </div>

                <div>
                  <button
                    className="font-semibold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
