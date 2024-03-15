import Link from "next/link";

interface Props {
  title: string;
  isLogin: boolean;
}

export default function Button({ title, isLogin = true }: Props) {
  return (
    <>
      <div className="mt-4 ml-3 flex justify-between">
        {isLogin && (
          <Link
            className="text-md font-medium text-foreground underline mt-1"
            href="/forgot-password"
          >
            Forgot password?
          </Link>
        )}
        <button
          className="font-extrabold hover:bg-black hover:text-white hover:ring hover:ring-white transition duration-300 inline-flex items-center justify-center rounded-md text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-black h-10 px-4 py-2"
        type="submit"
        >
          {title}
        </button>
      </div>
    </>
  );
}
