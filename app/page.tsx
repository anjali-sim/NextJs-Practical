import {auth} from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  console.log(session)
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
   <>
   <div>
        Protected Page
        <div>
          Name: {session.user?.name}
          {session.user?.email && <p>Email: {session.user.email}</p>}
          
        </div>
        <Link
          href="/api/auth/signout"
          className="px-5 py-1 border border-blue-400"
        >
          Signout
        </Link>
      </div>
      </>
  );
}
