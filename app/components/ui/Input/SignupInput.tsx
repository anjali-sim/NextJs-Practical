interface Props {
  children: React.ReactNode;
}

export default function SignupInput({ children }: Props) {
  return (
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
        {children}
      </form>
    </div>
  );
}
