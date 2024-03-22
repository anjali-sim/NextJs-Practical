import { FormProps } from "@/app/types/types";

export default function FormWrapper({ heading, content, children }: FormProps) {
  return (
    <div className=" text-white flex min-h-screen flex-col items-center pt-16 sm:justify-center sm:pt-0">
      <div className="relative mt-12 w-full max-w-lg sm:mt-10">
        <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
        <div className="mx-5 border dark:border-b-white/50 dark:border-t-white/50 border-b-white/20 sm:border-t-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:shadow-white/20 rounded-lg border-white/20 border-l-white/20 border-r-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
          <div className="flex flex-col p-6">
            <h3 className="text-3xl font-extrabold">{heading}</h3>
            <p className="mt-1.5 text-md font-medium text-white/50">
              {content}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
