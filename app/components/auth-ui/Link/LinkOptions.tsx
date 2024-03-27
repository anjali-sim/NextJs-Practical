import { LinkProps } from "@/app/types/types";
import Link from "next/link";

export default function LinkOptions({ linkHref, title, description }: LinkProps) {
  return (
    <>
      <div className="mt-4 flex items-center ml-3">
        <span>{description}</span>
        <Link
          className="inline-flex items-center justify-center text-sky-200 text-md focus-visible:outline-none hover:text-sky-400 h-10 ml-3 text-md underline"
          href={linkHref}
        >
          {title}
        </Link>
      </div>
    </>
  );
}
